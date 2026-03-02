import Head from 'next/head';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import HomeProjects from '../components/HomeProjects';
import Resume from '../components/Resume';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>William Fagan — Strategic Manager &amp; Developer</title>
        <meta name="description" content="Portfolio of William Fagan — Strategic Manager, Developer, and Innovator. Product leadership spanning robotics, SaaS, and cross-functional teams." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://williamhfagan.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="William Fagan — Strategic Manager & Developer" />
        <meta property="og:description" content="Product leadership spanning robotics, SaaS, and cross-functional teams." />
        <meta property="og:url" content="https://williamhfagan.com" />
        <meta property="og:image" content="https://williamhfagan.com/images/Headshot.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="William Fagan — Strategic Manager & Developer" />
        <meta name="twitter:description" content="Product leadership spanning robotics, SaaS, and cross-functional teams." />
        <meta name="twitter:image" content="https://williamhfagan.com/images/Headshot.webp" />
      </Head>
      <Hero />
      <div className="home-container">
        <Skills />
        <HomeProjects />
        <Resume />
        <About />
        <Contact />
      </div>
      <style jsx>{`
        .home-container {
          width: 100%;
          max-width: 1800px;
          padding: 0 clamp(1rem, 3vw, 3rem);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
      `}</style>
    </>
  );
}
