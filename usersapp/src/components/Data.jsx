import React, { useEffect, useState } from 'react'
import {DataList} from './DataList'
export const Data = () => {

    
    const[endPoint,setEndPoint] = useState('users')
    const[title,setTitle] = useState('User list');
    const[btn,setBtn] = useState('Change to comments')

    const changeEndP=()=>{
      if(endPoint == 'users'){
        setEndPoint('comments');
        setTitle('Comment list');
        setBtn('Change to users');
      }else{
        setEndPoint('users');
        setTitle('User list');
        setBtn('Change to comments');
      }

    }
    
  return (
    <>
    <h1>{title}</h1>
    <hr/>
    <button onClick={changeEndP} className='btn btn-secondary'>{btn}</button>
    <DataList info={endPoint}/>
    </>
  )
}
