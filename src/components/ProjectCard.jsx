import ProjectPlaceholder from './ProjectPlaceholder';
import { useReducedMotion } from 'framer-motion';
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
  const skills = contentList(project.skills);
  const period = contentText(project.period) || contentText(project.year);
  return (
    <Root
      initial={canReveal ? { opacity: 0, y: 40 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      whileHover={undefined}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      $reference={project.imageKind === 'reference'}
      $hasImage={Boolean(contentText(project.thumbnail))}
      aria-labelledby={`project-${project.id}`}
    >
      {contentText(project.thumbnail) ? (
        <ProjectImage className="image" project={project} />
      ) : (
        <ProjectPlaceholder project={project} className="image" />
      )}
      <div className="project-copy">
        <div className="metadata">
          <span className="number">/{project.index}</span>
        </div>
        <h3 id={`project-${project.id}`}>{project.title}</h3>
        <p className="subtitle">
          {project.subtitle}
          {contentText(project.projectType) && ` · ${project.projectType}`}
        </p>
        {(roles.length > 0 || period || skills.length > 0) && (
          <p className="role-line">
            {roles.length > 0 && <span>{roles.join(' / ')}</span>}
            {period && <span>{period}</span>}
            {skills.length > 0 && <span>{skills.join(' / ')}</span>}
          </p>
        )}
        {contentText(project.description) && (
          <p className="description">{project.description}</p>
        )}
        {contentList(project.keyWork).length > 0 && (
          <p className="description key-work">
            {contentList(project.keyWork).slice(0, 2).join(' · ')}
          </p>
        )}
        <Link
          className="view"
          to={`/project/${project.id}`}
          aria-label={`${project.subtitle} ${siteData.works.linkSuffix}`}
        >
          {siteData.works.link} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </Root>
  );
}
