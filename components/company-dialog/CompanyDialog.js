import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';
import useSWR from 'swr';
import NewCompanyDialog from '../new-company-dialog/NewCompanyDialog';
import NewCompanyFounderDialog from '../new-company-founder-dialog/NewCompanyFounderDialog';
import AddButton from '../buttons/AddButton';
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';
import CompanyFoundersList from '../company-founders-list/CompanyFoundersList';
import fetcher from '../../utils/fetcher';
import useStyles from './CompanyDialog.style';

export default function CompanyDialog(props) {
  const [newCompanyDialogOpen, setNewCompanyDialogOpen] = useState(false);
  const [newCompanyFounderDialogOpen, setNewCompanyFounderDialogOpen] = useState(false);

  const classes = useStyles();
  const { data, mutate } = useSWR(`/api/companyFounders/${props.companyData.id}`, fetcher);

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
                props.onClose();
              }
              setNewCompanyDialogOpen(false);
            }}
            edit
          />
        </Dialog>
        <Dialog
          onClose={() => setNewCompanyFounderDialogOpen(false)}
          open={newCompanyFounderDialogOpen}
          fullWidth={true}
          maxWidth='sm'
        >
          <NewCompanyFounderDialog
            companyId={props.companyData.id}
            onClose={(reloadData) => {
              if (reloadData) {
                mutate();
              }
              setNewCompanyFounderDialogOpen(false);
            }}
          />
        </Dialog>
        <DialogTitle disableTypography>
          <Typography variant="h3" gutterBottom>{props.companyData.name}</Typography>
        </DialogTitle>
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
        <br />
        <DialogContentText>
          {props.companyData.description}
        </DialogContentText>
        <br />
        <CompanyFoundersList companyFoundersData={data} />
        <EditButton
          onClick={() => {
            setNewCompanyDialogOpen(true)
          }}
          className={classes.editButton}
        >
          Edit Company
        </EditButton>
        <DeleteButton
          onClick={async () => {
            await fetch(`/api/companies/${props.companyData.id}`, {
              method: 'DELETE'
            });
            props.mutate();
            props.onClose()
          }}
          className={classes.editButton}
        >
          Delete Company
        </DeleteButton>
        <AddButton
          onClick={() => {
            setNewCompanyFounderDialogOpen(true);
          }}
          className={classes.addButton}
        >
          Add Founder
        </AddButton>
      </DialogContent>
    </>
  );
};

