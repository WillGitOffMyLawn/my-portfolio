// src/pages/projects.js
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

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
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Gardening', 'Tech'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter(project => project.category === selectedCategory);

  return (
    <section className="projects-page">
      <h1>Projects</h1>
      <div className="filter-container">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-button ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
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
        h1 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin-bottom: 20px;
        }
        .filter-container {
          margin-bottom: 30px;
        }
        .filter-button {
          background-color: #333;
          color: #fff;
          border: none;
          padding: 10px 20px;
          margin-right: 10px;
          cursor: pointer;
          font-family: 'Nexa Bold', sans-serif;
          border-radius: 5px;
          transition: background-color 0.2s ease;
        }
        .filter-button:hover {
          background-color: #555;
        }
        .filter-button.active {
          background-color: #FFD700;
          color: #000;
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
