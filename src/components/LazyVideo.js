// src/components/LazyVideo.js
import { useRef, useState, useEffect } from 'react';

export default function LazyVideo({ src, poster, ...props }) {
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
    <div
      ref={videoRef}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
        background: poster ? `url(${poster}) center/cover` : '#333',
      }}
    >
      {inView && (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          {...props}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      )}
    </div>
  );
}
