import { createMuiTheme } from '@material-ui/core/styles';

import { PALETTE, BACKGROUND } from './root_style';

export const theme = (isDarkMode) =>
  createMuiTheme({
    palette: {
      primary: { main: PALETTE.primary },
      secondary: { main: PALETTE.secondary },
      error: { main: PALETTE.error },
      warning: { main: PALETTE.warning },
      success: { main: PALETTE.success },
      text_primary: { main: PALETTE.text_primary },
      text_secondary: { main: PALETTE.text_secondary },
      text_disabled: { main: PALETTE.text_disabled },
      type: isDarkMode ? 'dark' : 'light',
      background: {
        default: isDarkMode ? BACKGROUND.dark : BACKGROUND.light,
        paper: isDarkMode ? BACKGROUND.dark : BACKGROUND.light
      }
    },
    typography: {
      fontFamily: [
        'droid-sans-mono',
        'bebas-neue-by-fontfabric',
        'monospace',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(','),
      h1: {
        margin: '1rem 0',
        fontSize: '3rem',
        textAlign: 'center'
      }
    }
  });
