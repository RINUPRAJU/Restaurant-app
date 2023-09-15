import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import Card from 'react-bootstrap/Card';
import { Collapse } from 'react-bootstrap';

function Restreview({re}) {
  console.log(re);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
       View Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-fade-text">
        {
          re?.map((item)=>(
            <Card style={{ width: '30rem', margin:'10px'}}>
              <Card.Body>
                <Card.Text>{item.name}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Rating:{item.rating}</Card.Subtitle>
                <Card.Text>{item.date}</Card.Text>
                <Card.Text>{item.comments}</Card.Text>
              </Card.Body>
            </Card>
          ))
        }
        </div>
      </Collapse>
    </div>
  )
}

export default Restreview