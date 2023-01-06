import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Services from '../services/Services';

const Home = () => {
  const year = new Date().getFullYear()
  return (
    <Helmet title={'Home'}>
      <section className='hero-section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero-content'>
                <p className="hero-subtitle">
                  Trending product in  {year}
                </p>
                <h2> Make Your Interior More Minimalistic & Modern  </h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, perferendis illo a nam non, quo ad molestias accusamus sed porro nostrum dolorum accusantium autem officia hic est distinctio impedit nemo.</p>
                <motion.button whileTap={{ scale: 1.2 }} className='shop-btn'><Link to='/shop'>SHOP NOW</Link>

                </motion.button>
              </div>

            </Col>
            <Col lg='6' md='6'>
              <div className='hero-img'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
<section className='trending-products'>
  <Container>
    <Row>
      <Col lg='12' className='text-center'>
        <h2 className='section-title'> Trending Products</h2>
      </Col>
    </Row>
  </Container>
</section>
    </Helmet>
  )
}

export default Home