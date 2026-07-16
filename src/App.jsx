import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import AppRoute from './AppRouter/AppRoute';
import { useLenis } from './hooks/useLenis';
import BackToTop from './components/Common/BackToTop';
import AIAssistant from './components/AIAssistant/AIAssistant';

function App() {
  useLenis();

  return (
    <ThemeProvider>
      <AppRoute />
      <BackToTop />
      <AIAssistant />
    </ThemeProvider>
  );
}

export default App;
