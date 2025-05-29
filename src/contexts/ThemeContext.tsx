import React, { createContext, useContext, useState, useEffect } from 'react';

// Definición de temas disponibles como constante
const AVAILABLE_THEMES = ['green', 'purple', 'blue'] as const;
type Theme = typeof AVAILABLE_THEMES[number];

interface ThemeContextType {
  currentTheme: Theme;
  setCurrentTheme: (theme: Theme) => void;
  availableThemes: readonly Theme[];
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const CustomColorProvider: React.FC<ThemeProviderProps> = ({ 
  children,
  defaultTheme = 'green'
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('current-theme');
    return (saved as Theme) || defaultTheme;
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  const applyTheme = (theme: Theme, dark: boolean) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  useEffect(() => {
    applyTheme(currentTheme, isDarkMode);
  }, [currentTheme, isDarkMode]);

  const handleThemeChange = (theme: Theme) => {
    localStorage.setItem('current-theme', theme);
    setCurrentTheme(theme);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem('dark-mode', String(newDarkMode));
    setIsDarkMode(newDarkMode);
  };

  const value = {
    currentTheme,
    setCurrentTheme: handleThemeChange,
    availableThemes: AVAILABLE_THEMES,
    isDarkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};