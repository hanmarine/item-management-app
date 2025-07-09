import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  typography: {
    fontFamily: 'var(--font-inter), sans-serif',
  },
  palette: {
    mode: 'dark', 
    background: {
      default: '#121212', 
      paper: '#1a1a1a',   
    },
  },
});

export default customTheme;