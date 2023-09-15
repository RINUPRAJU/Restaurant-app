import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({op}) {
    console.log(op);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Operating hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup as="ol" numbered>
                <ListGroup.Item as="li">Monday:{op?.Monday}</ListGroup.Item>
                <ListGroup.Item as="li">Tuesday:{op?.Tuesday}</ListGroup.Item>
                <ListGroup.Item as="li">Wednesday:{op?.Wednesday}</ListGroup.Item>
                <ListGroup.Item as="li">Thursday:{op?.Thursday}</ListGroup.Item>
                <ListGroup.Item as="li">Friday:{op?.Friday}</ListGroup.Item>
                <ListGroup.Item as="li">Saturday:{op?.Saturday}</ListGroup.Item>
                <ListGroup.Item as="li">Sunday:{op?.Sunday}</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop