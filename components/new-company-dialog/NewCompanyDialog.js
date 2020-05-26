import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import CompanyForm from '../forms/Company';
import useStyles from './NewCompanyDialog.style';

export default function NewCompanyDialog(props) {
  const classes = useStyles();

  return (
    <>
      <div>
        <DialogTitle>New Company</DialogTitle>
        <IconButton
          className={classes.closeButton}
          onClick={() => {
            props.onClose();
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>

      <DialogContent>
        <CompanyForm onClose={props.onClose}/>
      </DialogContent>
    </>
  );
};

