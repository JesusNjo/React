import React from 'react'
import { useState,useEffect } from 'react';
import { DataFech } from '../hooks/DataFech';
export const DataList = ({info}) => {
  
    const{data,isLoading} = DataFech(info);
  return (
    <>
    {isLoading ? <p>Cargando....</p> :data.map((item)=>{return <li key={item.id}>{item.name}</li>})}
    </>
  )
}
