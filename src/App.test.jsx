import React from 'react';
import { vi } from 'vitest';
import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { projectData } from './data/projectData';

beforeEach(() => window.history.replaceState(null, '', '/#/'));

test('renders portfolio sections and full navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('DESIGN');
  expect(screen.getByRole('heading', { name: 'SELECTED WORKS' })).toBeInTheDocument();
  const nav = screen.getByRole('navigation', { name: '주요 메뉴' });
  expect(within(nav).getAllByRole('link')).toHaveLength(4);
  expect(within(nav).getByRole('link', { name: 'WORK' })).toHaveAttribute('href', '#work');
});

test('renders each selected project with its preserved image and internal detail route', () => {
  render(<App />);
  expect(screen.getAllByRole('article')).toHaveLength(projectData.length);
  projectData.forEach(project => {
    const article = screen.getByRole('article', { name: project.title });
    expect(within(article).getByRole('img')).toHaveAttribute('src', project.thumbnail);
    if (project.imageKind === 'reference') {
      expect(within(article).getByRole('img')).toHaveAccessibleName(`${project.subtitle} 참고 이미지`);
      expect(within(article).getByText(/참고 이미지 · 실제 서비스 화면이 아닙니다/)).toBeInTheDocument();
    }
    const link = within(article).getByRole('link');
    expect(link).toHaveAttribute('href', `#/project/${project.id}`);
  });
});

test('work navigation scrolls without replacing the HashRouter route', () => {
  render(<App />);
  const work = document.getElementById('work');
  work.scrollIntoView = vi.fn();
  const originalHash = window.location.hash;
  fireEvent.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'WORK' }));
  expect(work.scrollIntoView).toHaveBeenCalledWith({ block: 'start' });
  expect(window.location.hash).toBe(originalHash);
  expect(screen.getByRole('heading', { name: 'SELECTED WORKS' })).toBeInTheDocument();
});

test('renders subsequent sections and the original contact email', () => {
  render(<App />);
  ['ABOUT', 'SKILLS', 'EXPERIENCE', 'CONTACT'].forEach(name => {
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });
  expect(screen.getByRole('link', { name: /jyin2205@naver.com/ })).toHaveAttribute('href', 'mailto:jyin2205@naver.com');
});

test('direct project route renders a data-driven case study and preserved Notion link', () => {
  const project = projectData[0];
  window.history.replaceState(null, '', `/#/project/${project.id}`);
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: project.title })).toBeInTheDocument();
  expect(screen.getByText('OVERVIEW')).toBeInTheDocument();
  expect(screen.getByText('KEY WORK')).toBeInTheDocument();
  expect(screen.getByText('ROLE', { selector: 'summary' })).toBeInTheDocument();
  expect(screen.getByText('IMPLEMENTATION')).toBeInTheDocument();
  expect(screen.queryByText('RESULT')).not.toBeInTheDocument();
  expect(document.title).toBe(`${project.title} — JIYU.`);
  expect(screen.getByText(project.period)).toBeInTheDocument();
  expect(screen.getByText('개인 프로젝트')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /퍼블리싱 화면 보기/ })).toHaveAttribute('href', project.liveUrl);
  expect(screen.getByRole('link', { name: /NOTION에서/ })).toHaveAttribute('href', project.url);
  expect(screen.getByRole('link', { name: /BACK TO WORK/ })).toHaveAttribute('href', '#/');
});

test('unknown project route offers recovery', () => {
  window.history.replaceState(null, '', '/#/project/missing');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'PROJECT NOT FOUND.' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /BACK TO WORK/ })).toBeInTheDocument();
});

test('legacy finance bookmark resolves to the current case study', async () => {
  window.history.replaceState(null, '', '/#/projectFinance');
  render(<App />);
  expect(await screen.findByRole('heading', { level: 1, name: 'PERSONAL FINANCE' })).toBeInTheDocument();
  expect(window.location.hash).toBe('#/project/personal-finance');
});

test('unknown page route offers a home link', () => {
  window.history.replaceState(null, '', '/#/missing-page');
  render(<App />);
  expect(screen.getByRole('heading', { name: 'PAGE NOT FOUND.' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /BACK TO HOME/ })).toHaveAttribute('href', '#/');
});


test('public version omits unverified statistics, timeline dates and reference visual archive', () => {
  render(<App />);
  expect(screen.queryByText('50+')).not.toBeInTheDocument();
  expect(screen.queryByText('6')).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'SELECTED VISUALS' })).not.toBeInTheDocument();
  expect(document.querySelector('#experience .years')).toBeNull();
});

test.each([null, undefined, '', [], {}])('detail hides empty data (%j) without empty labels or render errors', value => {
  const project = { id: 'empty-data-check', title: 'EMPTY DATA CHECK', subtitle: '검증', roles: value, skills: value, year: value, period: value, overview: value, keyWork: value, design: value, implementation: value, result: value, heroImage: value, liveUrl: value, url: value };
  projectData.push(project);
  try {
    window.history.replaceState(null, '', '/#/project/empty-data-check');
    render(<App />);
    expect(screen.getByRole('heading', { name: 'EMPTY DATA CHECK' })).toBeInTheDocument();
    expect(document.querySelector('details')).toBeNull();
    expect(document.querySelector('.metadata')).toBeNull();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByText(/N\/A|TBD|TODO|Coming Soon/)).not.toBeInTheDocument();
  } finally { projectData.pop(); }
});
