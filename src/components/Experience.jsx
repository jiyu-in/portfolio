import TextLines from './TextLines';
import { siteData } from '../data/siteData';
import { Root } from './styles/Experience.styles';
import { profileData } from '../data/profileData';

export default function Experience() {
  const { experience } = profileData;
  return (
    <Root
      id="experience"
      className="container"
      aria-labelledby="experience-title"
    >
      <h2 className="section-label" id="experience-title">
        {siteData.experience.title}
      </h2>
      <p className="statement">
        {profileData.stats[0].value}{' '}
        <TextLines lines={siteData.experience.statement} />
      </p>
      <ul
        className="industries"
        aria-label={siteData.experience.industriesLabel}
      >
        {experience.industries.map((industry) => (
          <li key={industry}>{industry}</li>
        ))}
      </ul>
      {experience.start && (
        <>
          <div className="timeline" aria-hidden="true" />
          <p className="years">
            <span>{experience.start}</span>
            <span className="current">{experience.end}</span>
          </p>
        </>
      )}
    </Root>
  );
}
