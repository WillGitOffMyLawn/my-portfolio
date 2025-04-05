// pages/projects/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import projectStyles from '@/styles/project.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectCarousel from '@/components/ProjectCarousel';

const projectData = [
  {
    title: 'Hydroponics',
    images: ['/images/Hydroponics1.png', '/images/Hydroponics2.png'],
    longDescription: 'Detailed Hydroponics description...',
    skills: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    title: 'CrystalGarden',
    images: ['/images/CrystalGarden1.png', '/images/CrystalGarden2.png'],
    longDescription: 'Detailed CrystalGarden description...',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Pandora',
    images: ['/images/Pandora1.png', '/images/Pandora2.png'],
    longDescription: 'Detailed Pandora description...',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
  // New projects - Websites
  {
    title: 'The Blue List',
    images: ['/images/TheBlueList1.png', '/images/TheBlueList2.png'],
    longDescription: 'For The Blue List, I spearheaded the design and development of a cutting-edge college search engine that revolutionizes how high school students explore higher education. This platform features a dynamic map search and an advanced filtering system that lets students narrow their options by region, state, GPA range of accepted students, campus size, available majors, and even "vibe tags".\n\nWorking closely with both technical teams and educational experts, I ensured the filtering system was not only robust but also delivered results in under 0.5 seconds—a significant upgrade over the previous site. The custom map interface allows students to visualize college locations and explore options they might never have considered otherwise.\n\nThe result is a beautiful, intuitive, and highly responsive experience that empowers students to make well-informed college decisions while providing a seamless user experience across all devices.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Smart Konnection',
    images: ['/images/SmartKonnection1.png', '/images/SmartKonnection2.png'],
    longDescription: 'Smart Konnection is a custom-built e-commerce marketplace focused on supporting local brick and mortar stores that also seamlessly combines traditional credit card payments with innovative cryptocurrency transactions.\n\nI personally handled all of the wireframing and directed the development process to create an intuitive platform where merchants can sign up to offer goods, services, gift cards, and coupons.\n\nThe site includes a robust backend that allows merchants to manage advertising space, featured business slots, and real-time coupon redemptions, ensuring a smooth and engaging experience for both customers and business owners. Our collaboration with Forumpay led to the creation of a secure and flexible payment gateway, highlighting the project\'s commitment to modern payment innovations and user-friendly design.',
    skills: ['React', 'Node.js', 'Express'],
  },
  {
    title: 'TL Brown Law',
    images: ['/images/TLBrownLaw1.png','/images/TLBrownLaw2.png'],
    longDescription: 'In revamping TL Brown Law’s digital presence, I took full responsibility for both the design and development of a new, comprehensive website for a successful law firm serving over 7,500 clients. The project involved consolidating the firm’s bilingual needs—previously handled by two separate domains—into a unified site. I conducted thorough research and implemented the WPML plugin to seamlessly manage multilingual content, reducing inconsistencies and hosting costs. The website also features detailed service descriptions, a secure document submission system, a dedicated payment portal, and a live chat function, all of which I personally built to meet the firm’s high standards for security and usability.',
    skills: ['React', 'Node.js', 'Express'],
  },
  {
    title: 'Elevate Scholars Academy',
    images: ['/images/ElevateScholars1.png', '/images/ElevateScholars2.png'],
    longDescription: 'For Elevate Scholars Academy, I directed the design and development of a custom PHP platform specifically tailored for a tutoring company serving grades 3–12. The project’s highlight was the creation of a custom calendar tool that efficiently tracks and books appointments while preventing scheduling conflicts. Working closely with the academy’s top tutor, we fine-tuned every aspect—from seamless user account creation to the integration of appointment notifications complete with Zoom links for online sessions. This project not only simplified scheduling but also enhanced the overall tutoring experience, ensuring reliability and ease of use for both students and tutors.',
    skills: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Health Workers By Zip',
    images: ['/images/HealthWorkers1.png', '/images/HealthWorkers2.png'],
    longDescription: 'Detailed Health Workers By Zip description...',
    skills: ['Django', 'Python', 'PostgreSQL'],
  },
  {
    title: 'My Portfolio site',
    images: ['/images/MyPortfolio1.jpg', '/images/MyPortfolio2.jpg'],
    longDescription: 'Detailed My Portfolio site description...',
    skills: ['Next.js', 'VS Code', 'Copilot', 'Tailwind CSS', 'Git'],
  },
  {
    title: 'More Sites',
    images: ['/images/MoreSites1.png', '/images/MoreSites2.png'],
    longDescription: 'Detailed More Sites description...',
    skills: ['WordPress'],
  },
  {
    title: 'Reach Out',
    images: ['/images/ReachOut1.png', '/images/ReachOut2.png'],
    longDescription: 'Detailed Reach Out description...',
    skills: ['React Native', 'Expo'],
  },
  {
    title: 'Optio',
    images: ['/images/Optio1.png', '/images/Optio2.png'],
    longDescription: 'Detailed Optio description...',
    skills: ['Flutter', 'Firebase'],
  },
  // New project - Other
  {
    title: 'Light Disk Player',
    images: ['/images/LightDiskPlayer1.png', '/images/LightDiskPlayer2.png'],
    longDescription: 'Detailed Light Disk Player description...',
    skills: ['Electron', 'JavaScript'],
  },
];

export default function ProjectDetails({ project }) {
  const router = useRouter();
  
  if (router.isFallback) return <div>Loading...</div>;

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

      <div className="content">
        <div className="left-column">
          <div className="carousel-container">
            <ProjectCarousel images={project.images} title={project.title} />
          </div>
          
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
        </div>
        
        <div className="right-column">
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
          padding: 2rem;
          min-height: 100vh;
          background-color: #1a1a1a;
          color: #fff;
          max-width: 100vw;
          overflow-x: hidden;
        }
        
        .header {
          display: flex;
          align-items: center;
          margin-bottom: 2.5rem;
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
        }
        
        .content {
          display: flex;
          flex-direction: row;
          gap: 3rem;
          justify-content: center;
          align-items: flex-start;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .left-column,
        .right-column {
          flex: 1;
          min-width: 0;
        }
        
        .carousel-container {
          width: 100%;
          max-width: 100%;
          margin-bottom: 1.5rem;
        }
        
        .project-description {
          padding-top: 0;
          margin-top: 0;
        }
        
        .project-description p {
          margin-top: 0;
        }
        
        .skills-section {
          margin-top: 0.5rem;
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
          .content {
            flex-direction: column;
          }
          
          .left-column,
          .right-column {
            width: 100%;
          }
        }
      `}</style>
      
      <style jsx global>{`
        /* Improved carousel arrow styling with enhanced glassmorphic effect */
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
          
          /* Enhanced glassmorphic effect with darker background for better visibility */
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 1;
          
          /* Hide text */
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
        
        .slick-prev {
          left: 15px;
        }
        
        .slick-next {
          right: 15px;
        }
        
        /* Centralized arrow positioning */
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
        
        /* Custom arrow SVGs with proper centering */
        .slick-prev:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E");
          transform: translate(-50%, -50%) translateX(-1px); /* Fine-tune centering */
        }
        
        .slick-next:before {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E");
          transform: translate(-50%, -50%) translateX(1px); /* Fine-tune centering */
        }
        
        /* Dot indicators styling to match the updated theme */
        .slick-dots {
          bottom: -30px;
        }
        
        .slick-dots li button {
          position: relative;
        }
        
        .slick-dots li button:before {
          color: rgba(255, 255, 255, 0.5);
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .slick-dots li.slick-active button:before {
          color: #fff;
          opacity: 1;
        }
        
        /* Hide the "Previous" and "Next" text */
        .slick-prev,
        .slick-next {
          font-size: 0;
          line-height: 0;
          text-indent: -9999px;
        }
        
        /* Additional hiding for any span or text nodes */
        .slick-prev *,
        .slick-next * {
          display: none;
        }
        
        /* Completely reset the before pseudo elements */
        .slick-prev:before,
        .slick-next:before {
          content: "" !important;
          display: block !important;
          width: 20px !important;
          height: 20px !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
          background-size: contain !important;
        }
        
        /* Fix for buttons remaining transparent after click */
        .slick-prev:focus, 
        .slick-next:focus {
          background: rgba(0, 0, 0, 0.6);
          outline: none;
          opacity: 1;
        }
        
        /* Adding active state styling to match hover */
        .slick-prev:active, 
        .slick-next:active {
          background: rgba(0, 0, 0, 0.75);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = projectData.map((proj) => ({
    params: { id: proj.title },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projectData.find((p) => p.title === params.id);
  return { props: { project } };
}
