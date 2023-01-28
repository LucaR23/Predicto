## Adopted choices:
In light of the customer's needs, the sklearn and skforecast libraries were adopted to analyze and predict the flow of tourists for accommodation establishments. It was decided not to take into account the years during which there was the Covid pandemic as they were deemed not suitable and homogeneous.

## Technical documentation of the prediction endpoint:
This code is a Flask application that implements a prediction endpoint for time series. The endpoint, /predict, accepts a JSON object containing the parameters for the prediction and returns the predicted results.

The code uses the following libraries:
- Flask for creating the web application and managing endpoints
- Numpy and Pandas for data handling
- Datetime for date format manipulation
- Sklearn and Skforecast for model training and prediction

## Operation
The predict() function starts by retrieving the parameters from the JSON object in the request body.
```python
@app.route('/predict', methods=['POST'])
def predict():
    # retrieves parameters from the request body in json format
    json_params = json.loads(request.data)
    Territory = json_params['territorio']
    Indicators = json_params['indicatori']
    Type_of_establishment = json_params['esercizio']
    Country_of_residence = json_params['paese']
    months = json_params['steps']
```
It then loads the Data.csv file.
```python
df = pd.read_csv('Data.csv')
```
The time column is converted to the datetime format and set as the index.
```python
df['TIME'] = pd.to_datetime(df['TIME'], format='%Y/%m')
df = df.set_index('TIME')
```
It then uses masks to filter the dataset based on the parameters specified for time, territory, indicators, type of establishment, and country of residence.

mask application
```python
df = df[(df["Territorio"] == Territorio) & (df["Indicatori"] == Indicatori) & (df['Tipologia di esercizio'] == Tipologia_di_esercizio) & (df["Paese di residenza dei clienti"] == Paese_residenza )
```
It also replaces some values in the dataframe with new values to adapt to the model's needs.

The filtered dataframe is then re-sampled to a monthly frequency and ordered by date.
```python
df = df.asfreq('MS')
df = df.sort_index()
```

The function then divides the dataframe into a training set and a test set.
```python
steps = 15 #number of months
data_train = df[:-steps]
data_test = df[-steps:]
```

The model is trained using ForecasterAutoreg of skforecast, which uses a random decision tree of sklearn (RandomForestRegressor) and 6 lags.

## Create and train forecaster
```python
forecaster = ForecasterAutoreg(
    regressor=RandomForestRegressor(random_state=123),
    lags=6
)
y = data_train['Value']
forecaster.fit(y)
```
The trained model is then used to make predictions on the test set and the results are returned to the user.
In general, this code provides an endpoint for a web application that accepts POST requests containing specific parameters and returns predictions based on a filtered time series and trained with a random decision tree. The skforecast library is used for autoregression and the sklearn.ensemble.RandomForestRegressor library for training the model.

### Contact us
matteo.giudilli@edu.itspiemonte.it
federico.toso@edu.itspiemonte.it

