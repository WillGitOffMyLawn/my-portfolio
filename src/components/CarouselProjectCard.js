// src/components/CarouselProjectCard.js
import Link from 'next/link';

export default function CarouselProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.title}`} passHref legacyBehavior>
      <a className="carousel-project-card">
        <h3>{project.title}</h3>
        <img src={project.image} alt={`${project.title} image`} />
        <p>{project.shortDescription}</p>
        <style jsx>{`
          .carousel-project-card {
            display: block; /* ensures the anchor behaves as a block */
            background: rgba(255, 255, 255, 0.1);
            padding: 1rem;
            border-radius: 15px;
            backdrop-filter: blur(5px);
            text-align: center;
            font-family: 'Nexa Bold', sans-serif;
            text-decoration: none;
            color: inherit;
            transition: transform 0.2s ease;
          }
          .carousel-project-card:hover {
            transform: scale(1.05);
          }
          h3 {
            margin: 0 0 1rem;
            font-size: 1.25rem; /* Updated from 1rem to match our minimum heading size */
            line-height: 1.4;
          }
          img {
            max-width: 100%;
            border-radius: 15px;
            margin-bottom: 1rem;
          }
          p {
            margin: 0;
            font-size: 1rem; /* Updated from 0.75rem to provide better readability */
            line-height: 1.4;
          }
        `}</style>
      </a>
    </Link>
  );
}
