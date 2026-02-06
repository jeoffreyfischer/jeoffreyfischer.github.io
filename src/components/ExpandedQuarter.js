import SectionContent from './SectionContent';

function ExpandedQuarter({ activeSection }) {
  if (!activeSection) return null;
  const hasRichContent = ['work', 'education', 'public', 'interests'].includes(activeSection.id);
  return (
    <div
      className={`cv-expanded-quarter cv-expanded-${activeSection.quarterClass}`}
      style={{
        '--expanded-color': activeSection.color,
        '--expanded-fade': activeSection.colorFade,
        '--corner-text': activeSection.textColor,
      }}
      aria-hidden="true"
    >
      {hasRichContent && (
        <div className="cv-expanded-content">
          <SectionContent sectionId={activeSection.id} />
        </div>
      )}
    </div>
  );
}

export default ExpandedQuarter;
