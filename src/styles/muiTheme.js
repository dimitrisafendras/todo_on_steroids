// TODO: Refactor
import { createMuiTheme } from '@material-ui/core/styles';
import { merge } from 'lodash-es';
import { typography } from './typography';
import { palette } from './palette';
import { color } from './color';

export const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: typography.fontFamily,
  },
  palette,
  color,
});

muiTheme.typography = merge(
  muiTheme.typography,
  typography(muiTheme.typography),
);

// Overrides
muiTheme.overrides = {
  MuiTypography: {
    colorInherit: {
      color: 'inherit',
    },
    colorSecondary: {
      color: muiTheme.palette.secondary.main,
    },
    colorPrimary: {
      color: muiTheme.palette.primary.main,
    },
    h1: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: muiTheme.typography.pxToRem(56),
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: muiTheme.typography.pxToRem(40),
      },
    },
    h2: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: muiTheme.typography.pxToRem(48),
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: muiTheme.typography.pxToRem(32),
      },
    },
    h3: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: muiTheme.typography.pxToRem(21),
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: muiTheme.typography.pxToRem(18),
      },
    },
    subtitle1: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: muiTheme.typography.pxToRem(14),
      },
    },
    body1: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: muiTheme.typography.pxToRem(14),
      },
    },
    body2: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: muiTheme.typography.pxToRem(12),
      },
    },
  },
};
