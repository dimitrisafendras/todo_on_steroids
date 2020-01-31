import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => {
  const { palette } = theme;
  return {
    app: {
      textAlign: 'center',
    },
    '@keyframes appLogoSpin': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    appLogo: {
      // pay attention to the ' $ ' sign as it is necessary for the animation to work
      animation: '$appLogoSpin infinite 20s linear',
    },

    appHeader: {
      backgroundColor: palette.background.default,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    },
    appLink: {
      color: '#61dafb',
    },
  };
});
