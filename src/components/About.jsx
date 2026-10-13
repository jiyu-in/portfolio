import TextLines from './TextLines';
import { siteData } from '../data/siteData';
import { Root } from './styles/About.styles';
import { profileData } from '../data/profileData';

export default function About() {
  return (
    <Root className="container" id="about" aria-labelledby="about-title">
      <h2 className="section-label" id="about-title">
        {siteData.about.title}
      </h2>
      <div className="about-grid">
        <p className="statement">
          <TextLines lines={siteData.about.statement} />
        </p>
        <div className="copy">
          <p>{profileData.introduction}</p>
          <p>{profileData.description}</p>
        </div>
      </div>
      <dl className="stats">
        {profileData.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Root>
  );
}
