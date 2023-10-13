import React, { useMemo, useState } from 'react'


export const Calculos = () => {
    const [list,setList] = useState([1,2,3,4,5,6,7,8,9]);
    const [show,setShow] = useState(true);

    const addNumber=()=>{
        setList([...list,list[list.length-1] + 1]);
    }
    const getCalculo =(list)=> useMemo(()=>{
        console.log('Calculando');
        return list.reduce((a,b)=>{
            return a *= b;
        })
    },[list])
  return (
    <>
    <h2>Calculo: </h2>
    <p>{getCalculo(list)}</p>
    <button onClick={()=>setShow(!show)}>{show? 'Show' : 'Hide'}</button>
    <button onClick={()=> addNumber()}>Add number</button>
    </>
  )
}
