import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import AppRoute from './AppRouter/AppRoute';

function App() {
  return (
    <ThemeProvider>
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
