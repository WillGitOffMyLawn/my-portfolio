// pages/projects/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import projectStyles from '@/styles/project.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectCarousel from '@/components/ProjectCarousel';
import projects from '@/data/projects';

export default function ProjectDetails({ project }) {
  const router = useRouter();
  
  if (router.isFallback) return <div>Loading...</div>;

  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <div className="project-page">
      <div className="header">
        <Button 
          variant="default" 
          className="back-button"
          asChild
        >
          <Link href="/projects"><FaArrowLeft style={{marginRight: '8px'}} /> Projects</Link>
        </Button>
        <h1 className="project-title">{project.title}</h1>
      </div>

      {/* Two-column layout: image left, details right */}
      <div className="project-layout">
        <div className="project-media">
          <div className="main-image-container">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              style={{ objectFit: 'contain', width: '100%', height: 'auto', maxHeight: '600px', borderRadius: '12px' }}
              priority
            />
          </div>

          {hasMultipleImages && (
            <div className="carousel-container">
              <ProjectCarousel images={project.images} title={project.title} />
            </div>
          )}
        </div>

        <div className="project-details">
          <div className="skills-section">
            <h3>Relevant Skills</h3>
            <div className="skill-tags">
              {project.skills.map((skill, idx) => (
                <Badge 
                  key={idx} 
                  variant="outline" 
                  className="skill-badge"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className={`${projectStyles.projectSection} project-description`} style={{ margin: 0, padding: 0 }}>
            {project.longDescription.split('\n\n').map((paragraph, index) => (
              <p 
                key={index} 
                className={projectStyles.projectDescription} 
                style={{ 
                  margin: '0 0 1.25rem 0',
                  lineHeight: '1.6',
                  fontSize: '1.1rem'
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .project-page {
          padding: 6rem 2rem 2rem;
          min-height: 100vh;
          background-color: transparent;
          color: #fff;
          max-width: 100vw;
          overflow-x: hidden;
        }
        
        .header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          position: relative;
        }
        
        .back-button {
          position: absolute;
          left: 0;
          z-index: 10;
        }
        
        .project-title {
          width: 100%;
          text-align: center;
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2.5rem;
          margin: 0;
          text-shadow: 0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.15);
        }

        .main-image-container {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(20, 20, 20, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .carousel-container {
          width: 100%;
          margin-top: 1.5rem;
        }

        .project-layout {
          display: flex;
          flex-direction: row;
          gap: 3rem;
          align-items: flex-start;
          width: 100%;
          max-width: 1800px;
          margin: 0 auto;
        }

        .project-media {
          flex: 1;
          min-width: 0;
          max-width: 50%;
        }

        .project-details {
          flex: 1;
          min-width: 0;
        }
        
        .content {
          display: flex;
          flex-direction: row;
          gap: 3rem;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          max-width: 90vw;
          margin: 0 auto;
        }
        
        .left-column,
        .right-column {
          flex: 1;
          min-width: 0;
        }
        
        .project-description {
          padding-top: 0;
          margin-top: 0;
        }
        
        .project-description p {
          margin-top: 0;
        }
        
        .skills-section {
          margin-top: 0;
          margin-bottom: 2rem;
        }
        
        .skills-section h3 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        
        @media (max-width: 900px) {
          .project-layout {
            flex-direction: column;
          }

          .project-media {
            max-width: 100%;
          }
        }
      `}</style>
      
      <style jsx global>{`
        .slick-prev, 
        .slick-next {
          position: absolute;
          top: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          padding: 0;
          transform: translate(0, -50%);
          cursor: pointer;
          border: none;
          outline: none;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(0.75rem);
          -webkit-backdrop-filter: blur(0.75rem);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.15);
          z-index: 1;
          font-size: 0;
          color: transparent;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .slick-prev:hover, 
        .slick-next:hover {
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
        }
        
        .slick-prev { left: 15px; }
        .slick-next { right: 15px; }
        
        .slick-prev:before, 
        .slick-next:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 1;
        }
        
        .slick-prev:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E");
          transform: translate(-50%, -50%) translateX(-1px);
        }
        
        .slick-next:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E");
          transform: translate(-50%, -50%) translateX(1px);
        }
        
        .slick-dots { bottom: -30px; }
        .slick-dots li button { position: relative; }
        .slick-dots li button:before {
          color: rgba(255, 255, 255, 0.5);
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active button:before {
          color: #fff;
          opacity: 1;
        }
        
        .slick-prev, .slick-next {
          font-size: 0;
          line-height: 0;
          text-indent: -9999px;
        }
        .slick-prev *, .slick-next * { display: none; }
        
        .slick-prev:before, .slick-next:before {
          content: "" !important;
          display: block !important;
          width: 20px !important;
          height: 20px !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-size: contain !important;
        }
        
        .slick-prev:focus, .slick-next:focus {
          background: rgba(0, 0, 0, 0.6);
          outline: none;
          opacity: 1;
        }
        .slick-prev:active, .slick-next:active {
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((proj) => ({
    params: { id: proj.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.id);
  if (!project) return { notFound: true };
  return { props: { project } };
}
