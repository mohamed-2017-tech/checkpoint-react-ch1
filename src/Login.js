import React from 'react'
import { Link} from "react-router-dom";
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <nav>
         <Link to="/home">Home</Link><br></br>
         <Link to="/products">products</Link>
       </nav>
    </div>
  )
}

export default Login