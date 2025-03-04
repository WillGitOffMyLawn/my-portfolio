// src/components/ProjectCard.js
import Link from 'next/link';

export default function ProjectCard({ project }) {
  // We'll assume project.title is the slug-friendly name (e.g., "CrystalGarden")
  return (
    <Link href={`/projects/${project.title}`} passHref legacyBehavior>
      <a className="project-card">
        <h3>{project.title}</h3>
        <img src={project.image} alt={`${project.title} image`} />
        <p>{project.shortDescription}</p>
        <style jsx>{`
          .project-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 15px;
            backdrop-filter: blur(5px);
            text-align: center;
            font-family: 'Nexa Bold', sans-serif;
            text-decoration: none;
            color: inherit;
            transition: transform 0.2s ease;
          }
          .project-card:hover {
            transform: scale(1.03);
          }
          h3 {
            margin: 0 0 10px;
          }
          img {
            max-width: 100%;
            border-radius: 15px;
            margin-bottom: 10px;
          }
          p {
            margin: 0;
          }
        `}</style>
      </a>
    </Link>
  );
}
