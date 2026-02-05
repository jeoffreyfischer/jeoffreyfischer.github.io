import { useState } from 'react';
import './App.css';

const SECTIONS = [
  { id: 'work', label: 'Career', quarterClass: 'cv-quarter-tl', cornerClass: 'cv-corner-tl', color: '#f59e0b', colorFade: '#fef3c7', colorHover: '#d97706', textColor: '#1e3a8a' },
  { id: 'education', label: 'Education', quarterClass: 'cv-quarter-tr', cornerClass: 'cv-corner-tr', color: '#10b981', colorFade: '#d1fae5', colorHover: '#059669', textColor: '#450a0a' },
  { id: 'public', label: 'Media', quarterClass: 'cv-quarter-br', cornerClass: 'cv-corner-br', color: '#8b5cf6', colorFade: '#ede9fe', colorHover: '#7c3aed', textColor: '#422006' },
  { id: 'interests', label: 'Hobbies', quarterClass: 'cv-quarter-bl', cornerClass: 'cv-corner-bl', color: '#f43f5e', colorFade: '#ffe4e6', colorHover: '#e11d48', textColor: '#052e16' },
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
        <button
          type="button"
          className={`cv-quarter ${SECTIONS[0].quarterClass} ${activeSection?.id === SECTIONS[0].id ? 'cv-quarter-active' : ''}`}
          onClick={() => setActiveSection(SECTIONS[0])}
          aria-label={SECTIONS[0].label}
        >
          <svg className={`cv-quarter-arc-svg ${activeSection?.id === SECTIONS[0].id ? 'cv-quarter-arc-svg-hidden' : ''}`} viewBox="0 0 50 50" aria-hidden="true">
            <defs>
              <path id="arc-tl" d="M 11.25 50 A 38.75 38.75 0 0 1 50 11.25" />
            </defs>
            <text className="cv-quarter-arc-text cv-quarter-arc-text-tl" dominantBaseline="middle">
              <textPath href="#arc-tl" startOffset="50%" textAnchor="middle">{SECTIONS[0].label}</textPath>
            </text>
          </svg>
        </button>
        <button
          type="button"
          className={`cv-quarter ${SECTIONS[1].quarterClass} ${activeSection?.id === SECTIONS[1].id ? 'cv-quarter-active' : ''}`}
          onClick={() => setActiveSection(SECTIONS[1])}
          aria-label={SECTIONS[1].label}
        >
          <svg className={`cv-quarter-arc-svg ${activeSection?.id === SECTIONS[1].id ? 'cv-quarter-arc-svg-hidden' : ''}`} viewBox="0 0 50 50" aria-hidden="true">
            <defs>
              <path id="arc-tr" d="M 0 11.25 A 38.75 38.75 0 0 1 38.75 50" />
            </defs>
            <text className="cv-quarter-arc-text cv-quarter-arc-text-tr" dominantBaseline="middle">
              <textPath href="#arc-tr" startOffset="50%" textAnchor="middle">{SECTIONS[1].label}</textPath>
            </text>
          </svg>
        </button>
        <button
          type="button"
          className={`cv-quarter ${SECTIONS[2].quarterClass} ${activeSection?.id === SECTIONS[2].id ? 'cv-quarter-active' : ''}`}
          onClick={() => setActiveSection(SECTIONS[2])}
          aria-label={SECTIONS[2].label}
        >
          <svg className={`cv-quarter-arc-svg ${activeSection?.id === SECTIONS[2].id ? 'cv-quarter-arc-svg-hidden' : ''}`} viewBox="0 0 50 50" aria-hidden="true">
            <defs>
              <path id="arc-br" d="M 38.75 0 A 38.75 38.75 0 0 1 0 38.75" />
            </defs>
            <text className="cv-quarter-arc-text cv-quarter-arc-text-br" dominantBaseline="middle">
              <textPath href="#arc-br" startOffset="50%" textAnchor="middle">{SECTIONS[2].label}</textPath>
            </text>
          </svg>
        </button>
        <button
          type="button"
          className={`cv-quarter ${SECTIONS[3].quarterClass} ${activeSection?.id === SECTIONS[3].id ? 'cv-quarter-active' : ''}`}
          onClick={() => setActiveSection(SECTIONS[3])}
          aria-label={SECTIONS[3].label}
        >
          <svg className={`cv-quarter-arc-svg ${activeSection?.id === SECTIONS[3].id ? 'cv-quarter-arc-svg-hidden' : ''}`} viewBox="0 0 50 50" aria-hidden="true">
            <defs>
              <path id="arc-bl" d="M 50 38.75 A 38.75 38.75 0 0 1 11.25 0" />
            </defs>
            <text className="cv-quarter-arc-text cv-quarter-arc-text-bl" dominantBaseline="middle">
              <textPath href="#arc-bl" startOffset="50%" textAnchor="middle">{SECTIONS[3].label}</textPath>
            </text>
          </svg>
        </button>

        {/* Center circle: "Home" button when a section is active, else placeholder text */}
        <div className="cv-center">
          {activeSection ? (
            <button
              type="button"
              className="cv-center-inner cv-center-home-btn"
              onClick={(e) => { e.stopPropagation(); setActiveSection(null); }}
              aria-label="Back to home"
            >
              <span className="cv-center-text">Home</span>
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
