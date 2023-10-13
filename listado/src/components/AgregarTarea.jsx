import React, { useState } from 'react'
import { ListadoApp } from './ListadoApp';

export const AgregarTarea = ({valor}) => {

    const[change,setChange] = useState('');

    const onInputChange=(e)=>{
        setChange(e.target.value);
    }
    const onSubmit=(e)=>{
        
        
        e.preventDefault();
        //valor(tareas =>[...tareas,envio])
        valor(change);
    }

  return (
    <>
    <form action="" onSubmit={onSubmit}>
    <input value={change} type="text" 
    placeholder='Agregar tarea' 
    onChange={onInputChange} className="form-control w-25 text-center"/>
    </form>
    </>
  )
}
