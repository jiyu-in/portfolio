import '@testing-library/jest-dom/vitest';

// Motion visibility uses the browser observer; make its lifecycle deterministic in jsdom.
class TestIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = TestIntersectionObserver;
