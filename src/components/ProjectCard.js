// src/components/ProjectCard.js
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

export default function ProjectCard({ project, index = 0 }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -8;
    const rotateY = (x - 0.5) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <Link href={`/projects/${project.slug}`} passHref legacyBehavior>
      <a
        className="project-card"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ animation: `fadeInUp 0.5s ease both`, animationDelay: `${index * 60}ms` }}
      >
        <div className="card-image-wrap">
          <Image src={project.image} alt={project.title} width={800} height={450} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
          <div className="card-overlay" />
        </div>
        <div className="card-body">
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
          {project.category && (
            <span className="card-category">{project.category}</span>
          )}
        </div>
        <style jsx>{`
          .project-card {
            display: block;
            background: rgba(20, 20, 20, 0.7);
            border-radius: 1rem;
            backdrop-filter: blur(0.75rem);
            -webkit-backdrop-filter: blur(0.75rem);
            border: 1px solid rgba(255, 255, 255, 0.15);
            text-decoration: none;
            color: #fff;
            overflow: hidden;
            cursor: pointer;
            transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3),
                        0 0 1px rgba(255, 255, 255, 0.15),
                        inset 0 1px 0 rgba(255, 255, 255, 0.08);
            will-change: transform;
          }
          .project-card:hover {
            box-shadow: 0 20px 40px rgba(0,0,0,0.4),
                        0 0 30px rgba(124, 58, 237, 0.2);
            border-color: rgba(124, 58, 237, 0.4);
          }
          .card-image-wrap {
            position: relative;
            overflow: hidden;
            aspect-ratio: 3/2;
            background: rgba(10, 10, 15, 0.8);
          }
          .card-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.8) 100%);
            pointer-events: none;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          }
          .project-card:hover img {
            transform: scale(1.08);
          }
          .card-body {
            padding: 1.25rem;
            font-family: 'Nexa Bold', sans-serif;
          }
          h3 {
            margin: 0 0 0.5rem;
            font-family: 'BankGothic Md BT', sans-serif;
            font-size: 1.15rem;
            line-height: 1.3;
            color: #fff;
          }
          p {
            margin: 0;
            font-size: 0.85rem;
            line-height: 1.5;
            color: rgba(255,255,255,0.6);
          }
          .card-category {
            display: inline-block;
            margin-top: 0.75rem;
            padding: 0.25rem 0.75rem;
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            border-radius: 999px;
            background: rgba(124, 58, 237, 0.2);
            color: rgba(124, 58, 237, 0.9);
            border: 1px solid rgba(124, 58, 237, 0.3);
          }
        `}</style>
      </a>
    </Link>
  );
}
