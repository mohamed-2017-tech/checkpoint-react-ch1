import React from 'react'
import preson from './person'
const Row = ({ firstName, lastName, email, doSomethingAmazing }={preson}) => {
    
    
  return (
  
<div>
<div>
<span>First Name: {preson.firstName}</span>
</div>
<div>
<span>Last Name: {preson.lastName}</span>
</div>
<div>
<span>Email: {preson.email}</span>
</div>
<button onClick={preson.doSomethingAmazing}>Click me</button>
</div>

  )
}

export default Row