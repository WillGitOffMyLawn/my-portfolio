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
        <title>William Fagan&apos;s Portfolio</title>
        <meta name="description" content="Crafting the Future - Portfolio of William Fagan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="container">
        <Skills />
        <HomeProjects />
        <Resume />
        <About />
        <Contact />
      </div>
      <style jsx>{`
        .container {
          padding: 0 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
