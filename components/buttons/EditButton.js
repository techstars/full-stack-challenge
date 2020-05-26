import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import React from 'react';

import useStyles from './EditButton.style';

// TODO: Refactor AddButton, EditButton, DeleteButton into one component
export default function EditButton(props) {
  const { className, children, ...rest } = props;
  const classes = useStyles();

  return (
    <Fab
      variant="extended"
      color="primary"
      className={clsx(classes.fab, className)}
      {...rest}
    >
      <EditIcon className={classes.fabIcon} />
      {children}
    </Fab>
  );
};
