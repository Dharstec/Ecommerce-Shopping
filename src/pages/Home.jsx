import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import products from '../assets/data/products';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import counterImg from '../assets/images/counter-timer-img.png';

import Clock from '../components/UI/Clock';
const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobilesProducts, setMobilesProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const [popularProducts, setPopularProducts] = useState([])


  const year = new Date().getFullYear()

  useEffect(() => {
    const filterdTrendingProducrs = products.filter(item => item.category === 'chair');
    const filterdBestSalesProducrs = products.filter(item => item.category === 'sofa');
    const filterdMobileProducrs = products.filter(item => item.category === 'mobile');
    const filterdWirelessProducrs = products.filter(item => item.category === 'wireless');
    const filterdPopularProducrs = products.filter(item => item.category === 'watch');

    setTrendingProducts(filterdTrendingProducrs);
    setBestSalesProducts(filterdBestSalesProducrs);
    setMobilesProducts(filterdMobileProducrs);
    setWirelessProducts(filterdWirelessProducrs);
    setPopularProducts(filterdPopularProducrs);
  }, [])
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
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className='best-sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section-title'> Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer-count">
        <Container>
          <Row>
            <Col lg='6' md='12'>
              <div className='clock-top-content'>
                <h4 className='text-white fs-6 mb-2'>
                  Limited Offers
                </h4>
                <h3 className='text-white fs-6 mb-3'>
                  Quality Armchair
                </h3>
              </div>
              <Clock />
              <motion.button whileTap={{ scale: 1.2 }} className='shop-btn store-btn'>
                <Link to='/shop'> Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='6' className='text-end counter-img'>
              <img src={counterImg} alt='' />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='new-arrivals'>

        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section-title'> New Arrivals</h2>
            </Col>
            <ProductsList data={mobilesProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className='popular-category '>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section-title'> Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
