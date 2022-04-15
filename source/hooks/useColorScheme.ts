import { useEffect, useState } from 'react';

function useColorScheme() {
  const [currentColorScheme, setCurrentColorScheme] = useState<'dark' | 'light'>('dark');

  const handleColorSchemeChange = (mql: MediaQueryListEvent) => {
    const colorScheme = mql.matches ? 'light' : 'dark';
    setCurrentColorScheme(colorScheme);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    mediaQuery.addEventListener('change', handleColorSchemeChange);
    setCurrentColorScheme(mediaQuery.matches ? 'light' : 'dark');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', currentColorScheme);

    if (currentColorScheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [currentColorScheme]);

  return {
    currentColorScheme,
    setCurrentColorScheme,
  };
}

export default useColorScheme;