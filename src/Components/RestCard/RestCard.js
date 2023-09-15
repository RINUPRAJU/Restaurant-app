import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './RestCard.css'
import { Link } from 'react-router-dom';

function RestCard({restaurants}) {
    console.log(restaurants);
  return (
    <>
    <Link to={`/view/${restaurants.id}`}>
    
    <Card className='cards'>
      <Card.Img  className='image' variant="top" src={restaurants.photograph} />
      <Card.Body>
        <Card.Title className='texts'>{restaurants.name}</Card.Title>
        <Card.Text className='text'>
            {restaurants.address}
            {restaurants.cuisine_type}
            {restaurants.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </>
  )
}

export default RestCard