import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import WorldImg from '../assets/images/world.png'
import experinceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'  
import SearchBar from '../shared/SearchBar'
import ServicesList from '../services/ServicesList'
import FeaturedToursList from '../components/featured-tours/FeaturedToursList'
import MasonaryImagesGallery from '../components/image-gallery/masonaryImagesGallery'
import Testimonials from '../components/Testimonial1/Testimonials'
import NewsLetter from '../shared/NewsLetter'



const Home = () => {
  return (
    <>
      {/*============== Hero Start==========*/}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={'Know Before you GO'} />
                  <img src={WorldImg} alt="" />
                </div>

                <h1>
                  Travelling Opens the door of creating{" "}
                  <span className="highlight">Memories</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam sed harum recusandae corrupti at esse ex praesentium saepe 
                  illum dolorem nam dicta aliquam, maiores accusamus voluptate atque vitae?
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} controls />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/*============== Hero End==========*/}
      <section>
      <Container>
        <Row>
          <Col lg='3'>
    <h5 className="services__subtitle">What we search</h5>
    <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServicesList/>
        </Row>
        
      </Container>
      </section>

      {/* =============fertured tour section start */}
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our Featured Tours</h2> 
          </Col>
          <FeaturedToursList/>
        </Row>
      </Container>
       {/* =============fertured tour section end */}

        {/* =============Experience section start */}
        <section>
          <Container>
            <Row>
              <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>
                <h2>With Our All Experince <br />We Will Serve</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti similique nisi dolorum perferendis,
                  <br/> error, unde blanditiis at quae voluptates rem quisquam? Optio modi perspiciatis libero earum eligendi quod delectus tempore!
                </p>
              </div>
              <div className="counter__wrapper d-flex align-item-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>

                  <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Trip</h6>
                </div>

                  <div className="counter__box">
                  <span>12</span>
                  <h6>Years Experince</h6>
                </div>
              </div>
              </Col>

               <Col lg='6'>
                <div className="experience__img">
                  <img src={experinceImg}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

         {/* =============Experience section end */}

         {/* ============ Gallery Section Start============= */}
          <section>
            <Container>
              <Row>
                <Col lg='12'>
                <Subtitle subtitle={'Gallery'}/>
                <h2 className="gallery__title">Visit Our Customers Trip Gallery</h2>
                
                </Col>

                <Col lg='12'>
                <MasonaryImagesGallery/>
                </Col>
              </Row>
            </Container>
          </section>
         {/* ============ Gallery Section End============= */}

         {/* ======== Testimonail Section Start */}
         <section>
          <Container>
            <Row>
              <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testomonial__title">What About Our Fans Say Us</h2>

              </Col>
              <Col lg='12'>
              <Testimonials/>
              </Col>
            </Row>
          </Container>
         </section>
           {/* ======== Testimonail Section End */}

    </>
  )
}

export default Home
