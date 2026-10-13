import { siteData } from '../data/siteData';
import { Root } from './styles/SelectedVisuals.styles';
import { visualData } from '../data/visualData';
import { contentText } from '../data/contentUtils';

export default function SelectedVisuals({ visuals = visualData }) {
  const images = visuals
    .filter(
      (item) =>
        item?.verified === true &&
        contentText(item.src) &&
        contentText(item.alt),
    )
    .slice(0, 6);
  if (!images.length) return null;
  return (
    <Root id="visuals" className="container" aria-labelledby="visuals-title">
      <h2 className="section-label" id="visuals-title">
        {siteData.visuals.title}
      </h2>
      <div className="visual-grid">
        {images.map((item, index) => (
          <figure key={item.id || `${item.src}-${index}`}>
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              loading="lazy"
              decoding="async"
            />
            {(contentText(item.title) || contentText(item.category)) && (
              <figcaption>
                {contentText(item.title)}
                {contentText(item.category) && <span>{item.category}</span>}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Root>
  );
}
