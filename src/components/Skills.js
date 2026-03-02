// src/components/SkillsWithFlexBadges.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';

const skillsData = {
  Product: {
    'Strategy': [
      { name: 'Customer Discovery', level: 3 },
      { name: 'Roadmapping', level: 3 },
      { name: 'Stakeholder Management', level: 3 },
      { name: 'Agile / Scrum', level: 3 },
      { name: 'Technical Writing', level: 3 },
    ],
    'Tools': [
      { name: 'Jira', level: 3 },
      { name: 'Figma', level: 3 },
      { name: 'HubSpot', level: 3 },
      { name: 'GitHub', level: 3 },
      { name: 'Google Analytics', level: 3 },
      { name: 'Zapier', level: 2 },
    ],
  },
  Technical: {
    'Software': [
      { name: 'Python', level: 3 },
      { name: 'React / Next.js', level: 2 },
      { name: 'REST APIs', level: 3 },
      { name: 'Docker', level: 2 },
      { name: 'Data Architecture', level: 2 },
      { name: 'AI / LLMs', level: 3 },
    ],
    'Hardware': [
      { name: 'CAD', level: 2 },
      { name: '3D Printing', level: 3 },
      { name: 'Embedded Electronics', level: 2 },
      { name: 'Sensors & Actuators', level: 2 },
      { name: 'BOM / DFM', level: 2 },
      { name: 'Prototyping', level: 3 },
    ],
  },
};

const proficiencyLevels = [
  { level: 1, label: 'Novice',       color: '#10b981' }, 
  { level: 2, label: 'Competent', color: '#6366f1' }, 
  { level: 3, label: 'Advanced',     color: '#7c3aed' }, 
  { level: 4, label: 'Expert',       color: '#ef4444' },
];

// Helper to get color for a given level
function getBadgeColor(level) {
  const found = proficiencyLevels.find((p) => p.level === level);
  return found ? found.color : '#aaa'; // fallback color
}

export default function SkillsWithFlexBadges() {
  const [expanded, setExpanded] = useState({});

  const toggleSubcategory = (mainCategory, subCategory) => {
    setExpanded((prev) => ({
      ...prev,
      [mainCategory]: {
        ...prev[mainCategory],
        [subCategory]: !prev[mainCategory]?.[subCategory],
      },
    }));
  };

  // Set up Intersection Observer to expand sections when in view
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: '-30% 0px -30% 0px', // triggers when element is in middle 40% of screen
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find which subcategory this is
          const [mainCat, subCat] = entry.target.dataset.category.split('|');
          
          // Auto-expand when scrolled into view
          setExpanded((prev) => ({
            ...prev,
            [mainCat]: {
              ...prev[mainCat],
              [subCat]: true
            }
          }));
        }
      });
    }, options);

    // Get all elements with data-category attribute
    const elements = document.querySelectorAll('[data-category]');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      // Clean up
      observer.disconnect();
    };
  }, []);

  return (
    <motion.section
      id="skills"
      className="skills-badges"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glassmorphic-wrapper">
        {/* Title and inline proficiency key */}
        <div className="skills-header">
          <h2>Skills</h2>
          <div className="proficiency-key">
            {proficiencyLevels.map((p) => (
              <Badge 
                key={p.level}
                variant="outline"
                style={{ 
                  backgroundColor: p.color,
                  color: "#1a1a1a",
                  fontWeight: 'bold',
                  borderColor: 'transparent'
                }}
              >
                {p.label}
              </Badge>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([mainCat, subcategories]) => (
            <div key={mainCat} className="skill-category">
              <h3>{mainCat}</h3>
              {Object.entries(subcategories).map(([subCat, skills]) => (
                <div key={subCat} className="skill-subcategory">
                  <div
                    className="subcategory-header"
                    onClick={() => toggleSubcategory(mainCat, subCat)}
                    data-category={`${mainCat}|${subCat}`}
                  >
                    <span>{subCat}</span>
                    <span className="arrow">
                      {expanded[mainCat]?.[subCat] ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </div>
                  {expanded[mainCat]?.[subCat] && (
                    <div className="badge-flex">
                      {skills.map((skill) => (
                        <Badge 
                          key={skill.name}
                          variant="outline"
                          style={{ 
                            backgroundColor: getBadgeColor(skill.level),
                            color: "#1a1a1a",
                            fontWeight: 'bold',
                            borderColor: 'transparent'
                          }}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .skills-badges {
          padding: 0;
          background-color: transparent;
          color: #fff;
          font-family: 'Nexa Bold', sans-serif;
          position: relative;
        }
        
        .skills-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem; // 20px
        }

        .skills-header h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin-top: 0;
          margin-bottom: 1.25rem;
          text-shadow: 0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.15);
        }

        /* Proficiency key as badge-style items */
        .proficiency-key {
          display: flex;
          gap: 0.625rem; // 10px
          flex-wrap: wrap;
        }

        /* Two main categories fill width, but expand independently */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); // 320px
          gap: 1.25rem; // 20px
          align-items: start;
          width: 100%;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 1.25rem;
          padding: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.3);
        }
        
        .skill-category h3 {
          font-size: 1.4rem;
          margin-top: 0;
          margin-bottom: 0.9375rem; // 15px
        }

        .skill-subcategory {
          margin-bottom: 1.25rem; // 20px
        }

        .subcategory-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          margin-bottom: 0.3125rem; // 5px
        }

        .arrow {
          display: flex;
          align-items: center;
        }

        /* 
          Flex wrapping for skill badges so each has its own width.
          No forced columns; badges wrap to the next line if needed.
        */
        .badge-flex {
          display: flex;
          flex-wrap: wrap;
          gap: 0.625rem; // 10px
          animation: expandSection 0.3s ease-out;
        }

        @keyframes expandSection {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </motion.section>
  );
}
