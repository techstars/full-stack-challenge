import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';
import React from 'react';

import useStyles from './AddButton.style';

export default function AddButton(props) {
  const { className, children, ...rest } = props;
  const classes = useStyles();

  return (
    <Fab
      variant="extended"
      color="primary"
      className={clsx(classes.fab, className)}
      {...rest}
    >
      <AddIcon className={classes.fabIcon} />
      {children}
    </Fab>
  );
};
