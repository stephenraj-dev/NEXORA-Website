import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import AppRoute from './AppRouter/AppRoute';
import { useLenis } from './hooks/useLenis';
import BackToTop from './components/Common/BackToTop';

function App() {
  useLenis();

  return (
    <ThemeProvider>
      <AppRoute />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
