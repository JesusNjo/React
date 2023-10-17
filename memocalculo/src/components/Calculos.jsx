import React, { useMemo, useState } from 'react'
const initialArray = [1,2,3,4,5,6,7,8,9];

export const Calculos =  () => {
    const[arrayNumbers,setArrayNumbers]=useState(initialArray);
    const [show,setShow] = useState(true);
    const [changeColor,setChangeColor] = useState('btn btn-primary');
   

    const getCalculo =(arrayNumbers)=> useMemo(()=>{
      console.log('Calculando.....');
      
      return arrayNumbers.reduce((a,b)=> (a* b))
    },[arrayNumbers])

    const addNumberByUser= ()=>{
      let rest = prompt('Ingrese el numero a agregar');
      while (rest <= 0) {
        alert('El numero debe ser mayor a 0');
        rest = prompt('Ingrese el numero a agregar');
      }
      
      setArrayNumbers([...arrayNumbers,rest]);
    }
    const addNumbersToArray=()=>{
      setArrayNumbers([...arrayNumbers, arrayNumbers[arrayNumbers.length-1] + 1])
    }
    const resetNumbers=()=>{
      setArrayNumbers(initialArray);
    }
  return (
    <>
    <h2>Calculo: </h2>
     <p >{getCalculo(arrayNumbers)}</p>
     <button className='btn btn-danger' onClick={() => setShow(!show) }>{show ? "Show" : "Hide"}</button>
     <button className='btn btn-primary' onClick={addNumberByUser}>Add number by user</button>
     <button className='btn btn-secondary' onClick={addNumbersToArray}>Add number by array</button>
     <button className='btn btn-success' onClick={resetNumbers}>Reset</button>
    </>
  )
}
