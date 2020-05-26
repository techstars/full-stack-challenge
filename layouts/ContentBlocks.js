import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => createStyles({
  main: {
    flex: 1,
    background: theme.palette.secondary.main,
  },
  mainContent: {
    width: '100%',
    maxWidth: 1480,
    margin: '0 auto',
    padding: theme.spacing(3),
    minHeight: 'calc(100vh - 100px)',
    background: theme.palette.primary.main,
    borderRadius: 8,
  },
  mainCentered: {
    maxWidth: 800,
    padding: theme.spacing(6, 3),
    background: theme.palette.secondary.main,
    borderRadius: 8,
    margin: '0 auto',
  },
}));

export const ContentBlock = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.mainContent}>
        {children}
      </div>
    </div>
  );
};

export const ContentBlockCentered = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.mainContent}>
        <div className={classes.mainCentered}>
          {children}
        </div>
      </div>
    </div>
  );
};
