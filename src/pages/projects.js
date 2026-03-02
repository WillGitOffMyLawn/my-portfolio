// src/pages/projects.js
import { useState } from 'react';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaArrowLeft } from 'react-icons/fa';
import projects, { getCategories } from '@/data/projects';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = getCategories();

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Projects — William Fagan</title>
        <meta name="description" content="Browse William Fagan's portfolio of projects spanning web development, product management, and innovation." />
      </Head>
      <section className="projects-page">
      <header className="projects-header">
        <div className="back-button-container">
          <Button asChild variant="default">
            <Link href="/"><FaArrowLeft style={{marginRight: '8px'}} /> Home</Link>
          </Button>
        </div>
        <h1 className="page-title">Projects</h1>
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
        {filteredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <style jsx>{`
        .projects-page {
          padding: 100px 20px 60px;
          background-color: transparent;
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
          width: 100px;
        }
        .placeholder-div {
          width: 100px;
        }
        .page-title {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin: 0;
          text-align: center;
          flex-grow: 1;
          text-shadow: 0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.15);
        }
        .filter-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
          justify-content: center;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1600px;
          margin: 0 auto;
        }
        @media (min-width: 1280px) {
          .projects-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
      </section>
    </>
  );
}
