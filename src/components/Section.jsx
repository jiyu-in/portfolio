import styled from 'styled-components';

export const Section = styled.section`
  padding-block: 80px;
  border-top: 1px solid var(--line);
  .section-label { margin-bottom: 56px; font-size: 13px; font-weight: 700; letter-spacing: 1px; }
  .statement { font-size: clamp(42px, 6vw, 90px); font-weight: 800; line-height: 1; letter-spacing: -.06em; }
  @media (max-width: 767px) {
    padding-block: 48px;
    .section-label { margin-bottom: 36px; }
  }
`;
