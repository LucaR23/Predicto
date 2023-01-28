//React core imports
import { useState, useEffect } from "react";
//env imorts
import { activeHost } from "../__functions/evironment";
//Data response type
export type predictionDataResponse = {
  date: string;
  pred: number;
};
export type jsonInPostType = {
  steps: number | null;
  territorio: string | null;
  indicatori: string | null;
  esercizio: string | null;
  paese: string | null;
};

//Hook for fetch data
const useFetchPr = (
  data: jsonInPostType
): [
  apiData: predictionDataResponse[] | null,
  loading: boolean | null,
  error: boolean | null
] => {
  //Json for POST body
  const jsonIn = JSON.stringify(data);
  //State for handle respopnse result
  const [apiData, setData] = useState<predictionDataResponse[] | null>(null);
  //State for handle loading
  const [loading, setLoading] = useState<boolean | null>(null);
  //State for handle error
  const [error, setError] = useState<boolean | null>(null);
  //Effect on json change
  useEffect(() => {
    setError(false);
    if(typeof data.steps === 'number' && (data.indicatori === 'Arrival' || data.indicatori === 'Stay') && (data.esercizio === 'hotel' || data.esercizio === 'non-hotel') && (data.paese === 'Italy' || data.paese === 'abroad') && (data.territorio === 'Cuneo' || data.territorio === 'Torino' || data.territorio === 'Asti' || data.territorio === 'Vercelli' || data.territorio === 'Verbania' || data.territorio === 'Novara' || data.territorio === 'Biella' || data.territorio === 'Alessandria')) {
    setLoading(true);
    fetch(`http://${activeHost}/predictions/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonIn,
    })
      .then(async (res) => {
        const resJson = await res.json();
        setLoading(false);
        setData(resJson);
        console.log(apiData);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
    }
    else {
      setError(true)
    }
  }, [jsonIn]);

  //Return the states
  return [apiData, loading, error];
};

export default useFetchPr;
