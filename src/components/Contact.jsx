import { scrollPortfolioData } from '../data/scrollPortfolioData';
import TextLines from './TextLines';
import { siteData } from '../data/siteData';
import { Root } from './styles/Contact.styles';
import { profileData } from '../data/profileData';

export default function Contact() {
  return (
    <Root id="contact" className="container" aria-labelledby="contact-title">
      <h2 className="section-label" id="contact-title">
        {siteData.contact.title}
      </h2>
      <p className="statement">
        <TextLines lines={siteData.contact.statement} />
      </p>
      <p className="contact-description">
        {scrollPortfolioData.contactDescription}
      </p>
      <div className="contacts">
        {profileData.email && (
          <a className="contact-link" href={`mailto:${profileData.email}`}>
            <span>
              <span className="label">{siteData.contact.emailLabel}</span>
              <span className="value">{profileData.email}</span>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
        {profileData.github && (
          <a
            className="contact-link"
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <span className="label">{siteData.contact.githubLabel}</span>
              <span className="value">{profileData.githubLabel}</span>
            </span>
            <span aria-hidden="true">↗</span>
          </a>
        )}
        {profileData.resumeUrl && (
          <a
            className="contact-link"
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {scrollPortfolioData.resumeLabel}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </Root>
  );
}
