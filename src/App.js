import { useState } from 'react';
import './App.css';

const SECTIONS = [
  { id: 'work', label: 'Work experience', quarterClass: 'cv-quarter-tl' },
  { id: 'education', label: 'Education', quarterClass: 'cv-quarter-tr' },
  { id: 'public', label: 'Public presence', quarterClass: 'cv-quarter-br' },
  { id: 'interests', label: 'Interests', quarterClass: 'cv-quarter-bl' },
];

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="cv-page bg-slate-900">
      <div className="cv-circle">
        {/* Four quarter-circle buttons forming the outer circle */}
        <button
          type="button"
          className={`cv-quarter ${SECTIONS[0].quarterClass}`}
          onClick={() => setActiveSection(SECTIONS[0])}
          aria-label={SECTIONS[0].label}
        >
          <span className="cv-quarter-label cv-quarter-label-tl">{SECTIONS[0].label}</span>
        </button>
        <button
          type="button"
          className={`cv-quarter ${SECTIONS[1].quarterClass}`}
          onClick={() => setActiveSection(SECTIONS[1])}
          aria-label={SECTIONS[1].label}
        >
          <span className="cv-quarter-label cv-quarter-label-tr">{SECTIONS[1].label}</span>
        </button>
        <button
          type="button"
          className={`cv-quarter ${SECTIONS[2].quarterClass}`}
          onClick={() => setActiveSection(SECTIONS[2])}
          aria-label={SECTIONS[2].label}
        >
          <span className="cv-quarter-label cv-quarter-label-br">{SECTIONS[2].label}</span>
        </button>
        <button
          type="button"
          className={`cv-quarter ${SECTIONS[3].quarterClass}`}
          onClick={() => setActiveSection(SECTIONS[3])}
          aria-label={SECTIONS[3].label}
        >
          <span className="cv-quarter-label cv-quarter-label-bl">{SECTIONS[3].label}</span>
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
