// src/components/Passions.js
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import LazyVideo from './LazyVideo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, CarouselItem } from '@/components/ui/carousel'; // Import shadcn carousel components

// Sample data: passionsData as before…
const passionsData = [
  {
    title: "Travel Memories",
    items: [
      {
        mediaType: "image",
        src: "/images/travel/travel1.jpg",
        title: "Beach Sunset",
      },
      {
        mediaType: "video",
        src: "/videos/travel2.mp4",
        poster: "/images/travel/travel2.jpg",
        title: "Desert Sunrise",
      },
      {
        mediaType: "video",
        src: "/videos/travel3.mp4",
        poster: "/images/travel/travel3.jpg",
        title: "Mountain Hike",
      },
    ],
  },
  {
    title: "Inspiring Quotes",
    items: [
      {
        mediaType: "quote",
        text: "The journey of a thousand miles begins with a single step.",
      },
      {
        mediaType: "quote",
        text: "Innovation distinguishes between a leader and a follower.",
      },
      {
        mediaType: "quote",
        text: "Life is what happens when you're busy making other plans.",
      },
    ],
  },
  {
    title: "Learning New Skills",
    items: [
      {
        mediaType: "image",
        src: "/images/newskill1.jpg",
        title: "3D Printing",
      },
      {
        mediaType: "image",
        src: "/images/newskill2.jpg",
        title: "Blacksmithing",
      },
      {
        mediaType: "image",
        src: "/images/newskill3.jpg",
        title: "PC Building",
      },
      {
        mediaType: "image",
        src: "/images/newskill4.jpg",
        title: "Jewelry Design",
      },
      {
        mediaType: "image",
        src: "/images/newskill5.jpg",
        title: "CAD",
      },
    ],
  },
];

// New sample featured data for the shadcn carousel row
const featuredData = [
  {
    mediaType: "image",
    src: "/images/featured/featured1.jpg",
    title: "Project Alpha",
  },
  {
    mediaType: "image",
    src: "/images/featured/featured2.jpg",
    title: "Project Beta",
  },
  {
    mediaType: "image",
    src: "/images/featured/featured3.jpg",
    title: "Project Gamma",
  },
];

export default function Passions() {
  // React-slick settings for the passions sliders
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    adaptiveHeight: false
  };

  return (
    <section className="passions-section">
      <h3>Passions</h3>
      <div className="passions-grid">
        {passionsData.map((passion, index) => (
          <motion.div
            key={index}
            className="passion-slider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h4>{passion.title}</h4>
            <Slider {...sliderSettings}>
              {passion.items.map((item, i) => (
                <div key={i} className="slider-item">
                  <div className="slider-card">
                    {item.mediaType === "image" && (
                      <>
                        <img src={item.src} alt={item.title || passion.title} />
                        {item.title && <p className="media-title">{item.title}</p>}
                      </>
                    )}
                    {item.mediaType === "video" && (
                      <>
                        <LazyVideo src={item.src} poster={item.poster} />
                        {item.title && <p className="media-title">{item.title}</p>}
                      </>
                    )}
                    {item.mediaType === "quote" && (
                      <p className="quote">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        ))}
      </div>

      {/* New Row: Featured Works using shadcn Carousel */}
      <div className="carousel-row">
        <h3>Featured Works</h3>
        <Carousel>
          {featuredData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="carousel-card">
                {item.mediaType === "image" && (
                  <img src={item.src} alt={item.title} />
                )}
                <p className="carousel-title">{item.title}</p>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>

      <style jsx global>{`
        /* Custom arrows styling for GridOfSliders component */
        .passions-section .slick-prev, 
        .passions-section .slick-next {
          position: absolute;
          top: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(32px, 3.5vw, 44px); /* Responsive width */
          height: clamp(32px, 3.5vw, 44px); /* Responsive height */
          padding: 0;
          transform: translate(0, -50%);
          cursor: pointer;
          border: none;
          outline: none;
          
          /* Enhanced glassmorphic effect with darker background for better visibility */
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 10;
          
          /* Hide text */
          font-size: 0;
          color: transparent;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .passions-section .slick-prev:hover, 
        .passions-section .slick-next:hover {
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
          transform: translate(0, -50%) scale(1.15); /* Added scale effect on hover */
        }
        
        .passions-section .slick-prev {
          left: 15px;
        }
        
        .passions-section .slick-next {
          right: 15px;
        }
        
        /* Centralized arrow positioning */
        .passions-section .slick-prev:before, 
        .passions-section .slick-next:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(16px, 2vw, 24px); /* Responsive icon size */
          height: clamp(16px, 2vw, 24px); /* Responsive icon size */
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 1;
        }
        
        /* Custom arrow SVGs with proper centering */
        .passions-section .slick-prev:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E");
          transform: translate(-50%, -50%) translateX(-1px); /* Fine-tune centering */
        }
        
        .passions-section .slick-next:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E");
          transform: translate(-50%, -50%) translateX(1px); /* Fine-tune centering */
        }
        
        /* Adding active state styling to match hover */
        .passions-section .slick-prev:active, 
        .passions-section .slick-next:active {
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
          transform: translate(0, -50%) scale(1.15);
        }
      `}</style>
    </section>
  );
}
