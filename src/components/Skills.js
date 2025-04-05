// src/components/SkillsWithFlexBadges.js
import { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Badge } from '@/components/ui/badge';

const skillsData = {
  Technical: {
    Software: [
      { name: 'Jira', level: 3 },
      { name: 'Asana', level: 3 },
      { name: 'Trello', level: 3 },
      { name: 'Hubspot', level: 3 },
      { name: 'Figma', level: 3 },
      { name: 'Excel', level: 4 },
      { name: 'PowerPoint', level: 4 },
      { name: 'AWS', level: 2 },
      { name: 'Zapier', level: 2 },
      { name: 'Word', level: 4 },
    ],
    Coding: [
      { name: 'HTML', level: 2 },
      { name: 'CSS', level: 2 },
      { name: 'JavaScript', level: 2 },
      { name: 'React', level: 2 },
      { name: 'Python', level: 3 },
      { name: 'Nextjs', level: 2 },
      { name: 'PHP', level: 2 },
      { name: 'Git', level: 2 },
      { name: 'Terraform', level: 1 },
    ],
  },
  'Cross-Functional': {
    Leadership: [
      { name: 'Team Management', level: 3 },
      { name: 'Strategic Planning', level: 2 },
      { name: 'Communication', level: 4 },
      { name: 'Agile', level: 3 },
      { name: 'Waterfall', level: 3 },
    ],
    Product: [
      { name: 'SEO', level: 3 },
      { name: 'Google Analytics', level: 3 },
      { name: 'Wireframing', level: 2 },
      { name: 'UX/UI', level: 3 },
      { name: 'Market Analysis', level: 3 },
    ],
  },
};

const proficiencyLevels = [
  { level: 1, label: 'Novice',       color: '#2ecc71' }, 
  { level: 2, label: 'Competent', color: '#3498db' }, 
  { level: 3, label: 'Advanced',     color: '#9b59b6' }, 
  { level: 4, label: 'Expert',       color: '#e74c3c' }, 
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
    <section className="skills-badges">
      <div className="glassmorphic-wrapper">
        {/* Title and inline proficiency key */}
        <div className="skills-header">
          <h2>Skills</h2>
          <div className="proficiency-key">
            {proficiencyLevels.map((p) => (
              <Badge 
                key={p.level}
                style={{ 
                  "--badge-bg-color": p.color,
                  "--badge-text-color": "#1a1a1a",
                  backgroundColor: p.color,
                  color: "#1a1a1a",
                  fontWeight: 'bold'
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
                          style={{ 
                            "--badge-bg-color": getBadgeColor(skill.level),
                            "--badge-text-color": "#1a1a1a",
                            backgroundColor: getBadgeColor(skill.level),
                            color: "#1a1a1a",
                            fontWeight: 'bold'
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

      <style jsx>{`
        .skills-badges {
          padding: 1.875rem 1.25rem; // 30px 20px
          background-color: transparent;
          color: #fff;
          font-family: 'Nexa Bold', sans-serif;
          position: relative;
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
          margin-top: 0; /* Remove top margin */
          margin-bottom: 1.25rem; // 20px
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
          backdrop-filter: blur(0.5rem); // 8px
          -webkit-backdrop-filter: blur(0.5rem); // 8px
          border-radius: 1.25rem; // 20px
          padding: 1.25rem; // 20px
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2); // 4px 16px
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
          animation: expandSection 0.8s ease-out;
          transform-origin: top;
        }

        @keyframes expandSection {
          from {
            opacity: 0;
            transform: scaleY(0);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: scaleY(1);
            max-height: 31.25rem; // 500px
          }
        }
      `}</style>
    </section>
  );
}
