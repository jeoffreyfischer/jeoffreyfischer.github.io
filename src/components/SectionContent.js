import { CAREER_CONTENT, EDUCATION_CONTENT, boldTerms } from '../data/sectionContent';

function TextWithBold({ text }) {
  const segments = boldTerms(text);
  const result = [];
  let inBold = false;
  segments.forEach((seg, i) => {
    if (seg === '{{B}}') inBold = true;
    else if (seg === '{{/B}}') inBold = false;
    else result.push(inBold ? <strong key={i}>{seg}</strong> : <span key={i}>{seg}</span>);
  });
  return <>{result}</>;
}

function CareerContent() {
  return (
    <div className="cv-section-content cv-career">
      <h2 className="cv-career-section-title">Career</h2>
      {CAREER_CONTENT.items.map((job, i) => (
        <article key={i} className="cv-job">
          <div className="cv-job-role">{job.role}</div>
          <div className="cv-job-company">{job.company}</div>
          <div className="cv-job-period">{job.period}</div>
          <ul className="cv-job-highlights">
            {job.highlights.map((h, j) => (
              <li key={j}><TextWithBold text={h} /></li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function EducationContent() {
  return (
    <div className="cv-section-content cv-education">
      <h2 className="cv-edu-section-title">Education</h2>
      {EDUCATION_CONTENT.items.map((edu, i) => (
        <article key={i} className="cv-edu-item">
          <div className="cv-edu-degree">{edu.degree}</div>
          <div className="cv-edu-institution">{edu.institution}</div>
          <div className="cv-edu-location">{edu.location}</div>
          <div className="cv-edu-period">{edu.period}</div>
        </article>
      ))}
      <div className="cv-certifications">
        <h3 className="cv-cert-title">Certifications</h3>
        <ul>
          {EDUCATION_CONTENT.certifications.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SectionContent({ sectionId }) {
  if (sectionId === 'work') return <CareerContent />;
  if (sectionId === 'education') return <EducationContent />;
  return null;
}

export default SectionContent;
