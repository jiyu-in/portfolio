import styled from 'styled-components';
import SectionLink from '../SectionLink';
export const HeroSection = styled.section`
  min-height: calc(95svh - 72px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 56px;
  padding-bottom: 32px;
  @media (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 24px;
  }
`;
export const HeroComposition = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  align-items: center;
  gap: clamp(40px, 6vw, 96px);
  padding-block: 32px;
  @media (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 8px;
    padding-block: 0;
  }
`;
export const HeroFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: center;
  margin-top: 40px;
  border-top: 1px solid var(--line);
  padding-top: 24px;
  font-size: 12px;
`;
export const Disciplines = styled.p`
  color: var(--text-muted);
  @media (max-width: 767px) {
    max-width: 170px;
  }
`;
export const ScrollLink = styled(SectionLink)`
  display: flex;
  gap: 16px;
  min-height: 44px;
  align-items: center;
  &:hover {
    color: var(--accent-text);
  }
`;
export const ScrollLabel = styled.span`
  display: ${({ $compact }) => ($compact ? 'none' : 'inline')};
  @media (max-width: 767px) {
    display: ${({ $compact }) => ($compact ? 'inline' : 'none')};
  }
`;
