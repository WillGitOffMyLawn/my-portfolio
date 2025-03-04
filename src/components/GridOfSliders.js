// src/components/Passions.js
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import LazyVideo from './LazyVideo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample data: place images in /images/travel/..., videos in /videos/, etc.
const passionsData = [
  {
    title: "Travel Memories",
    items: [
      {
        mediaType: "image",
        src: "/images/travel/travel1.jpg",
        title: "Beach Sunset",
      },
      {
        mediaType: "video",
        src: "/videos/travel2.mp4",
        poster: "/images/travel/travel2.jpg",
        title: "Desert Sunrise",
      },
      {
        mediaType: "video",
        src: "/videos/travel3.mp4",
        poster: "/images/travel/travel3.jpg",
        title: "Mountain Hike",
      },
    ],
  },
  {
    title: "Inspiring Quotes",
    items: [
      {
        mediaType: "quote",
        text: "The journey of a thousand miles begins with a single step.",
      },
      {
        mediaType: "quote",
        text: "Innovation distinguishes between a leader and a follower.",
      },
      {
        mediaType: "quote",
        text: "Life is what happens when you're busy making other plans.",
      },
    ],
  },
  {
    title: "Art & Music",
    items: [
      {
        mediaType: "image",
        src: "/images/art/art1.jpg",
        title: "Abstract Painting",
      },
      {
        mediaType: "image",
        src: "/images/art/art2.jpg",
        title: "Street Graffiti",
      },
      {
        mediaType: "image",
        src: "/images/music/music1.jpg",
        title: "Live Concert",
      },
    ],
  },
];

export default function Passions() {
  // React-slick settings for manual navigation and a fixed aspect ratio approach
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    adaptiveHeight: false, // We'll fix the slide size with an aspect ratio container
  };

  return (
    <section className="passions-section">
      <h3>Passions</h3>
      <div className="passions-grid">
        {passionsData.map((passion, index) => (
          <motion.div
            key={index}
            className="passion-slider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h4>{passion.title}</h4>
            <Slider {...sliderSettings}>
              {passion.items.map((item, i) => (
                <div key={i} className="slider-item">
                  <div className="slider-card">
                    {item.mediaType === "image" && (
                      <>
                        <img src={item.src} alt={item.title || passion.title} />
                        {item.title && <p className="media-title">{item.title}</p>}
                      </>
                    )}
                    {item.mediaType === "video" && (
                      <>
                        <LazyVideo src={item.src} poster={item.poster} />
                        {item.title && <p className="media-title">{item.title}</p>}
                      </>
                    )}
                    {item.mediaType === "quote" && (
                      <p className="quote">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .passions-section {
          padding: 60px 20px;
          background-color: #1A1A1A;
          color: #fff;
          max-width: 1200px;
          margin: 0 30px; /* 30px horizontal margin to make section thinner */
        }
        h3 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin-bottom: 40px;
          text-align: left;
        }
        .passions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 60px;
        }
        .passion-slider {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 20px;
        }
        .passion-slider h4 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 10px;
          text-align: left;
        }
        /* Each slide item uses an aspect-ratio container to keep height consistent */
        .slider-item {
          display: flex;
          justify-content: center;
          align-items: center;
          /* 16:9 aspect ratio container trick */
          position: relative;
          width: 100%;
          padding-bottom: 56.25%; /* (9/16 * 100%) for 16:9 */
        }
        .slider-card {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          margin: auto;
          width: 90%;
          max-width: 500px;
          text-align: center;
        }
        .slider-card img,
        .slider-card video {
          width: 100%;
          height: auto;
          max-height: 80%;
          object-fit: contain;
          border-radius: 10px;
        }
        .media-title {
          margin-top: 10px;
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
        }
        .quote {
          font-family: 'Nexa Bold', sans-serif;
          font-size: 1rem;
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </section>
  );
}
