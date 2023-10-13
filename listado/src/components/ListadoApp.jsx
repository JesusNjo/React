import { useEffect, useState } from "react"
import { Items } from "./Items";
import { AgregarTarea } from "./AgregarTarea";

export const ListadoApp = () => {
    

    const arrayList= [
        {id: 1,nombre: "Instalaciones necesarias", visto: true},
        {id: 2,nombre: "Uso de vite", visto: true},
        {id: 3,nombre: "Components", visto: true},
        {id: 4,nombre: "Variables JSX", visto: true},
        {id: 5,nombre: "Props", visto: true},
        {id: 6,nombre: "Events", visto: true},
        {id: 7,nombre: "useState", visto: true},
        {id: 8,nombre: "Ternarios", visto: true},
        {id: 9,nombre: "Redux", visto: false},
        {id: 10,nombre: "customHooks", visto: false}
    ]
    const[list,setList] = useState(arrayList);
    
    const onEmisionChild=(value)=>{
        let valueConst = value.trim();
       if(valueConst.length<=5){return}else{
           const envio ={
               id: list.length+1,
               nombre : value,
               visto : false,
            }
            setList([...list,envio]);
        }
    }
    
  return (
    <>
    <AgregarTarea valor={/*setList*/onEmisionChild}/>
    <br/>
    <ul>
    {list.map((item)=>{return <Items key={item.id} id={item.id} name={item.nombre} value={item.visto}></Items>})}
    </ul>
    </>
  )
}
