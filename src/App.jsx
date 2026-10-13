import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import PageTransition from './components/PageTransition';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HashRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <PageTransition />
      </HashRouter>
    </ThemeProvider>
  );
}
