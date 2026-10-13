import { siteData, projectSectionLabels } from '../data/siteData';
import { Root } from '../components/styles/Project.styles';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionLink from '../components/SectionLink';
import ProjectImage from '../components/ProjectImage';
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
      <SectionLink className="skip-link" href="#main">
        {siteData.skipLink}
      </SectionLink>
      <Header detail />
      <Root className="container" id="main" tabIndex={-1}>
        <Link className="back" to="/" state={{ section: 'work' }}>
          {siteData.project.back}
        </Link>
        {project ? (
          <>
            <h1>{project.title}</h1>
            <p className="subtitle">{project.subtitle}</p>
            {contentText(project.projectType) && <p>{project.projectType}</p>}
            {(roles.length > 0 ||
              contentText(project.year) ||
              contentText(project.period)) && (
              <div className="metadata">
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
              </div>
            )}
            {skills.length > 0 && (
              <p className="metadata">
                <span>
                  <strong>{siteData.project.tools}</strong>
                  {skills.join(' / ')}
                </span>
              </p>
            )}
            <ProjectImage className="hero-image" project={project} detail />
            <div>
              {sections.map((section, index) => (
                <details key={section.key} open={section.key === 'overview'}>
                  <summary>
                    <span className="number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.label}
                  </summary>
                  <div className="content">
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
                        <figure
                          className="design-visual"
                          key={item.id || imageIndex}
                        >
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
                        </figure>
                      ))}
                  </div>
                </details>
              ))}
            </div>
            {contentText(project.liveUrl) && (
              <p>
                <a
                  className="original"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteData.project.liveLink}
                </a>
              </p>
            )}
            {contentText(project.url) && (
              <a
                className="original"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteData.project.originalLink}
              </a>
            )}
          </>
        ) : (
          <>
            <h1>{siteData.project.notFoundTitle}</h1>
            <p className="subtitle">{siteData.project.notFoundDescription}</p>
          </>
        )}
      </Root>
      <Footer />
    </>
  );
}
