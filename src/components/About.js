import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from './CarouselArrows';
import LazyVideo from './LazyVideo';

// Sample data: place images in /images/travel/..., videos in /videos/, etc.
const passionsData = [
  {
    title: "Travel Memories",
    items: [
      {
        mediaType: "image",
        src: "/images/travel1.jpg",
        title: "Experienced the majesty of Zion National Park",
      },
      {
        mediaType: "video",
        src: "/videos/travelvid1.mp4",
        title: "Sunrise hot air balloon ride in Cappadocia, Türkiye",
      },
      {
        mediaType: "image",
        src: "/images/travel2.webp",
        title: "Hiked a rainy volcano in Iceland",
      },
      {
        mediaType: "image",
        src: "/images/travel3.webp",
        title: "Ran with the bulls in Pamplona, Spain",
      },
      {
        mediaType: "image",
        src: "/images/travel4.webp",
        title: "Visited the pyramids in Egypt",
      },
      {
        mediaType: "video",
        src: "/videos/travelvid3.mp4",
        title: "Worked for a month as a handyman in Amsterdam",
      },
      {
        mediaType: "image",
        src: "/images/travel5.webp",
        title: "Explored the Wadi Rum desert in Jordan",
      },
      {
        mediaType: "image",
        src: "/images/travel6.webp",
        title: "Summited Acatenango volcano in Guatemala",
      },
      {
        mediaType: "image",
        src: "/images/travel7.webp",
        title: "Warmed by the eternal flames of Mount Chimaera",
      },
      {
        mediaType: "video",
        src: "/videos/travelvid2.mp4",
        title: "Swam at the baths in Budapest",
      },
      {
        mediaType: "image",
        src: "/images/travel8.webp",
        title: "Met an elephant in Chiang Mai, Thailand",
      },
      {
        mediaType: "image",
        src: "/images/travel9.jpg",
        title: "Admired the stave church architecture in Norway",
      },
      {
        mediaType: "image",
        src: "/images/travel10.jpg",
        title: "Sailed around Croatia's islands",
      },
    ],
  },
  {
    title: "Core Inspirations",
    items: [
      {
        mediaType: "quote",
        text: "Quality is not an act, it is a habit. – Aristotle",
      },
      {
        mediaType: "quote",
        text: "Everything in moderation, including moderation. – Oscar Wilde",
      },
      {
        mediaType: "quote",
        text: "Great things are done by a series of small things brought together. – Vincent Van Gogh",
      },
      {
        mediaType: "quote",
        text: "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
      },
      {
        mediaType: "quote",
        text: "Vision without action is merely a dream. Action without vision just passes the time. – Joel A. Barker",
      },
      {
        mediaType: "quote",
        text: "The happiness of your life depends upon the quality of your thoughts. – Marcus Aurelius",
      },
      {
        mediaType: "quote",
        text: "Creativity is intelligence having fun. – Albert Einstein",
      },
      {
        mediaType: "quote",
        text: "Do not go gentle into that good night. Rage, rage against the dying of the light. – Dylan Thomas",
      },
      {
        mediaType: "quote",
        text: "My brain is only a receiver, in the universe there is a core from which we obtain knowledge, strength and inspiration. -Nikola Tesla",
      },
      {
        mediaType: "quote",
        text: "It is not death that a man should fear, but he should fear never beginning to live. – Marcus Aurelius",
      },
      {
        mediaType: "quote",
        text: "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
      },
      {
        mediaType: "quote",
        text: "The only way to do great work is to love what you do. – Steve Jobs",
      },
    ],
  },
  {
    title: "Learning New Skills",
    items: [
      { mediaType: "image", src: "/images/newskill3dprinting.jpg", title: "3D Printing" },
      { mediaType: "image", src: "/images/newskillpcbuilding.jpg", title: "PC Building" },
      { mediaType: "image", src: "/images/newskillcad.jpg", title: "CAD" },
      { 
        mediaType: "video", 
        src: "/videos/newskillblacksmithing.mp4", 
        title: "Blacksmithing" 
      },
      { mediaType: "image", src: "/images/newskillmotorcycle.png", title: "Riding a motorcycle" },
      { mediaType: "image", src: "/images/newskilljewelry.jpg", title: "Jewelry Design" },
      { mediaType: "image", src: "/images/newskillcryptomining.jpg", title: "Crypto Mining" },
    ],
  },
];

export default function About() {
  // Base settings for React-Slick sliders with autoplay enabled.
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    adaptiveHeight: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <>
      {/* Passions Section */}
      <section className="passions-section">
        <div className="glassmorphic-wrapper">
          <h2>Passions</h2>
          <p className="passions-intro">
            When I&apos;m not wrapped up in work, you&apos;ll find me out there chasing after life&apos;s cool moments. I&apos;m a firm believer that we&apos;re really just a collection of our experiences, so I&apos;m always up for something new. Each new adventure sparks my creativity and weaves another unique thread into my journey, always pushing me to grow and evolve.
          </p>
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
                {/* Subsection Title as H3, centered */}
                <h3 className="passion-title">{passion.title}</h3>
                <Slider 
                  {...{
                    ...sliderSettings,
                    autoplaySpeed: 5000 + index * 500, // Different speed offset for each carousel
                  }}
                >
                  {passion.items.map((item, i) => (
                    <div key={i} className="slider-item">
                      <div className="slider-card">
                        {item.mediaType === "image" && (
                          <>
                            <img
                              src={item.src}
                              alt={item.title || passion.title}
                            />
                            {item.title && (
                              <p className="media-title">{item.title}</p>
                            )}
                          </>
                        )}
                        {item.mediaType === "video" && (
                          <LazyVideo
                            src={item.src}
                            poster={item.poster}
                            title={item.title}
                          />
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
        </div>

        <style jsx>{`
          .passions-section {
            padding: 1.875rem 1.25rem; // Reduced from 3.75rem to 1.875rem (60px to 30px)
            background-color: transparent;
            color: #fff;
            max-width: 75rem; // 1200px
            margin: 0 auto;
            position: relative;
            width: 100%;
          }
          
          .glassmorphic-wrapper {
            position: relative;
            z-index: 20;
            width: 100%;
            background: rgba(20, 20, 20, 0.65);
            border-radius: 1.25rem; // 20px
            overflow: hidden;
            padding: 1.75rem; // 20px
            
            /* Enhanced glassmorphism effect with stronger shadow */
            backdrop-filter: blur(0.75rem); // 12px
            -webkit-backdrop-filter: blur(0.75rem); // 12px
            box-shadow: 0 0.75rem 3rem rgba(0, 0, 0, 0.7),
                        0 0.25rem 1rem rgba(124, 58, 237, 0.15),
                        0 -0.25rem 1rem rgba(16, 185, 129, 0.1); // Multi-layered shadow with subtle color
            border: 1px solid rgba(255, 255, 255, 0.15);
            
            /* Metallic highlight at top */
            background-image: linear-gradient(
              180deg, 
              rgba(255, 255, 255, 0.12) 0%, 
              rgba(255, 255, 255, 0.03) 5%,
              rgba(255, 255, 255, 0) 20%
            );
            
            /* Add subtle shadow glow on hover */
            transition: all 0.3s ease-out;
          }
          
          /* Optional subtle hover effect */
          .glassmorphic-wrapper:hover {
            box-shadow: 0 0.85rem 3.5rem rgba(0, 0, 0, 0.7),
                        0 0.35rem 1.25rem rgba(124, 58, 237, 0.2),
                        0 -0.35rem 1.25rem rgba(16, 185, 129, 0.15);
            transform: translateY(-3px);
          }
          h2 {
            font-family: 'BankGothic Md BT', sans-serif;
            font-size: 2rem;
            margin-top: 0;
            margin-bottom: 2rem;
            text-align: left;
          }
          
          h3 {
            font-family: 'BankGothic Md BT', sans-serif;
            font-size: 1.75rem;
            margin-top: 0; /* Reset top margin */
            margin-bottom: 2rem; // 32px
            text-align: left;
          }
          .passions-intro {
            font-family: 'Nexa Bold', sans-serif;
            font-size: 1.25rem; /* Updated from 1rem to match global minimum */
            line-height: 1.6;
            margin-bottom: 2.5rem; // 40px
            text-align: left;
          }
          .passions-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(15.625rem, 1fr)); // 250px
            gap: 2rem; // Reduced from 3.75rem (60px) to 2rem (32px)
            max-width: 100%;
          }
          
          .passion-slider {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 1.25rem; // 20px
            padding: 1.25rem; // 20px
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.3); // 4px 16px
            max-width: 100%;
            overflow: hidden; // Prevent content from overflowing
          }
          
          .slider-item {
            padding: 0.625rem; // 10px
            max-width: 100%;
          }
          
          .media-title {
            margin: 0;
            font-family: 'Nexa Bold', sans-serif;
            font-size: 1rem; /* Updated to use minimum 1rem for carousel cards */
          }
          
          .quote {
            font-family: 'Nexa Bold', sans-serif;
            font-size: 1rem; /* Updated to use minimum 1rem for carousel cards */
            text-align: center;
            padding: 0.625rem 1.25rem; /* Reduced vertical padding from 1.25rem to 0.625rem */
          }
          
          .slider-card {
            background: rgba(30, 30, 30, 0.4);
            backdrop-filter: blur(0.3125rem); // 5px
            -webkit-backdrop-filter: blur(0.3125rem); // 5px
            border-radius: 0.9375rem; // 15px
            margin: auto;
            width: 100%;
            max-width: 25rem; // Reduced from 31.25rem (500px) to 25rem (400px)
            text-align: center;
            padding: 0.75rem 1.25rem; /* Reduced vertical padding from 1.25rem to 0.75rem */
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          .slider-card img,
          .slider-card video {
            width: 100%;
            height: 18.75rem; // Increased from 12.5rem (200px) to 18.75rem (300px)
            object-fit: cover;
            display: block;
            border-radius: 0.9375rem; // 15px
            margin-bottom: 0.625rem; // 10px
          }
          .passion-title {
            text-align: center;
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
            color: #f0f0f0;
          }
        `}</style>
      </section>
    </>
  );
}