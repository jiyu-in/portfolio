import { containerLayout, linkStyle } from './Common.styles';
import ProjectImage from '../ProjectImage';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const ProjectBack = styled(Link)`
  ${linkStyle};
`;
export const ProjectSubtitle = styled.p``;
export const ProjectMetadata = styled.div``;
export const ProjectHeroImage = styled(ProjectImage)``;
export const ProjectNumber = styled.span``;
export const ProjectContent = styled.div``;
export const ProjectDesignVisual = styled.figure``;
export const ProjectOriginal = styled.a`
  ${linkStyle};
`;

export const Root = styled.main`
  ${containerLayout};
  padding-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: 120px;
  ${ProjectBack} {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
    font-size: 12px;
    font-weight: 700;
  }
  ${ProjectBack}:hover,
  ${ProjectOriginal}:hover {
    color: var(--accent-text);
  }
  h1 {
    font-size: clamp(48px, 8vw, 120px);
    line-height: 1;
    letter-spacing: -0.065em;
    overflow-wrap: anywhere;
    text-wrap: balance;
  }
  ${ProjectSubtitle} {
    margin-top: 20px;
    font-size: 22px;
  }
  ${ProjectMetadata} {
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md};
    margin-block: 40px;
    font-size: 14px;
  }
  ${ProjectMetadata} p {
    max-width: 600px;
  }
  ${ProjectMetadata} strong {
    display: block;
    font-size: 12px;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  ${ProjectHeroImage} {
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
  }
  ${ProjectHeroImage} img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    max-height: 700px;
    object-fit: contain;
  }
  details {
    border-top: 1px solid var(--line);
  }
  details:last-child {
    border-bottom: 1px solid var(--line);
  }
  summary {
    cursor: pointer;
    padding-block: 28px;
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: center;
    list-style: none;
    font-size: 22px;
    font-weight: 600;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary::after {
    content: '+';
    margin-left: auto;
    font-weight: 400;
  }
  details[open] summary::after {
    content: '−';
  }
  ${ProjectNumber} {
    color: var(--accent-text);
    font-size: 13px;
  }
  ${ProjectContent} {
    max-width: 800px;
    margin-left: 54px;
    padding-bottom: ${({ theme }) => theme.spacing.lg};
    white-space: pre-line;
    word-break: keep-all;
  }
  ${ProjectContent} ul {
    margin: 0;
    padding-left: 20px;
  }
  ${ProjectContent} li + li {
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
  ${ProjectDesignVisual} {
    margin: 40px 0;
  }
  ${ProjectDesignVisual} img {
    width: 100%;
    height: auto;
  }
  ${ProjectOriginal} {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-top: 40px;
    font-size: 13px;
    border-bottom: 1px solid currentColor;
    padding-bottom: 6px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 40px;
    padding-bottom: 80px;
    ${ProjectBack} {
      margin-bottom: 40px;
    }
    ${ProjectSubtitle} {
      font-size: 18px;
    }
    ${ProjectMetadata} {
      flex-direction: column;
      margin-block: ${({ theme }) => theme.spacing.lg};
    }
    ${ProjectHeroImage} {
      margin-bottom: 40px;
    }
    ${ProjectHeroImage} img {
      aspect-ratio: 4 / 3;
    }
    summary {
      gap: 20px;
      font-size: 18px;
    }
    ${ProjectContent} {
      margin-left: 0;
    }
  }
`;
