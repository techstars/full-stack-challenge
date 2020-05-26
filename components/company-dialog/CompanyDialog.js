import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
import NewCompanyDialog from '../new-company-dialog/NewCompanyDialog';
import EditButton from '../buttons/EditButton';
import useStyles from './CompanyDialog.style';

export default function CompanyDialog(props) {
  const [newCompanyDialogOpen, setNewCompanyDialogOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <div>
        <Dialog
          onClose={() => setNewCompanyDialogOpen(false)}
          open={newCompanyDialogOpen}
          fullWidth={true}
          maxWidth='sm'
        >
          <NewCompanyDialog
            initialValues={props.companyData}
            onClose={(reloadData) => {
              if (reloadData) {
                props.mutate();
              }
              setNewCompanyDialogOpen(false);
              props.onClose();
            }}
            edit
          />
        </Dialog>
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
        <EditButton
          onClick={() => {
            setNewCompanyDialogOpen(true)
          }}
          className={classes.editButton}
        >
          Edit Company
        </EditButton>
      </DialogContent>
    </>
  );
};

