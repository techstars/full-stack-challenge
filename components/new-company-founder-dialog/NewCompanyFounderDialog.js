import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import CompanyFounderForm from '../forms/CompanyFounder';
import useStyles from './NewCompanyFounderDialog.style';

// TODO: Update name to reflect New/Edit capabilities
export default function NewCompanyFounderDialog(props) {
  const classes = useStyles();

  return (
    <>
      <div>
        <DialogTitle>New Founder</DialogTitle>
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
        <CompanyFounderForm onClose={props.onClose} companyId={props.companyId}/>
      </DialogContent>
    </>
  );
};

