from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import datetime
from sklearn.ensemble import RandomForestRegressor
from skforecast.ForecasterAutoreg import ForecasterAutoreg
from skforecast.model_selection import grid_search_forecaster
import json

app = Flask(__name__)


@app.route('/predict', methods=['POST'])
def predict():
    # recupera i parametri dal corpo della richiesta in formato json
    json_params = json.loads(request.data)
    Territorio = json_params['territorio']
    Indicatori = json_params['indicatori']
    Tipologia_di_esercizio = json_params['esercizio']
    Paese_residenza = json_params['paese']
    mesi = json_params['steps']

    df = pd.read_csv('Data.csv')

    df = df.drop(df.columns[0], axis=1)

    # filtrato dataset tramite maschere
    df = (df[(df['TIME'] != "2008") & (df['TIME'] != "2009") & (df['TIME'] != "2010") & (df['TIME'] != "2011") & (
                df['TIME'] != "2012") & (df['TIME'] != "2013") & (df['TIME'] != "2014") & (df['TIME'] != "2015") & (
                         df['TIME'] != "2016")
             & (df['TIME'] != "2017") & (df['TIME'] != "2018") & (df['TIME'] != "2019") & (df['TIME'] != "2020") & (
                         df['TIME'] != "2021")])

    # impostato Time come date e settato come index

    df['TIME'] = pd.to_datetime(df['TIME'], format='%Y/%m')
    df = df.set_index('TIME')

    #replacements
    df['Indicatori'] = df['Indicatori'].replace('arrivi ','arrivi')
    df['Paese di residenza dei clienti'] = df['Paese di residenza dei clienti'].replace('Paesi esteri','abroad')
    df['Paese di residenza dei clienti'] = df['Paese di residenza dei clienti'].replace('Italia','Italy')
    df['Tipologia di esercizio'] = df['Tipologia di esercizio'].replace('esercizi alberghieri','hotel')
    df['Tipologia di esercizio'] = df['Tipologia di esercizio'].replace('esercizi extra-alberghieri','non-hotel')
    df['Indicatori'] = df['Indicatori'].replace('arrivi','Arrival')
    df['Indicatori'] = df['Indicatori'].replace('presenze','Stay')
    df['Territorio'] = df['Territorio'].replace('Verbano-Cusio-Ossola','Verbania')

    # applicazione maschere
    df = df[(df["Territorio"] == Territorio) & (df["Indicatori"] == Indicatori) & (df['Tipologia di esercizio'] == Tipologia_di_esercizio) & (df["Paese di residenza dei clienti"] == Paese_residenza )]

    # controllo indici unici ,impostato frequenza mensile e ordinato in base al date time
    df = df.asfreq('MS')
    df = df.sort_index()

    steps = 15  # (df['Value'].to_numpy().size)/3
    data_train = df[:-steps]
    data_test = df[-steps:]

    # Create and train forecaster
    # ==============================================================================
    forecaster = ForecasterAutoreg(
        regressor=RandomForestRegressor(random_state=123),
        lags=6
    )
    y = data_train['Value']
    forecaster.fit(y)

    # Predictions
    # steps=months of prediction
    # ==============================================================================
    steps = mesi + 15 + 12
    predictions = forecaster.predict(steps=mesi)


    # Hyperparameter Grid search
    # ==============================================================================
    forecaster = ForecasterAutoreg(
        regressor=RandomForestRegressor(random_state=123),
        lags=12  # This value will be replaced in the grid search
    )

    # Lags used as predictors
    lags_grid = [10, 20]

    # Regressor's hyperparameters
    param_grid = {'n_estimators': [100, 500],
                  'max_depth': [3, 5, 10]}

    results_grid = grid_search_forecaster(
        forecaster=forecaster,
        y=data_train['Value'],
        param_grid=param_grid,
        lags_grid=lags_grid,
        steps= steps,
        refit=True,
        metric='mean_squared_error',
        initial_train_size=int(len(data_train) * 0.5),
        fixed_train_size=False,
        return_best=True,
        verbose=False
    )

    # Create and train forecaster with the best hyperparameters
    # ==============================================================================
    regressor = RandomForestRegressor(max_depth=3, n_estimators=500, random_state=123)
    forecaster = ForecasterAutoreg(
        regressor=regressor,
        lags=20
    )

    forecaster.fit(y=data_train['Value'])
    # Predictions
    # ==============================================================================
    predictions = forecaster.predict(steps=steps)
    

    # restituisce la previsione in formato json
    p_frame = predictions.to_frame()

    p_frame.index.name = 'date'

    mask = (p_frame.index >= datetime.datetime.today())
    p_frame = p_frame.loc[mask]

    p_frame.index = p_frame.index.strftime('%Y-%m-%d')
    p = p_frame.reset_index().to_json(orient='records')
    p = json_object = json.loads(p)
    return jsonify(p)


if __name__ == '__main__':
    app.run(port='5050' ,debug=True)