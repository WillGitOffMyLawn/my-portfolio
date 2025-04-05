// filepath: c:\Users\willi\my-portfolio\src\components\AnimatedCounter.js
import React from 'react';
import CountUp from 'react-countup';
import { FaChartLine } from 'react-icons/fa';

export default function AnimatedCounterComponent() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0px',
        padding: '10px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
      }}
    >
      <span style={{
        color: '#7c3aed',
        display: 'flex',
        alignItems: 'center',
        marginRight: '12px',
        flexShrink: 0
      }}>
        <FaChartLine size={24} />
      </span>
      <div className="counter-text-container" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        width: '100%' 
      }}>
        <div
          style={{
            fontFamily: "'Nexa Bold', sans-serif",
            fontSize: '1.5rem',
            color: '#fff',
            display: 'inline-block',
            textAlign: 'right',
            flexShrink: 0,
            width: 'clamp(90px, 8vw, 120px)', // Fixed width container that's responsive
            marginRight: 'clamp(0.75rem, 4vw, 1.5rem)' // Increased minimum, slope, and maximum values
          }}
        >
          <CountUp
            start={0}
            end={125000}
            duration={10}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
        </div>
        <span
          style={{
            fontFamily: "'Nexa Bold', sans-serif",
            fontSize: '1.25rem',
            color: '#fff'
          }}
        >
          Monthly users on sites I built and manage
        </span>
      </div>
    </div>
  );
}