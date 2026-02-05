import { useRef, useState } from 'react';
import './App.css';

const SECTIONS = [
  { id: 'work', label: 'Career', quarterClass: 'cv-quarter-tl' },
  { id: 'education', label: 'Education', quarterClass: 'cv-quarter-tr' },
  { id: 'public', label: 'Media', quarterClass: 'cv-quarter-br' },
  { id: 'interests', label: 'Hobbies', quarterClass: 'cv-quarter-bl' },
];

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const circleRef = useRef(null);

  const handlePageClick = (e) => {
    if (circleRef.current && !circleRef.current.contains(e.target)) {
      setActiveSection(null);
    }
  };

  return (
    <div className="cv-page bg-slate-900" onClick={handlePageClick}>
      <div className="cv-circle" ref={circleRef}>
        {/* Four quarter-circle buttons forming the outer circle */}
        <button
          type="button"
          className={`cv-quarter ${SECTIONS[0].quarterClass}`}
          onClick={() => setActiveSection(SECTIONS[0])}
          aria-label={SECTIONS[0].label}
        >
          <svg className="cv-quarter-arc-svg" viewBox="0 0 50 50" aria-hidden="true">
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
          className={`cv-quarter ${SECTIONS[1].quarterClass}`}
          onClick={() => setActiveSection(SECTIONS[1])}
          aria-label={SECTIONS[1].label}
        >
          <svg className="cv-quarter-arc-svg" viewBox="0 0 50 50" aria-hidden="true">
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
          className={`cv-quarter ${SECTIONS[2].quarterClass}`}
          onClick={() => setActiveSection(SECTIONS[2])}
          aria-label={SECTIONS[2].label}
        >
          <svg className="cv-quarter-arc-svg" viewBox="0 0 50 50" aria-hidden="true">
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
          className={`cv-quarter ${SECTIONS[3].quarterClass}`}
          onClick={() => setActiveSection(SECTIONS[3])}
          aria-label={SECTIONS[3].label}
        >
          <svg className="cv-quarter-arc-svg" viewBox="0 0 50 50" aria-hidden="true">
            <defs>
              <path id="arc-bl" d="M 50 38.75 A 38.75 38.75 0 0 1 11.25 0" />
            </defs>
            <text className="cv-quarter-arc-text cv-quarter-arc-text-bl" dominantBaseline="middle">
              <textPath href="#arc-bl" startOffset="50%" textAnchor="middle">{SECTIONS[3].label}</textPath>
            </text>
          </svg>
        </button>

        {/* Center circle with content */}
        <div className="cv-center">
          <div className="cv-center-inner">
            <p className="cv-center-text">
              {activeSection
                ? `${activeSection.label} coming soon...`
                : 'Click a section'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
