import React from 'react'

const Greeter = (props) => {
    console.log(props.name);
    
  return (
    <div><h1>Hello ,{props.name}</h1></div>
  )
}

export default Greeter