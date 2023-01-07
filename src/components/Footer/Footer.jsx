import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/eco-logo.png';
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              {/* <img src={logo} alt="logo" /> */}
              <div>
                <h1 className='text-white'>Multimart</h1>
              </div>
            </div>
            <p className="footer-text mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus perspiciatis repellat sint et, quas nisi tempore voluptatibus modi perferendis quae?
            </p>
          </Col>
          <Col lg='3'>
            <div className='footer-quick-links'>
              <h4 className="quick-links-title">
                Top Categories
              </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Mobile Phone
                  </Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Modern Sofa
                  </Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Arm Chair
                  </Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Smart Watches
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
            <div className='footer-quick-links'>
              <h4 className="quick-links-title">
                Useful Links
              </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>
                    Shop
                  </Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>
                    Cart
                  </Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>
                    Login
                  </Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>
                    Privacy Policy
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className='footer-quick-links'>
              <h4 className="quick-links-title">
                Contact
              </h4>
              <ListGroup className='footer-contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p> 123 ZindaBazar, Sylhet, Bangladesh</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p> +91-1234567890</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                  <i class="ri-mail-line"></i>
                  </span>
                  <p>example123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'> 
          <p className='footer-copyright'>
            Copyright { year } developed by Dharstec Solution. All rights reserved.
          </p>
          </Col>
        </Row>
      </Container>

    </footer>
  )
}

export default Footer
