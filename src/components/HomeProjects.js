// src/components/HomeProjects.js
import CarouselProjectCard from './CarouselProjectCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Added shadcn button import

const projectData = [
  {
    title: 'CrystalGarden',
    image: '/images/CrystalGarden1.png',
    shortDescription: 'Short description of Crystal Garden project.',
  },
  {
    title: 'The Blue List',
    image: '/images/TheBlueList1.png',
    shortDescription: 'A cutting-edge college search engine that revolutionizes how high school students explore higher education',
  },
  {
    title: 'Pandora',
    image: '/images/Pandora1.png',
    shortDescription: 'Short description of Pandora project.',
  },
  {
    title: 'My Portfolio site',
    image: ['/images/MyPortfolio1.jpg'],
    shortDescription: 'Detailed My Portfolio site description...',
  },
];

export default function HomeProjects() {
  const settings = {
    dots: false, // Changed from true to false to remove dots
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="projects-section">
      <div className="glassmorphic-wrapper">
        <div className="projects-header">
          <h2>Projects</h2>
          <Button asChild variant="default">
            <Link href="/projects">View All</Link>
          </Button>
        </div>
        {/* Wrap the slider in a container with extra horizontal padding */}
        <div className="slider-container">
          <Slider {...settings}>
            {projectData.map(project => (
              <CarouselProjectCard key={project.title} project={project} />
            ))}
          </Slider>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 1.875rem 1.25rem; // Reduced from 3.75rem to 1.875rem (60px to 30px)
          background-color: transparent; /* Changed from #1A1A1A to transparent */
          color: #fff;
          position: relative;
        }
        
        .glassmorphic-wrapper {
          position: relative;
          z-index: 20;
          width: 100%;
          background: rgba(20, 20, 20, 0.65);
          border-radius: 1.25rem; // 20px
          overflow: hidden;
          padding: 1.75rem; // Updated from 2.5rem to 1.75rem to match other components
          
          /* Enhanced glassmorphism effect with stronger shadow */
          backdrop-filter: blur(0.75rem); // 12px
          -webkit-backdrop-filter: blur(0.75rem); // 12px
          box-shadow: 0 0.75rem 3rem rgba(0, 0, 0, 0.7),
                      0 0.25rem 1rem rgba(124, 58, 237, 0.15),
                      0 -0.25rem 1rem rgba(16, 185, 129, 0.1); // Multi-layered shadow with subtle color
          border: 1px solid rgba(255, 255, 255, 0.15);
          
          /* Metallic highlight at top */
          background-image: linear-gradient(
            180deg, 
            rgba(255, 255, 255, 0.12) 0%, 
            rgba(255, 255, 255, 0.03) 5%,
            rgba(255, 255, 255, 0) 20%
          );
          
          /* Add subtle shadow glow on hover */
          transition: all 0.3s ease-out;
        }
        
        /* Optional subtle hover effect */
        .glassmorphic-wrapper:hover {
          box-shadow: 0 0.85rem 3.5rem rgba(0, 0, 0, 0.7),
                      0 0.35rem 1.25rem rgba(124, 58, 237, 0.2),
                      0 -0.35rem 1.25rem rgba(16, 185, 129, 0.15);
          transform: translateY(-3px);
        }
        
        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem; // 20px
        }
        
        .projects-header h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin: 0;
          padding: 0;
        }
        
        /* Direct styling for the "View All" button */
        :global(.projects-header button) {
          font-size: 1rem !important;
          padding: 0.5rem 1rem;
        }
        
        .slider-container {
          padding: 0 1.875rem; // 0px 30px
          position: relative;
        }
      `}</style>

      <style jsx global>{`
        .slick-track {
          display: flex !important;
        }
        
        /* Corrected padding values for slick slides */
        .slick-slide {
          padding: 0.625rem 0.625rem !important; // 10px 10px
          box-sizing: border-box;
          float: none !important;
        }
        
        /* Custom arrow SVGs with proper centering - same as project page */
        .projects-section .slick-prev, 
        .projects-section .slick-next {
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
        
        .projects-section .slick-prev:hover, 
        .projects-section .slick-next:hover {
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
          transform: translate(0, -50%) scale(1.15); /* Added scale effect on hover */
        }
        
        .projects-section .slick-prev {
          left: 15px;
        }
        
        .projects-section .slick-next {
          right: 15px;
        }
        
        /* Centralized arrow positioning */
        .projects-section .slick-prev:before, 
        .projects-section .slick-next:before {
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
        .projects-section .slick-prev:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E");
          transform: translate(-50%, -50%) translateX(-1px); /* Fine-tune centering */
        }
        
        .projects-section .slick-next:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E");
          transform: translate(-50%, -50%) translateX(1px); /* Fine-tune centering */
        }
        
        /* Adding active state styling to match hover */
        .projects-section .slick-prev:active, 
        .projects-section .slick-next:active {
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
          transform: translate(0, -50%) scale(1.15);
        }
      `}</style>
    </section>
  );
}
