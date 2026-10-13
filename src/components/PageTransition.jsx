import { AnimatePresence, useIsPresent, useReducedMotion } from 'framer-motion';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Project';
import NotFound from '../pages/NotFound';
import { PageSurface } from './styles/PageTransition.styles';

function TransitionSurface({ children }) {
  const reduceMotion = useReducedMotion();
  const present = useIsPresent();
  return (
    <PageSurface
      inert={present ? undefined : true}
      aria-hidden={present ? undefined : true}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </PageSurface>
  );
}
export default function PageTransition() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <TransitionSurface key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
          <Route
            path="/projectFinance"
            element={<Navigate to="/project/personal-finance" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TransitionSurface>
    </AnimatePresence>
  );
}
