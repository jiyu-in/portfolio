import { Link } from 'react-router-dom';
import { archiveData, scrollPortfolioData } from '../data/scrollPortfolioData';
import { contentList, contentText } from '../data/contentUtils';
import { Archive } from './styles/ProjectArchive.styles';
export default function ProjectArchive() {
  return (
    <Archive id="archive" className="container" aria-labelledby="archive-title">
      <h2 id="archive-title">{scrollPortfolioData.archiveTitle}</h2>
      <div>
        {archiveData.map((project) => {
          const props = project.route
            ? { to: project.route }
            : {
                href: project.url,
                target: '_blank',
                rel: 'noopener noreferrer',
              };
          const Row = project.route ? Link : 'a';
          return (
            <Row className="archive-row" key={project.id} {...props}>
              <span className="archive-index">{project.index}</span>
              <span className="archive-title">{project.title}</span>
              {contentList(project.roles).length > 0 && (
                <span className="archive-role">
                  {contentList(project.roles).join(' / ')}
                </span>
              )}
              {contentText(project.year) && (
                <span className="archive-year">{project.year}</span>
              )}
              {contentText(project.projectType) && (
                <span className="archive-type">{project.projectType}</span>
              )}
              <span className="archive-arrow" aria-hidden="true">
                ↗
              </span>
            </Row>
          );
        })}
      </div>
    </Archive>
  );
}
