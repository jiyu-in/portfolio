export const theme = {
  colors: {
    background: '#FFFFFF',
    surface: '#F6F7F9',
    surfaceSoft: '#FAFAFB',
    text: '#111111',
    secondary: '#6F747C',
    line: '#E5E7EB',
    accent: '#111111',
    accentSoft: '#EEF0F3',
    // Slightly deeper than secondary: small text also meets AA on surface.
    secondaryText: '#626A78',
    accentText: '#111111',
    black: '#000000',
    white: '#FFFFFF',
    coolGray: '#F2F4F7',
    darkGray: '#2B2F36',
  },
  typography: {
    fontFamily:
      "Arial, 'Helvetica Neue', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
    hero: 'clamp(56px, 7.6vw, 116px)',
    heroMobile: 'clamp(38px, 9vw, 68px)',
    section: 'clamp(40px, 5.5vw, 80px)',
    project: 'clamp(30px, 3vw, 46px)',
    body: '16px',
    caption: '12px',
  },
  layout: {
    maxWidth: '1600px',
    headerHeight: '72px',
    padding: { desktop: '64px', tablet: '32px', mobile: '20px' },
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '64px',
    section: '100px',
  },
  breakpoints: { tablet: '1199px', mobile: '767px' },
};
