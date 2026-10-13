import { SectionLabel, Statement } from './Common.styles';
import { containerLayout } from './Common.styles';
import styled from 'styled-components';
import { Section } from './Section.styles';
export const ContactSectionLabel = styled(SectionLabel)``;
export const ContactStatement = styled(Statement)``;
export const ContactDescription = styled.p``;
export const ContactLinks = styled.div``;
export const ContactLink = styled.a``;
export const ContactLabel = styled.span``;
export const ContactValue = styled.span``;

export const Root = styled(Section)`
  ${containerLayout};
  ${ContactStatement} {
    font-size: clamp(40px, 6vw, 88px);
  }
  ${ContactDescription} {
    max-width: 540px;
    color: var(--text-muted);
    margin-top: 28px;
    font-size: var(--type-body);
  }
  ${ContactLinks} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
    margin-top: ${({ theme }) => theme.spacing.xxl};
  }
  ${ContactLink} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding-block: 20px;
    border-top: 1px solid var(--line);
    transition: color 0.6s;
  }
  ${ContactLink}:hover {
    color: var(--accent-text);
  }
  ${ContactLabel} {
    display: block;
    font-size: 12px;
    color: var(--text-muted);
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  ${ContactValue} {
    overflow-wrap: anywhere;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${ContactLinks} {
      grid-template-columns: 1fr;
      gap: 20px;
      margin-top: 40px;
    }
  }
`;
