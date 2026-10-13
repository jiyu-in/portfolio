import { linkStyle } from './Common.styles';
import { ImageFrame } from './ProjectImage.styles';
import { Link } from 'react-router-dom';
import ProjectImage from '../ProjectImage';
import styled from 'styled-components';
import { motion } from 'framer-motion';
export const CardImage = styled(ProjectImage)``;

export const ProjectCopy = styled.div``;
export const CardMetadata = styled.div``;
export const CardNumber = styled.span``;
export const CardSubtitle = styled.p``;
export const CardRoles = styled.p``;
export const CardDescription = styled.p``;
export const CardDescription2 = styled.p``;
export const CardLink = styled(Link)`
  ${linkStyle};
`;

export const Root = styled(motion.article)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  align-items: center;
  position: relative;
  min-width: 0;
  background: var(--background);
  border: 1px solid var(--line);
  transition: border-color 0.6s;
  &:hover,
  &:focus-within {
    border-color: var(--accent);
  }
  &:focus-within {
    outline: 2px solid var(--accent);
    outline-offset: 5px;
  }
  ${CardImage} {
    margin: 0;
    padding: 0;
  }
  ${CardImage} ${ImageFrame} {
    overflow: hidden;
  }
  ${CardImage} img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    filter: ${({ $reference }) => ($reference ? 'grayscale(1)' : 'none')};
    transition: transform 0.6s ease;
  }
  &:hover ${CardImage} img,
  &:focus-within ${CardImage} img {
    transform: scale(1.02);
  }
  ${ProjectCopy} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
  h3 {
    font-size: var(--type-project);
    line-height: 1.08;
    font-weight: 700;
    letter-spacing: -0.045em;
    overflow-wrap: anywhere;
  }
  ${CardMetadata} {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 12px;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: var(--text-muted);
  }
  ${CardNumber} {
    color: var(--accent-text);
  }
  ${CardSubtitle} {
    font-size: 14px;
    margin-top: 12px;
    color: var(--text-muted);
  }
  ${CardRoles} {
    font-size: 12px;
    color: var(--text-muted);
    margin-top: 20px;
    line-height: 1.7;
  }
  ${CardRoles} span {
    display: block;
  }
  ${CardDescription} {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-muted);
    margin-top: 20px;
    word-break: keep-all;
  }
  ${CardDescription2} {
    font-size: 14px;
    color: var(--text-muted);
    margin: 0.5rem 0 20px;
    word-break: keep-all;
  }
  ${CardLink} {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    gap: 20px;
    font-size: 12px;
    font-weight: 600;
  }
  ${CardLink}::after {
    content: '';
    position: absolute;
    inset: 0;
  }
  ${CardLink} span {
    transition: transform 0.6s;
  }
  &:hover ${CardLink} span {
    transform: translateX(3px);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    ${ProjectCopy} {
      padding: ${({ theme }) => theme.spacing.md};
    }
    ${CardImage} {
      padding: 0;
    }
  }
`;
