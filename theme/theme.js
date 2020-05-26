import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes((createMuiTheme)({
  typography: {
    fontFamily: 'system-ui',
    button: {
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 10,
  },
  palette: {
    primary: {
      main: '#FAFAFA',
      contrastText: '#000',
    },
    secondary: {
      main: '#000',
      contrastText: '#FAFAFA',
    },
    tertiary: {
      main: '#39C463',
      contrastText: '#FAFAFA',
    },
    background: {
      paper: '#000',
      default: '#000'
    },
    error: {
      main: '#EC5A5A'
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        color: '#FAFAFA',
      },
      body1: {
        color: '#FAFAFA',
      },
      caption: {
        color: '#ABABAB',
      },
      colorTextSecondary: {
        color: '#ABABAB'
      }
    },
    MuiList: {
      root: {
        backgroundColor: '#484848',
        borderRadius: 8,
      }
    },
  }
}));
