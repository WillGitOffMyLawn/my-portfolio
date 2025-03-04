// pages/projects/[id].js
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import Link from 'next/link';

const projectData = [
  // Match the "title" fields used above (Hydroponics, CrystalGarden, Pandora, etc.)
  {
    title: 'Hydroponics',
    images: ['/images/Hydroponics1.png'],
    longDescription: 'Detailed Hydroponics description...',
    skills: ['Python', 'Django', 'PostgreSQL'],
  },
  {
    title: 'CrystalGarden',
    images: ['/images/CrystalGarden1.png'],
    longDescription: 'Detailed CrystalGarden description...',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Pandora',
    images: ['/images/Pandora1.png'],
    longDescription: 'Detailed Pandora description...',
    skills: ['Node.js', 'Express', 'MongoDB'],
  },
];

export default function ProjectDetails({ project }) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <section className="project-details">
      <Link href="/projects" passHref legacyBehavior>
        <a className="back-button">&larr; Back to Projects</a>
      </Link>
      <div className="details-container">
        <div className="carousel">
          <Slider {...sliderSettings}>
            {project.images.map((img, idx) => (
              <div key={idx} className="carousel-image">
                <img src={img} alt={`${project.title} image ${idx + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="description">
          <h1>{project.title}</h1>
          <p>{project.longDescription}</p>
          <div className="skills">
            <h3>Relevant Skills</h3>
            <ul>
              {project.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .project-details {
          padding: 40px 20px;
          background-color: #1A1A1A;
          color: #fff;
          min-height: 100vh;
        }
        .back-button {
          text-decoration: none;
          color: #FFD700;
          font-family: 'Nexa Bold', sans-serif;
          margin-bottom: 20px;
          display: inline-block;
        }
        .details-container {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }
        .carousel {
          flex: 1 1 400px;
          max-width: 600px;
        }
        .carousel-image img {
          width: 100%;
          border-radius: 10px;
        }
        .description {
          flex: 1 1 300px;
          font-family: 'Nexa Bold', sans-serif;
        }
        .description h1 {
          font-family: 'BankGothic Md BT', sans-serif;
          margin-bottom: 20px;
        }
        .skills {
          margin-top: 40px;
        }
        .skills h3 {
          margin-bottom: 10px;
          font-family: 'BankGothic Md BT', sans-serif;
        }
        .skills ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .skills li {
          background: rgba(255, 255, 255, 0.1);
          padding: 8px 12px;
          margin-bottom: 8px;
          border-radius: 5px;
          display: inline-block;
          margin-right: 8px;
        }
      `}</style>
    </section>
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
