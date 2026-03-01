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
        <title>William Fagan — Product Manager &amp; Developer</title>
        <meta name="description" content="Portfolio of William Fagan — Product Manager, Developer, and Innovator. Crafting the future with sleek, futuristic digital experiences." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://williamhfagan.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="William Fagan — Product Manager & Developer" />
        <meta property="og:description" content="Crafting the future with sleek, futuristic digital experiences." />
        <meta property="og:url" content="https://williamhfagan.com" />
        <meta property="og:image" content="https://williamhfagan.com/images/Headshot.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="William Fagan — Product Manager & Developer" />
        <meta name="twitter:description" content="Crafting the future with sleek, futuristic digital experiences." />
        <meta name="twitter:image" content="https://williamhfagan.com/images/Headshot.png" />
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
