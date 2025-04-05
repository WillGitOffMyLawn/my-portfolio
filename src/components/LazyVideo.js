// src/components/LazyVideo.js
import { useRef, useState, useEffect } from 'react';

export default function LazyVideo({ src, poster, title, ...props }) {
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      { rootMargin: '100px', threshold: 0.1 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <div
        className="video-container"
        style={{
          position: 'relative',
          width: '100%',
          height: '18.75rem', // Match the height of image cards
          borderRadius: '0.9375rem',
          overflow: 'hidden',
          background: poster ? `url(${poster}) center/cover` : '#333',
          marginBottom: '0.625rem', // Added to match the margin-bottom of images in About.js
        }}
      >
        <div
          ref={videoRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '0.9375rem',
          }}
        >
          {inView && (
            <video
              autoPlay
              loop
              muted
              playsInline
              poster={poster}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              {...props}
            >
              <source src={src} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}
        </div>
      </div>
      {title && (
        <p className="media-title" style={{
          margin: '0 0 0.625rem 0', // Added bottom margin to match image cards
          fontFamily: "'Nexa Bold', sans-serif",
          fontSize: "1rem"
        }}>{title}</p>
      )}
    </>
  );
}
