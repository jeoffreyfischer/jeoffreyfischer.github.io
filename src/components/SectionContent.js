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

const YOUTUBE_PLAYLIST_ID = 'PLpiOR7CBNvlqbUE95zfRuNDodbZI3aEJW';
const YOUTUBE_EMBED_URL = `https://www.youtube.com/embed/videoseries?list=${YOUTUBE_PLAYLIST_ID}&index=3&autoplay=1`;

const MEDIA_LINKS = [
  { label: 'GitHub', href: 'https://github.com/jeoffreyfischer', icon: 'fa-brands fa-github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/jeoffrey-fischer', icon: 'fa-brands fa-linkedin' },
  { label: 'SSW Profile', href: 'https://ssw.com.au/people/jeoffrey-fischer', icon: 'fa-solid fa-user' },
];

function MediaContent() {
  return (
    <div className="cv-section-content cv-media">
      <h2 className="cv-media-section-title">Media</h2>
      <div className="cv-media-links">
        <h3 className="cv-media-links-title">Connect</h3>
        <nav className="cv-media-links-nav" aria-label="Professional links">
          {MEDIA_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-media-link"
            >
              <i className={link.icon} aria-hidden="true" />
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="cv-media-video">
        <p className="cv-media-video-label">Talks & demos</p>
        <div className="cv-media-embed-wrapper">
          <iframe
            className="cv-media-embed"
            src={YOUTUBE_EMBED_URL}
            title="Jeoffrey Fischer SSW - YouTube Playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

const YOUTUBE_SHORT_ID = 'WS0HWQtoBv8';
const YOUTUBE_SHORT_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_SHORT_ID}?autoplay=1`;

const HOBBIES_IMAGES = [
  { src: '/images/2025-sydney-half-marathon.png', alt: '2025 Sydney Half Marathon' },
];

function HobbiesContent() {
  const baseUrl = process.env.PUBLIC_URL || '';
  return (
    <div className="cv-section-content cv-hobbies">
      <h2 className="cv-hobbies-section-title">Hobbies</h2>
      <div className="cv-hobbies-media">
        <div className="cv-hobbies-item">
          <div className="cv-hobbies-images">
            {HOBBIES_IMAGES.map((img, i) => (
              <img
                key={i}
                src={baseUrl + img.src}
                alt={img.alt}
                className="cv-hobbies-img"
              />
            ))}
          </div>
          <p className="cv-hobbies-label">Fitness</p>
        </div>
        <div className="cv-hobbies-item">
          <p className="cv-hobbies-label">Guitar</p>
          <div className="cv-hobbies-embed-wrapper">
          <iframe
            className="cv-hobbies-embed"
            src={YOUTUBE_SHORT_EMBED_URL}
            title="YouTube Short"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionContent({ sectionId }) {
  if (sectionId === 'work') return <CareerContent />;
  if (sectionId === 'education') return <EducationContent />;
  if (sectionId === 'public') return <MediaContent />;
  if (sectionId === 'interests') return <HobbiesContent />;
  return null;
}

export default SectionContent;
