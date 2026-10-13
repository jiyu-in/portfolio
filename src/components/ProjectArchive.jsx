import {
  ArchiveRow,
  ArchiveIndex,
  ArchiveTitle,
  ArchiveRole,
  ArchiveYear,
  ArchiveType,
  ArchiveArrow,
  Archive,
} from './styles/ProjectArchive.styles';
import { Link } from 'react-router-dom';
import { archiveData, scrollPortfolioData } from '../data/scrollPortfolioData';
import { contentList, contentText } from '../data/contentUtils';
export default function ProjectArchive() {
  return (
    <Archive id="archive" aria-labelledby="archive-title">
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
            <ArchiveRow as={Row} data-cursor="Open" key={project.id} {...props}>
              <ArchiveIndex>{project.index}</ArchiveIndex>
              <ArchiveTitle>{project.title}</ArchiveTitle>
              {contentList(project.roles).length > 0 && (
                <ArchiveRole>
                  {contentList(project.roles).join(' / ')}
                </ArchiveRole>
              )}
              {contentText(project.year) && (
                <ArchiveYear>{project.year}</ArchiveYear>
              )}
              {contentText(project.projectType) && (
                <ArchiveType>{project.projectType}</ArchiveType>
              )}
              <ArchiveArrow aria-hidden="true">↗</ArchiveArrow>
            </ArchiveRow>
          );
        })}
      </div>
    </Archive>
  );
}
