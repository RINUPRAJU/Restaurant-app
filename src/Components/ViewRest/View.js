import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../RestOp/Restop';
import Restreview from '../RestReview/Restreview';

function View() {

  //to hold particular restaurant deatils
  const[RestDetails,setRestDetails] = useState([])

  //get particular id from the restaurant
    // const pathParameter = useParams()
    // console.log(pathParameter.id);

  //destructring
  const {id} = useParams()
  console.log(id);

  //api call for fetch particular restaurant details
    const fetchData = async()=>{
    // const response = await axios.get(`http://localhost:3001/restaurants/${id}`)
    // console.log(response.data);

  //destructring the above one
    const {data} = await axios.get(`http://localhost:3001/restaurants/${id}`)
    console.log(data);
    setRestDetails(data)
  }
  console.log(RestDetails); //restaurant details

  //function call
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <>
      <Row>
        <Col sm={12} md={3}>
          {/* image */}
          <Image className='rounded border m-3 border-2 shadow' src={RestDetails.photograph} fluid/>
        </Col>
        <Col>
          {/* content */}
          <h1 className='text-center m-4 text-warning'style={{ overflow: 'hidden'}}>{RestDetails.name}</h1>
          <div className='container w-50 mb-5'>
            <ListGroup className='shadow'>
              <ListGroup.Item>Neighborhood:{RestDetails.neighborhood}</ListGroup.Item>
              <ListGroup.Item>Address:{RestDetails.address}</ListGroup.Item>
              <ListGroup.Item>Cuisine type:{RestDetails.cuisine_type}</ListGroup.Item>
              <ListGroup.Item><Restop op={RestDetails.operating_hours}/></ListGroup.Item>
              <ListGroup.Item><Restreview re={RestDetails.reviews}/></ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default View