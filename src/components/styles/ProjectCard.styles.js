import styled from 'styled-components';
import { motion } from 'framer-motion';
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
  .image {
    margin: 0;
    padding: 0;
  }
  .image .image-frame {
    overflow: hidden;
  }
  .image img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    filter: ${({ $reference }) => ($reference ? 'grayscale(1)' : 'none')};
    transition: transform 0.6s ease;
  }
  &:hover .image img,
  &:focus-within .image img {
    transform: scale(1.02);
  }
  .project-copy {
    padding: 32px;
  }
  h3 {
    font-size: var(--type-project);
    line-height: 1.08;
    font-weight: 700;
    letter-spacing: -0.045em;
    overflow-wrap: anywhere;
  }
  .metadata {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-size: 12px;
    margin-bottom: 16px;
    color: var(--text-muted);
  }
  .number {
    color: var(--accent-text);
  }
  .subtitle {
    font-size: 14px;
    margin-top: 12px;
    color: var(--text-muted);
  }
  .role-line {
    font-size: 12px;
    color: var(--text-muted);
    margin-top: 20px;
    line-height: 1.7;
  }
  .role-line span {
    display: block;
  }
  .description {
    font-size: 15px;
    color: var(--text-muted);
    margin-top: 20px;
    letter-spacing: -0.02em;
    line-height: 1.45;
    word-break: keep-all;
  }
  .key-work {
    margin-top: 0.5rem;
    margin-bottom: 20px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 24px 0;
  }
  .tags li {
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 4px 10px;
    font-size: 11px;
    color: var(--text-muted);
  }
  .view {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    gap: 20px;
    font-size: 12px;
    font-weight: 600;
  }
  .view::after {
    content: '';
    position: absolute;
    inset: 0;
  }
  .view span {
    transition: transform 0.6s;
  }
  &:hover .view span {
    transform: translateX(3px);
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    .project-copy {
      padding: 24px;
    }
    .image {
      padding: 0;
    }
  }
`;
