import { SkipLink } from '../components/styles/Common.styles';
import {
  ProjectBack,
  ProjectSubtitle,
  ProjectMetadata,
  ProjectHeroImage,
  ProjectNumber,
  ProjectContent,
  ProjectDesignVisual,
  ProjectOriginal,
  Root,
} from '../components/styles/Project.styles';
import { siteData, projectSectionLabels } from '../data/siteData';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projectData } from '../data/projectData';
import { contentText, contentList } from '../data/contentUtils';
export default function Project() {
  const { id } = useParams();
  const project = projectData.find((item) => item.id === id);
  const roles = contentList(project?.roles);
  const skills = contentList(project?.skills);
  const images = Array.isArray(project?.designImages)
    ? project.designImages
        .filter(
          (item) =>
            item?.verified === true &&
            contentText(item.src) &&
            contentText(item.alt),
        )
        .slice(0, 3)
    : [];
  const sections = project
    ? projectSectionLabels
        .map(([key, label]) => ({
          key,
          label,
          text: contentText(project[key]),
          items: contentList(project[key]),
        }))
        .filter(
          (section) =>
            section.text ||
            section.items.length ||
            (section.key === 'design' && images.length),
        )
    : [];
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.title = `${project ? project.title : siteData.project.notFoundDocumentTitle} — ${siteData.brand}`;
  }, [id, project]);
  return (
    <>
      <SkipLink href="#main">{siteData.skipLink}</SkipLink>
      <Header detail />
      <Root id="main" tabIndex={-1}>
        <ProjectBack to="/" state={{ section: 'work' }}>
          {siteData.project.back}
        </ProjectBack>
        {project ? (
          <>
            <h1>{project.title}</h1>
            <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
            {contentText(project.projectType) && <p>{project.projectType}</p>}
            {(roles.length > 0 ||
              contentText(project.year) ||
              contentText(project.period)) && (
              <ProjectMetadata>
                {roles.length > 0 && (
                  <p>
                    <strong>{siteData.project.role}</strong>
                    {roles.join(' / ')}
                  </p>
                )}
                {(contentText(project.period) || contentText(project.year)) && (
                  <p>
                    <strong>{siteData.project.period}</strong>
                    {contentText(project.period) || contentText(project.year)}
                  </p>
                )}
              </ProjectMetadata>
            )}
            {skills.length > 0 && (
              <ProjectMetadata as="p">
                <span>
                  <strong>{siteData.project.tools}</strong>
                  {skills.join(' / ')}
                </span>
              </ProjectMetadata>
            )}
            <ProjectHeroImage project={project} detail />
            <div>
              {sections.map((section, index) => (
                <details key={section.key} open={section.key === 'overview'}>
                  <summary>
                    <ProjectNumber>
                      {String(index + 1).padStart(2, '0')}
                    </ProjectNumber>
                    {section.label}
                  </summary>
                  <ProjectContent>
                    {section.text && <p>{section.text}</p>}
                    {section.items.length > 0 && (
                      <ul>
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {section.key === 'design' &&
                      images.map((item, imageIndex) => (
                        <ProjectDesignVisual key={item.id || imageIndex}>
                          <img
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            loading="lazy"
                            decoding="async"
                          />
                          {contentText(item.caption) && (
                            <figcaption>{item.caption}</figcaption>
                          )}
                        </ProjectDesignVisual>
                      ))}
                  </ProjectContent>
                </details>
              ))}
            </div>
            {contentText(project.liveUrl) && (
              <p>
                <ProjectOriginal
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteData.project.liveLink}
                </ProjectOriginal>
              </p>
            )}
            {contentText(project.url) && (
              <ProjectOriginal
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteData.project.originalLink}
              </ProjectOriginal>
            )}
          </>
        ) : (
          <>
            <h1>{siteData.project.notFoundTitle}</h1>
            <ProjectSubtitle>
              {siteData.project.notFoundDescription}
            </ProjectSubtitle>
          </>
        )}
      </Root>
      <Footer />
    </>
  );
}
