// src/components/CarouselProjectCard.js
import Link from 'next/link';
import Image from 'next/image';

export default function CarouselProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.slug}`} passHref legacyBehavior>
      <a className="carousel-project-card">
        <div className="card-image-wrap">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
          />
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
          .carousel-project-card {
            display: block;
            background: rgba(20, 20, 20, 0.7);
            border-radius: 1rem;
            backdrop-filter: blur(0.75rem);
            -webkit-backdrop-filter: blur(0.75rem);
            border: 1px solid rgba(255, 255, 255, 0.15);
            text-decoration: none;
            color: #fff;
            overflow: hidden;
            transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                        box-shadow 0.4s ease,
                        border-color 0.4s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.06);
          }
          .carousel-project-card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4),
                        0 0 30px rgba(124, 58, 237, 0.15);
            border-color: rgba(124, 58, 237, 0.3);
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
            object-fit: contain;
            transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          }
          .carousel-project-card:hover img {
            transform: scale(1.08);
          }
          .card-body {
            padding: 1rem 1.25rem 1.25rem;
            font-family: 'Nexa Bold', sans-serif;
          }
          h3 {
            margin: 0 0 0.5rem;
            font-family: 'BankGothic Md BT', sans-serif;
            font-size: 1.1rem;
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
            padding: 0.2rem 0.6rem;
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
