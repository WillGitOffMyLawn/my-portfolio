import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

const ProjectCarousel = ({ images, title }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  
  if (!isClient) {
    return (
      <div className="carousel-loading">
        {images.length > 0 && (
          <img 
            src={images[0]} 
            alt={`${title} image 1`} 
            className="static-image" 
          />
        )}
      </div>
    );
  }
  
  return (
    <div className="project-carousel-wrapper">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="carousel-slide">
            <img src={img} alt={`${title} image ${idx + 1}`} />
          </div>
        ))}
      </Slider>
      
      <style jsx>{`
        .project-carousel-wrapper {
          width: 100%;
          position: relative;
        }
        
        .carousel-slide {
          padding: 0 5px;
        }
        
        .carousel-slide img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          object-fit: contain;
          max-height: 500px;
        }
        
        .carousel-loading {
          width: 100%;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          background-color: rgba(30, 30, 30, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 300px;
        }
        
        .static-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          object-fit: contain;
          max-height: 500px;
        }
      `}</style>
    </div>
  );
};

export default ProjectCarousel;