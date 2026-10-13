import styled from 'styled-components';

export const Root = styled.main`
  padding-top: 64px;
  padding-bottom: 120px;
  .back {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    margin-bottom: 64px;
    font-size: 12px;
    font-weight: 700;
  }
  .back:hover,
  .original:hover {
    color: var(--accent-text);
  }
  h1 {
    font-size: clamp(48px, 8vw, 120px);
    line-height: 1;
    letter-spacing: -0.065em;
    overflow-wrap: anywhere;
    text-wrap: balance;
  }
  .subtitle {
    margin-top: 20px;
    font-size: 22px;
  }
  .metadata {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    margin-block: 40px;
    font-size: 14px;
  }
  .metadata p {
    max-width: 600px;
  }
  .metadata strong {
    display: block;
    font-size: 12px;
    margin-bottom: 8px;
  }
  .hero-image {
    margin-bottom: 64px;
  }
  .hero-image img {
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
    gap: 32px;
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
  .number {
    color: var(--accent-text);
    font-size: 13px;
  }
  .content {
    max-width: 800px;
    margin-left: 54px;
    padding-bottom: 32px;
    white-space: pre-line;
    word-break: keep-all;
  }
  .content ul {
    margin: 0;
    padding-left: 20px;
  }
  .content li + li {
    margin-top: 8px;
  }
  .design-visual {
    margin: 40px 0;
  }
  .design-visual img {
    width: 100%;
    height: auto;
  }
  .original {
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
    .back {
      margin-bottom: 40px;
    }
    .subtitle {
      font-size: 18px;
    }
    .metadata {
      flex-direction: column;
      margin-block: 32px;
    }
    .hero-image {
      margin-bottom: 40px;
    }
    .hero-image img {
      aspect-ratio: 4 / 3;
    }
    summary {
      gap: 20px;
      font-size: 18px;
    }
    .content {
      margin-left: 0;
    }
  }
`;
