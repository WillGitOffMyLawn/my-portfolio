import React from 'react';

// Custom arrow components for all carousels
export const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`custom-arrow custom-prev-arrow ${className || ''}`}
      style={{ 
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '15px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '44px',
        height: '44px',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        padding: 0,
        fontSize: 0
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)';
        e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
      }}
      type="button"
      aria-label="Previous slide"
    >
      <div 
        style={{
          width: '20px',
          height: '20px',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 18l-6-6 6-6'/%3E%3C/svg%3E")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      />
    </button>
  );
};

export const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`custom-arrow custom-next-arrow ${className || ''}`}
      style={{ 
        ...style,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        right: '15px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: '44px',
        height: '44px',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        borderRadius: '50%',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        padding: 0,
        fontSize: 0
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.75)';
        e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.6)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
      }}
      type="button"
      aria-label="Next slide"
    >
      <div 
        style={{
          width: '20px',
          height: '20px',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E")`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      />
    </button>
  );
};

// Global styles for carousel arrows (exported for use in _app.js)
export const carouselArrowStyles = `
  /* Reset any existing slick arrow styles */
  .slick-prev,
  .slick-next {
    font-size: 0 !important;
    line-height: 0 !important;
    position: absolute !important;
    top: 50% !important;
    display: block !important;
    width: 44px !important;
    height: 44px !important;
    padding: 0 !important;
    transform: translate(0, -50%) !important;
    cursor: pointer !important;
    color: transparent !important;
    border: none !important;
    outline: none !important;
    background: transparent !important;
    z-index: 9 !important;
  }

  /* Hide default slick arrow content */
  .slick-prev:before,
  .slick-next:before {
    display: none !important;
    content: '' !important;
  }

  /* Custom arrow styling */
  .custom-arrow {
    position: absolute !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 999 !important;
    width: 44px !important;
    height: 44px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: rgba(0, 0, 0, 0.6) !important;
    backdrop-filter: blur(5px) !important;
    -webkit-backdrop-filter: blur(5px) !important;
    border-radius: 50% !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    color: transparent !important;
    cursor: pointer !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
    padding: 0 !important;
    font-size: 0 !important;
  }

  .custom-arrow:hover {
    background: rgba(0, 0, 0, 0.75) !important;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4) !important;
  }

  .custom-prev-arrow {
    left: 15px !important;
  }

  .custom-next-arrow {
    right: 15px !important;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .custom-arrow {
      width: 36px !important;
      height: 36px !important;
    }

    .custom-prev-arrow {
      left: 10px !important;
    }

    .custom-next-arrow {
      right: 10px !important;
    }
  }
  
  /* Make sure arrows are visible on top of slides */
  .slick-slider {
    position: relative !important;
  }

  /* Hide any font awesome icons */
  .slick-prev i,
  .slick-next i {
    display: none !important;
  }
`;