import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [status,setStatus] = useState({
        data: null,
        isLoading : true,
        erros : null
    })

    

    const getData = async ()=>{
        try {
            const response = await fetch(url);
            const getInfo = await response.json();
            
            setStatus({
                data: getInfo.results,
                isLoading: false,
                errors: null
            })
        } catch (error) {
            setStatus({
                data: null,
                isLoading: null,
                errors: error
            })
            
        }
     
    }

    useEffect(()=>{getData()},[url]);
    const{data,isLoading,errors}= status;
    return{
        data,
        isLoading,
        errors
    }
};
