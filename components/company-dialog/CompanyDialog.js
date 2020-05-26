import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import useStyles from './CompanyDialog.style';

export default function CompanyDialog(props) {
  const classes = useStyles();

  return (
    <>
      <div>
        <DialogTitle>{props.companyData.name}</DialogTitle>
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
        { props.companyData.date_founded ? 
          <DialogContentText>
            Founded: {props.companyData.date_founded}
          </DialogContentText>
          : null
        }
        <DialogContentText>
          Location: {props.companyData.city}, {props.companyData.state}
        </DialogContentText>
        <DialogContentText>
          {props.companyData.description}
        </DialogContentText>
      </DialogContent>
    </>
  );
};

