// src/components/HomeProjects.js
import CarouselProjectCard from './CarouselProjectCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const projectData = [
  {
    title: 'Hydroponics',
    image: '/images/Hydroponics1.png',
    shortDescription: 'Short description of Hydroponics project.',
  },
  {
    title: 'CrystalGarden',
    image: '/images/CrystalGarden1.png',
    shortDescription: 'Short description of Crystal Garden project.',
  },
  {
    title: 'Pandora',
    image: '/images/Pandora1.png',
    shortDescription: 'Short description of Pandora project.',
  },
];

export default function HomeProjects() {
  const settings = {
    dots: true,
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
      <div className="projects-header">
        <h2>Projects</h2>
        <a href="/projects" className="button view-all-button">View All</a>
      </div>
      {/* Wrap the slider in a container with extra horizontal padding */}
      <div className="slider-container">
        <Slider {...settings}>
          {projectData.map(project => (
            <CarouselProjectCard key={project.title} project={project} />
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 60px 20px;
          background-color: #1A1A1A;
          color: #fff;
          position: relative;
        }
        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .projects-header h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin: 0;
        }
        .slider-container {
          padding: 0 30px; /* Increase left/right padding as needed */
        }
      `}</style>

      {/* Minimal global slick overrides */}
      <style jsx global>{`
        .slick-track {
          display: flex !important;
        }
        /* Remove negative margin override on slick-list so that the container's padding controls the spacing */
        .slick-slide {
          padding: 10 10px !important;
          box-sizing: border-box;
          float: none !important;
        }
      `}</style>
    </section>
  );
}
