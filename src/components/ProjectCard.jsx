import ProjectPlaceholder from './ProjectPlaceholder';
import { useReducedMotion } from 'framer-motion';
import { notebookData } from '../data/notebookData';
import { siteData } from '../data/siteData';
import { Root } from './styles/ProjectCard.styles';
import { Link } from 'react-router-dom';
import ProjectImage from './ProjectImage';
import { contentText, contentList } from '../data/contentUtils';

export default function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion();
  const canReveal =
    !reduceMotion && typeof IntersectionObserver !== 'undefined';
  const roles = contentList(project.roles);
  const tags = roles.length ? roles : contentList(project.categories);
  return (
    <Root
      initial={canReveal ? { opacity: 0, y: 32 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      whileHover={reduceMotion ? undefined : { y: -5, rotate: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      $hasImage={Boolean(contentText(project.thumbnail))}
      aria-labelledby={`project-${project.id}`}
    >
      <div className="project-copy">
        <div className="metadata">
          <span className="number">/{project.index}</span>
          {contentText(project.year) && (
            <span className="year">{project.year}</span>
          )}
        </div>
        <h3 id={`project-${project.id}`}>{project.title}</h3>
        <p className="subtitle">
          {project.subtitle}
          {contentText(project.projectType) && ` · ${project.projectType}`}
        </p>
        {contentText(project.description) && (
          <p className="description">{project.description}</p>
        )}
        {tags.length > 0 && (
          <ul
            aria-label={
              roles.length
                ? siteData.works.rolesLabel
                : siteData.works.industryLabel
            }
          >
            {tags.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {contentList(project.keyWork).length > 0 && (
          <div className="scope">
            <strong>{notebookData.scopeLabel}</strong>
            <ul>
              {contentList(project.keyWork)
                .slice(0, 3)
                .map((item) => (
                  <li key={item}>{item}</li>
                ))}
            </ul>
          </div>
        )}
        <Link
          className="view"
          to={`/project/${project.id}`}
          aria-label={`${project.subtitle} ${siteData.works.linkSuffix}`}
        >
          {siteData.works.link} <span aria-hidden="true">↗</span>
        </Link>
      </div>
      {contentText(project.thumbnail) ? (
        <ProjectImage className="image" project={project} />
      ) : (
        <ProjectPlaceholder project={project} className="image" />
      )}
    </Root>
  );
}
