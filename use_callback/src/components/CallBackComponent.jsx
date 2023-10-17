import { useCallback, useState } from "react"
import { Increment } from "./Increment"

export const CallBackComponent = () => {
    const[counter,setCounter] = useState(0);
    const[valor,setValor] = useState(0);
   
    const incrementChild = useCallback((val) =>{
        setCounter( counterar => counter + val);
        
    },[])
  return (
    <>
    <h1>Counter: {counter} ({valor})</h1>
    <Increment increment = {incrementChild}/>
    </>
    )
}
