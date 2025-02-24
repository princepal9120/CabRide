import { useCallback, useEffect, useState } from "react";



export const fetchApi = async(url: string, options?: RequestInit)=>{
    try {
        const response= await fetch(url, options)
        if(!response.ok){
            new Error(`HTTP Erro!, ${response.status}`)
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error", error);
        throw error;
        
    }
    
}


export const useFetch=<T>(url:string, options?: RequestInit)=>{
    const [data,setData] =useState<T| null> (null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null >(null)
    const fetchData= useCallback( async () => {
        setLoading(true);
        setError(null);
        try {
            const res= await fetchApi(url, options);
            setData(res.data);
        } catch (error) {
            setError((error as Error).message)
            
        }finally{
            setLoading(false)
        }
    },[url,options])

    useEffect(()=>{
        fetchData()
    },[fetchData])
    return {data, loading, error, refetch: fetchData}
}