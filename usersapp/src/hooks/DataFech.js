import React from 'react'
import { useState,useEffect } from 'react';
import { DataHelper } from '../helpers/DataHelper';
export const DataFech = (info) => {
    
    const[data,setData] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    
   useEffect(()=>{DataHelper(info)
.then(res=>{
    setData(res.data)
    setIsLoading(res.isLoading)
})},[info])
  return{
    data,
    isLoading
  }
}
