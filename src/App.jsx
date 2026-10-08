import React from 'react';
import { HashRouter, Navigate, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Main from './main';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App() {
  return <ThemeProvider theme={theme}><GlobalStyle /><HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Routes>
    <Route path="/" element={<Main />} />
    <Route path="/project/:id" element={<Project />} />
    <Route path="/projectFinance" element={<Navigate to="/project/personal-finance" replace />} />
    <Route path="*" element={<NotFound />} />
  </Routes></HashRouter></ThemeProvider>;
}
export default App;
