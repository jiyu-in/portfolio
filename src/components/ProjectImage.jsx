import { ImageFrame, Root } from './styles/ProjectImage.styles';
import { siteData } from '../data/siteData';
import { contentText } from '../data/contentUtils';
export default function ProjectImage({ project, detail = false, className }) {
  const source = contentText(detail ? project.heroImage : project.thumbnail);
  if (!source) return null;
  const reference = project.imageKind === 'reference';
  return (
    <Root className={className}>
      <ImageFrame>
        <img
          src={source}
          alt={
            contentText(project.imageAlt) ||
            `${project.subtitle} ${reference ? siteData.project.referenceAlt : siteData.project.screenshotAlt}`
          }
          loading={detail ? 'eager' : 'lazy'}
          decoding="async"
          width={project.imageWidth}
          height={project.imageHeight}
        />
      </ImageFrame>
      {/* {(contentText(project.imageCaption) || reference) && (
        <figcaption>
          {contentText(project.imageCaption) ||
            siteData.project.referenceCaption}
        </figcaption>
      )} */}
    </Root>
  );
}
