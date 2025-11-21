import React, { useEffect } from 'react' // <--- ADDED 'useEffect' HERE
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'


const FeaturedToursList = () => {


    useEffect(() => {
      Aos.init({
        duration: 1000, 
        once: true, 
      });
      Aos.refresh(); 
    }, []);
  

  return (
    <>
    {
    
      tourData?.map((tour, index) => (
        
        <Col 
          lg='3' 
          className='mb-4' 
          key={tour.id}
          data-aos="fade-up" 
          data-aos-delay={`${index * 100}`} 
        >
          <TourCard tour={tour}></TourCard>
        </Col>
      ))
    }
    </>
  )
}

export default FeaturedToursList