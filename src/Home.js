import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar ,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Home Page</h1>
       <Button variant="info" onClick={()=>navigate (`/category/laptop`)}>Navigate to Products</Button>
    </div>
  )
}

export default Home