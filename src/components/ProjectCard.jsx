import {
  CardImage,
  ProjectCopy,
  CardMetadata,
  CardNumber,
  CardSubtitle,
  CardRoles,
  CardDescription,
  CardDescription2,
  CardLink,
  Root,
} from './styles/ProjectCard.styles';
import ProjectPlaceholder from './ProjectPlaceholder';
import { useReducedMotion } from 'framer-motion';
import { siteData } from '../data/siteData';

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
      data-cursor="View"
      $reference={project.imageKind === 'reference'}
      $hasImage={Boolean(contentText(project.thumbnail))}
      aria-labelledby={`project-${project.id}`}
    >
      {contentText(project.thumbnail) ? (
        <CardImage project={project} />
      ) : (
        <CardImage as={ProjectPlaceholder} project={project} />
      )}
      <ProjectCopy>
        <CardMetadata>
          <CardNumber>/{project.index}</CardNumber>
        </CardMetadata>
        <h3 id={`project-${project.id}`}>{project.title}</h3>
        <CardSubtitle>
          {project.subtitle}
          {contentText(project.projectType) && ` · ${project.projectType}`}
        </CardSubtitle>
        {(roles.length > 0 || period || skills.length > 0) && (
          <CardRoles>
            {roles.length > 0 && <span>{roles.join(' / ')}</span>}
            {period && <span>{period}</span>}
            {skills.length > 0 && <span>{skills.join(' / ')}</span>}
          </CardRoles>
        )}
        {contentText(project.description) && (
          <CardDescription>{project.description}</CardDescription>
        )}
        {contentList(project.keyWork).length > 0 && (
          <CardDescription2>
            {contentList(project.keyWork).slice(0, 2).join(' · ')}
          </CardDescription2>
        )}
        <CardLink
          data-cursor="View"
          to={`/project/${project.id}`}
          aria-label={`${project.subtitle} ${siteData.works.linkSuffix}`}
        >
          {siteData.works.link} <span aria-hidden="true">↗</span>
        </CardLink>
      </ProjectCopy>
    </Root>
  );
}
