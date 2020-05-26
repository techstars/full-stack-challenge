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
    MuiOutlinedInput: {
      root: {
        borderRadius: 5,
        backgroundColor: '#FAFAFA',
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: 14,
        '&$focused': {
          color: '#39C463'
        }
      },
    },
    MuiInputBase: {
      inputMarginDense: {
        fontSize: 14,
      }
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#39C463',
        '&:hover': {
          backgroundColor: '#38804d'
        },
        '&:disabled': {
          backgroundColor: '#38804d'
        }
      }
    },
  }
}));
