import React from 'react'

export const Increment = React.memo(({increment}) => {
    console.log('re-draw');
  return (
    <button onClick={() => increment(10)}>+1</button>
  )
}
)