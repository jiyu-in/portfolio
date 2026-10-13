import styled from 'styled-components';
import { motion } from 'framer-motion';
export const Root = styled(motion.article)`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  grid-template-areas: 'copy image';
  gap: 48px;
  padding: 48px;
  margin-top: 56px;
  background: var(--surface-soft);
  border: 1px solid var(--line);
  border-radius: 2px;
  box-shadow: 0 8px 24px ${({ theme }) => `${theme.colors.accent}08`};
  &:nth-of-type(even) {
    margin-left: 6%;
  }
  &:nth-of-type(odd) {
    margin-right: 6%;
  }
  &::before {
    content: '';
    position: absolute;
    width: 76px;
    height: 20px;
    left: 40px;
    top: -11px;
    background: var(--accent-soft);
    transform: rotate(-3deg);
  }
  .project-copy {
    grid-area: copy;
    min-width: 0;
  }
  .metadata {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    font-size: 12px;
    margin-bottom: 32px;
  }
  .number {
    color: var(--accent-text);
    font-weight: 700;
  }
  .year {
    color: var(--text-muted);
  }
  h3 {
    font-size: clamp(30px, 3.8vw, 58px);
    line-height: 1.05;
    letter-spacing: -0.055em;
    overflow-wrap: anywhere;
    text-wrap: balance;
  }
  .subtitle {
    margin-top: 16px;
    font-size: 16px;
  }
  .description {
    margin-top: 20px;
    color: var(--text-muted);
    font-size: 16px;
    word-break: keep-all;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    gap: 8px 16px;
    margin: 24px 0;
    font-size: 12px;
    color: var(--accent-text);
  }
  .scope {
    border-top: 1px dashed var(--line);
    padding-top: 18px;
  }
  .scope strong {
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--text-muted);
  }
  .scope ul {
    display: block;
    color: var(--text-muted);
    margin-top: 10px;
    line-height: 1.7;
  }
  .view {
    display: inline-flex;
    align-items: center;
    gap: 24px;
    min-height: 44px;
    border-bottom: 1px solid var(--accent);
    font-size: 12px;
    font-weight: 700;
    margin-top: 8px;
  }
  .view::after {
    content: '';
    position: absolute;
    inset: 0;
  }
  .view span {
    transition: transform 0.5s;
  }
  &:hover .view span,
  &:focus-within .view span {
    transform: translateX(5px);
  }
  &:focus-within {
    outline: 2px solid var(--accent);
    outline-offset: 6px;
  }
  .image {
    grid-area: image;
    align-self: center;
    min-width: 0;
  }
  .image img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }
  @media (max-width: 1199px) {
    gap: 32px;
    padding: 32px;
  }
  @media (max-width: 767px) {
    &,
    &:nth-of-type(even),
    &:nth-of-type(odd) {
      margin-inline: 0;
    }
    grid-template-columns: 1fr;
    grid-template-areas: 'image' 'copy';
    padding: 24px;
    margin-top: 40px;
    gap: 28px;
    .metadata {
      margin-bottom: 24px;
    }
  }
`;
