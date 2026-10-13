import { siteData } from '../data/siteData';
import { Root } from './styles/Skills.styles';
import { profileData } from '../data/profileData';

export default function Skills() {
  return (
    <Root className="container" aria-labelledby="skills-title">
      <h2 className="section-label" id="skills-title">
        {siteData.skills.title}
      </h2>
      <div className="skills-grid">
        {profileData.skills.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Root>
  );
}
