import { siteData } from '../data/siteData';
import { Root } from './styles/Footer.styles';
import { profileData } from '../data/profileData';

export default function Footer() {
  return (
    <Root className="container">
      <div className="inner">
        <span>
          © {new Date().getFullYear()} {profileData.name}.
        </span>
        <span>{siteData.footer.role}</span>
      </div>
    </Root>
  );
}
