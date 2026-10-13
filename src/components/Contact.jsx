import {
  ContactSectionLabel,
  ContactStatement,
  ContactDescription,
  ContactLinks,
  ContactLink,
  ContactLabel,
  ContactValue,
  Root,
} from './styles/Contact.styles';
import { scrollPortfolioData } from '../data/scrollPortfolioData';
import TextLines from './TextLines';
import { siteData } from '../data/siteData';
import { profileData } from '../data/profileData';
export default function Contact() {
  return (
    <Root id="contact" aria-labelledby="contact-title">
      <ContactSectionLabel id="contact-title">
        {siteData.contact.title}
      </ContactSectionLabel>
      <ContactStatement>
        <TextLines lines={siteData.contact.statement} />
      </ContactStatement>
      <ContactDescription>
        {scrollPortfolioData.contactDescription}
      </ContactDescription>
      <ContactLinks>
        {profileData.email && (
          <ContactLink href={`mailto:${profileData.email}`}>
            <span>
              <ContactLabel>{siteData.contact.emailLabel}</ContactLabel>
              <ContactValue>{profileData.email}</ContactValue>
            </span>
            <span aria-hidden="true">↗</span>
          </ContactLink>
        )}
        {profileData.github && (
          <ContactLink
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <ContactLabel>{siteData.contact.githubLabel}</ContactLabel>
              <ContactValue>{profileData.githubLabel}</ContactValue>
            </span>
            <span aria-hidden="true">↗</span>
          </ContactLink>
        )}
        {profileData.resumeUrl && (
          <ContactLink
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {scrollPortfolioData.resumeLabel}
            <span aria-hidden="true">↗</span>
          </ContactLink>
        )}
      </ContactLinks>
    </Root>
  );
}
