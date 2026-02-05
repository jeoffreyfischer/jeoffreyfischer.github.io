import { useState } from 'react';
import './App.css';

const SECTIONS = [
  { id: 'work', label: 'Career', iconClass: 'fa-solid fa-briefcase', quarterClass: 'cv-quarter-tl', cornerClass: 'cv-corner-tl', color: '#f59e0b', colorFade: '#fef3c7', colorHover: '#d97706', textColor: '#1e3a8a' },
  { id: 'education', label: 'Education', iconClass: 'fa-solid fa-book', quarterClass: 'cv-quarter-tr', cornerClass: 'cv-corner-tr', color: '#10b981', colorFade: '#d1fae5', colorHover: '#059669', textColor: '#450a0a' },
  { id: 'public', label: 'Media', iconClass: 'fa-brands fa-youtube', quarterClass: 'cv-quarter-br', cornerClass: 'cv-corner-br', color: '#8b5cf6', colorFade: '#ede9fe', colorHover: '#7c3aed', textColor: '#422006' },
  { id: 'interests', label: 'Hobbies', iconClass: 'fa-solid fa-guitar', quarterClass: 'cv-quarter-bl', cornerClass: 'cv-corner-bl', color: '#f43f5e', colorFade: '#ffe4e6', colorHover: '#e11d48', textColor: '#052e16' },
];

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="cv-page bg-slate-900">
      {/* SVG clipPaths for corner gap shapes (objectBoundingBox = 0–1 coords) */}
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="corner-tl" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 L 1 0 A 0.5 0.5 0 0 1 0 1 Z" />
          </clipPath>
          <clipPath id="corner-tr" clipPathUnits="objectBoundingBox">
            <path d="M 1 0 L 1 1 A 0.5 0.5 0 0 1 0 0 Z" />
          </clipPath>
          <clipPath id="corner-br" clipPathUnits="objectBoundingBox">
            {/* Same path as corner-tl; BR element is rotated 180deg so (0,0) is the corner */}
            <path d="M 0 0 L 1 0 A 0.5 0.5 0 0 1 0 1 Z" />
          </clipPath>
          <clipPath id="corner-bl" clipPathUnits="objectBoundingBox">
            <path d="M 0 1 L 0 0 A 0.5 0.5 0 0 1 1 1 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="cv-square">
        {/* Expanded quarter when a section is active – grows from clicked corner */}
        {activeSection && (
          <div
            className={`cv-expanded-quarter cv-expanded-${activeSection.quarterClass}`}
            style={{
              '--expanded-color': activeSection.color,
              '--expanded-fade': activeSection.colorFade,
            }}
            aria-hidden="true"
          />
        )}

        {/* Corner gaps – content moves here when section is active */}
        {SECTIONS.map((section) => (
          <div
            key={section.id}
            className={`cv-corner ${section.cornerClass} ${activeSection?.id === section.id ? 'cv-corner-active' : ''}`}
          >
            <div
              className="cv-corner-content"
              style={{
                '--corner-bg': section.color,
                '--corner-text': section.textColor,
              }}
            >
              <span className="cv-corner-label">{section.label}</span>
            </div>
          </div>
        ))}

        <div
          className={`cv-circle ${activeSection ? `cv-circle-active cv-circle-active-${activeSection.quarterClass}` : ''}`}
        >
        {/* Four quarter-circle buttons forming the outer circle */}
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`cv-quarter ${section.quarterClass} ${activeSection?.id === section.id ? 'cv-quarter-active' : ''}`}
            onClick={() => setActiveSection(section)}
            aria-label={section.label}
          >
            <span
              className={`cv-quarter-icon ${activeSection?.id === section.id ? 'cv-quarter-icon-hidden' : ''}`}
              aria-hidden="true"
            >
              <i className={section.iconClass} />
            </span>
          </button>
        ))}

        {/* Ring: page-colored donut so gap between small center and quarter buttons matches page background */}
        <div className="cv-center-ring" aria-hidden="true" />

        {/* Center circle: "Home" button when a section is active, else placeholder text */}
        <div className="cv-center">
          {activeSection ? (
            <button
              type="button"
              className="cv-center-inner cv-center-home-btn"
              onClick={(e) => { e.stopPropagation(); setActiveSection(null); }}
              aria-label="Back to home"
            >
              <span className="cv-center-icon" aria-hidden="true">
                <i className="fa-solid fa-house" />
              </span>
            </button>
          ) : (
            <div className="cv-center-inner">
              <p className="cv-center-text">Click a section</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
