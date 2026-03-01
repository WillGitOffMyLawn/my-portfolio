// src/components/HomeProjects.js
import CarouselProjectCard from './CarouselProjectCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getFeaturedProjects } from '@/data/projects';

const featuredProjects = getFeaturedProjects();

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
            {featuredProjects.map(project => (
              <CarouselProjectCard key={project.slug} project={project} />
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
    </section>
  );
}
