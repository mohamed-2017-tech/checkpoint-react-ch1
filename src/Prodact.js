import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from './prodacts';
import './App.css'
function Prodact() {
  console.log({products});
  return (
    <div className='prod' >
      {products.map((prod, index) => (
        <Card key={index} style={{ width: '18rem' , boxShadow: '5px 5px 5px rgb(98, 90, 90)'}}>
          <Card.Img variant="top" src={prod.image} alt={prod.name} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Text>
              {prod.description}
              <br />
              <strong>${prod.price}</strong>
            </Card.Text>
            <Button variant="primary">Acheter</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Prodact;