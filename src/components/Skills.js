// src/components/SkillsWithFlexBadges.js
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

/*
  Example data structure with a 'level' property (1–5).
  Adjust the levels or add more details as needed.
*/
const skillsData = {
  Technical: {
    Software: [
      { name: 'Jira', level: 3 },
      { name: 'Asana', level: 4 },
      { name: 'Trello', level: 2 },
    ],
    Coding: [
      { name: 'HTML', level: 5 },
      { name: 'CSS', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'React', level: 4 },
      { name: 'Python', level: 3 },
      { name: 'Java', level: 2 },
    ],
  },
  'Cross-Functional': {
    Leadership: [
      { name: 'Team Management', level: 4 },
      { name: 'Strategic Planning', level: 3 },
      { name: 'Communication', level: 5 },
    ],
    Marketing: [
      { name: 'SEO', level: 2 },
      { name: 'Content Strategy', level: 3 },
      { name: 'Branding', level: 4 },
    ],
  },
};

/*
  Define five proficiency levels, each with a label and a color.
  Adjust these colors to match your design preferences.
*/
const proficiencyLevels = [
  { level: 1, label: 'Novice',       color: '#D9534F' }, // red
  { level: 2, label: 'Beginner',     color: '#F0AD4E' }, // orange
  { level: 3, label: 'Intermediate', color: '#FFD700' }, // gold
  { level: 4, label: 'Advanced',     color: '#5BC0DE' }, // cyan
  { level: 5, label: 'Expert',       color: '#5CB85C' }, // green
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

  return (
    <section className="skills-badges">
      {/* Title and inline proficiency key */}
      <div className="skills-header">
        <h2>Skills</h2>
        <div className="proficiency-key">
          {proficiencyLevels.map((p) => (
            <div
              key={p.level}
              className="key-badge"
              style={{ backgroundColor: p.color }}
            >
              {p.label}
            </div>
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
                      <div
                        key={skill.name}
                        className="skill-badge"
                        style={{ backgroundColor: getBadgeColor(skill.level) }}
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .skills-badges {
          padding: 60px 20px;
          background-color: #1A1A1A;
          color: #fff;
          font-family: 'Nexa Bold', sans-serif;
        }

        .skills-header {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .skills-header h2 {
          font-family: 'BankGothic Md BT', sans-serif;
          font-size: 2rem;
          margin: 0;
        }

        /* Proficiency key as badge-style items */
        .proficiency-key {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .key-badge {
          padding: 5px 10px;
          border-radius: 5px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: bold;
        }

        /* Two main categories fill width, but expand independently */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 20px;
          align-items: start;
	  width: 100%;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 20px;
        }
        .skill-category h3 {
          font-size: 1.4rem;
          margin-top: 0;
          margin-bottom: 15px;
        }

        .skill-subcategory {
          margin-bottom: 20px;
        }

        .subcategory-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          margin-bottom: 5px;
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
          gap: 10px;
        }

        .skill-badge {
          color: #fff;
          padding: 5px 8px;
          border-radius: 5px;
          text-align: center;
          font-size: 0.9rem;
          font-weight: bold;
          white-space: nowrap; /* ensures longer text doesn't wrap inside the badge */
        }
      `}</style>
    </section>
  );
}
