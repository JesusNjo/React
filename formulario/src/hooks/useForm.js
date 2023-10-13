import React, { useState } from 'react'

export const useForm = (inicialForm = {}) => {
    const[formState,setFormState] = useState(inicialForm)
    
    

    const onInputChange=({target})=>{
        const{id,value} = target;
        setFormState({
            ...formState,
            [id] : value
        })
    }
  return {
        formState,
    ...formState,
    onInputChange
  }
}
