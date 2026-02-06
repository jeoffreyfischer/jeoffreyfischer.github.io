/**
 * Section content for CV corners – Career & Education.
 * Bold stacks and AI tools for recruiter visibility.
 */

const BOLD_TERMS = ['.NET', 'Angular', 'Cursor', 'Matlab', 'Scrum', 'Azure', 'Power Apps'];

/** Wraps matching terms in <strong> */
export function boldTerms(text) {
  if (!text || typeof text !== 'string') return text;
  let result = text;
  BOLD_TERMS.forEach((term) => {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const boundary = /^\W/.test(term)
      ? `(?<!\\w)(${escaped})(?!\\w)`
      : `\\b(${escaped})\\b`;
    const re = new RegExp(boundary, 'g');
    result = result.replace(re, '{{B}}$1{{/B}}');
  });
  return result.split(/(\{\{B\}\}|\{\{\/B\}\})/).filter(Boolean);
}

export const CAREER_CONTENT = {
  id: 'work',
  title: 'Career',
  items: [
    {
      role: 'Software Engineer',
      company: 'SSW, Sydney',
      location: 'Sydney, Australia',
      period: '2023 – Present',
      highlights: [
        'Backend: .NET, EF Core, SQL Server',
        'Frontend: Angular, React, Next.js',
        'Cloud: Azure',
        'Microsoft Power Platform: Power Apps',
        'AI tools: Cursor, ChatGPT',
        'Agile: Scrum',
      ],
    },
    {
      role: 'Research Associate',
      company: 'UNSW, Sydney',
      location: 'Sydney, Australia',
      period: '2015 – 2022',
      highlights: [
        'Modeling, data analysis in Matlab, experimental design',
        'Peer-reviewed publications',
        'Industry & academic collaboration',
      ],
    },
  ],
};

export const EDUCATION_CONTENT = {
  id: 'education',
  title: 'Education',
  items: [
    {
      degree: 'Full-Stack Development',
      institution: 'SSW FireBootCamp – Internship',
      location: 'Sydney',
      period: 'May – Oct 2023',
    },
    {
      degree: 'PhD in Aerospace',
      institution: 'University of Poitiers',
      location: 'France',
      period: '2009 – 2013',
    },
  ],
  certifications: [
    'Certified Scrum Master',
    'Azure Fundamentals',
    'Azure AI Fundamentals',
    'GitOps Fundamentals',
  ],
};
