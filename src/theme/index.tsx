import { useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Theme() {
    const [mode, setMode] = useState<'light' | 'dark'>('light')

    const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${mode})`);
  
    const theme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode],
    );
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );

    return {theme, mode, colorMode}
}
