// src/pages/projects.js
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Import shadcn button
import { FaArrowLeft } from 'react-icons/fa';

const projectData = [
  {
    title: 'Hydroponics',
    image: '/images/Hydroponics1.png',
    category: 'Gardening',
    shortDescription: 'Short description of Hydroponics project.',
    longDescription: 'A longer, detailed description of the Hydroponics project.',
    images: ['/images/Hydroponics1.png'],
    skills: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    title: 'CrystalGarden',
    image: '/images/CrystalGarden1.png',
    category: 'Gardening',
    shortDescription: 'Short description of Crystal Garden project.',
    longDescription: 'A longer, detailed description of the Crystal Garden project.',
    images: ['/images/CrystalGarden1.png'],
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Pandora',
    image: '/images/Pandora1.png',
    category: 'Tech',
    shortDescription: 'Short description of Pandora project.',
    longDescription: 'A longer, detailed description of the Pandora project.',
    images: ['/images/Pandora1.png'],
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'The Blue List',
    image: '/images/TheBlueList1.png',
    category: 'Websites',
    shortDescription: 'A cutting-edge college search engine that revolutionizes how high school students explore higher education',
    longDescription: 'For The Blue List, I spearheaded the design and development of a cutting-edge college search engine that revolutionizes how high school students explore higher education. This platform features a dynamic map search and an advanced filtering system that lets students narrow their options by region, state, GPA range of accepted students, campus size, available majors, and even “vibe tags”—carefully selected by college counselors to capture the unique character of each school. To achieve this, I collaborated closely with both technical teams and educational experts, ensuring the filtering system was not only robust but also delivered results in under 0.5 seconds—a significant upgrade over the previous site. The result is a beautiful, intuitive, and highly responsive experience that empowers students to make well-informed college decisions while providing a seamless user experience.',
    images: ['/images/TheBlueList1.png'],
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Smart Konnection',
    image: '/images/SmartKonnection1.png',
    category: 'Websites',
    shortDescription: 'A custom-built e-commerce marketplace focused on supporting local brick and mortar stores',
    longDescription: 'Detailed Smart Konnection description...',
    images: ['/images/SmartKonnection1.png'],
    skills: ['React', 'Node.js', 'Express'],
  },
  {
    title: 'Elevate Scholars Academy',
    image: '/images/ElevateScholars1.png',
    category: 'Websites',
    shortDescription: 'A custom PHP platform specifically tailored for a tutoring company serving grades 3–12',
    longDescription: 'Detailed Elevate Scholars Academy description...',
    images: ['/images/ElevateScholars1.png'],
    skills: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'TL Brown Law',
    image: '/images/TLBrownLaw1.png',
    category: 'Websites',
    shortDescription: 'TL Brown law firm website.',
    longDescription: 'TL Brown law firm website.',
    images: ['/images/TLBrownLaw1.png'],
    skills: ['Django', 'Python', 'PostgreSQL'],
  },
  {
    title: 'My Portfolio site',
    image: '/images/MyPortfolio1.jpg',
    category: 'Websites',
    shortDescription: 'Detailed My Portfolio site description...',
    longDescription: 'Detailed My Portfolio site description...',
    images: ['/images/MyPortfolio1.png'],
    skills: ['Next.js', 'React'],
  },
  {
    title: 'More Sites',
    image: '/images/MoreSites1.png',
    category: 'Websites',
    shortDescription: 'Detailed More Sites description...',
    longDescription: 'Detailed More Sites description...',
    images: ['/images/MoreSites1.png'],
    skills: ['WordPress'],
  },
  // New projects - Web and Mobile Apps
  {
    title: 'Reach Out',
    image: '/images/ReachOut1.png',
    category: 'Web and Mobile Apps',
    shortDescription: 'Detailed Reach Out description...',
    longDescription: 'Detailed Reach Out description...',
    images: ['/images/ReachOut1.png'],
    skills: ['React Native', 'Expo'],
  },
  {
    title: 'Optio',
    image: '/images/Optio1.png',
    category: 'Web and Mobile Apps',
    shortDescription: 'Detailed Optio description...',
    longDescription: 'Detailed Optio description...',
    images: ['/images/Optio1.png'],
    skills: ['Flutter', 'Firebase'],
  },
  {
    title: 'Health Workers By Zip',
    image: '/images/HealthWorkers1.png',
    category: 'Websites',
    shortDescription: 'Detailed Health Workers By Zip description...',
    longDescription: 'Detailed Health Workers By Zip description...',
    images: ['/images/HealthWorkers1.png'],
    skills: ['Django', 'Python', 'PostgreSQL'],
  },
  // New project - Other
  {
    title: 'Light Disk Player',
    image: '/images/LightDiskPlayer1.png',
    category: 'Other',
    shortDescription: 'Detailed Light Disk Player description...',
    longDescription: 'Detailed Light Disk Player description...',
    images: ['/images/LightDiskPlayer1.png'],
    skills: ['Electron', 'JavaScript'],
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Gardening', 'Tech', 'Websites', 'Web and Mobile Apps', 'Other'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter(project => project.category === selectedCategory);

  return (
    <section className="projects-page">
      {/* Back-to-home button using shadcn button component */}
      <header className="projects-header">
        <div className="back-button-container">
          <Button asChild variant="default">
            <Link href="/"><FaArrowLeft style={{marginRight: '8px'}} /> Home</Link>
          </Button>
        </div>
        <h1 className="page-title">Projects</h1>
        {/* Empty div to balance the layout */}
        <div className="placeholder-div"></div>
      </header>
      
      <div className="filter-container">
        {categories.map(cat => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "secondary"}
            size="sm"
            onClick={() => setSelectedCategory(cat)}
            className="filter-button"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <style jsx>{`
        .projects-page {
          padding: 60px 20px;
          background-color: #1A1A1A;
          color: #fff;
          min-height: 100vh;
        }
        .projects-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          position: relative;
        }
        
        .back-button-container {
          width: 100px; /* Fixed width to balance the layout */
        }
        
        .placeholder-div {
          width: 100px; /* Same width as back-button-container to ensure balance */
        }
        
        .page-title {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin: 0;
          text-align: center;
          flex-grow: 1; /* Allows the title to take up available space */
        }
        .filter-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
          justify-content: center; /* Add this to center the buttons horizontally */
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
      `}</style>
    </section>
  );
}
