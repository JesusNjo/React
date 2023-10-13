import React from 'react'

export const DataHelper =async (info) => {
   
        const response = await fetch(`https://jsonplaceholder.typicode.com/${info}`);
        const data = await response.json();
        console.log(data)
        return{
            data,
            isLoading: false
        }
        
    
}
