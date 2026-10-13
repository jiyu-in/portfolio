import { FooterInner, Root } from './styles/Footer.styles';
import { siteData } from '../data/siteData';
import { profileData } from '../data/profileData';
export default function Footer() {
  return (
    <Root>
      <FooterInner>
        <span>
          © {new Date().getFullYear()} {profileData.name}.
        </span>
        <span>{siteData.footer.role}</span>
      </FooterInner>
    </Root>
  );
}
