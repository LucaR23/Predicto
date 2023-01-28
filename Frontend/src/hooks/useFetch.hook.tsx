//React core import
import { useState, useEffect } from 'react';
//Data response type
export type dataResponse = {
    anno: number,
    mese?: number,
    valore: number,
    provincia?:string,
    esercizio?:string,
    arrivoPresenza: string
}
//Hook for fetch data
const useFetch = (url: string) => {
    //State for handle respopnse result
    const [apiData, setData] = useState<dataResponse[] | string[] | null>(null);
    //State for handle loading
    const [loading, setLoading] = useState<boolean | null>(null);
    //State for handle error
    const [error, setError] = useState<boolean | null>(null);

    //useEffect that run on url change
    useEffect(() => {
        setLoading(true)
        setError(null);

        fetch(url , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(async res => {
                const resJson = await res.json();
                setLoading(false);
                setData(resJson);
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })

    }, [url])

    //Return the states
    return [ apiData, loading, error ]
}

export default useFetch;