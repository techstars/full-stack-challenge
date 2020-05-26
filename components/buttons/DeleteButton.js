import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import clsx from 'clsx';
import React from 'react';

import useStyles from './DeleteButton.style';

// TODO: Refactor AddButton, EditButton, DeleteButton into one component
export default function DeleteButton(props) {
  const { className, children, ...rest } = props;
  const classes = useStyles();

  return (
    <Fab
      variant="extended"
      color="primary"
      className={clsx(classes.fab, className)}
      {...rest}
    >
      <DeleteIcon className={classes.fabIcon} />
      {children}
    </Fab>
  );
};
