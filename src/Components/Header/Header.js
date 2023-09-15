import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="/" className='text-light'>
        {/*icon*/}
        <i class="fa-solid fa-utensils fa-beat-fade m-2"></i>
            My Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header