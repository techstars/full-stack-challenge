import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles((theme) => ({
    companyContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    companyBox: {
        display:'flex',
        margin: theme.spacing(3),
        padding: theme.spacing(3),
        width: '75%'
    },
    addCompany: {
        position: 'fixed',
        right: theme.spacing(3),
        bottom: theme.spacing(3)
    },
    modal: {
        margin: 'auto',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(.5),
        top: theme.spacing(.5)
    }
}));

export default function CompanyForm(props) {
    const classes = useStyles();

    const defaultState = {
        id: null,
        name: null,
        city: null,
        state: null,
        date_founded: null,
        description: null
    }
    let [formValues, setFormValue] = React.useState(defaultState);
    let [rendered, setRender] = React.useState(false);

    const gridContainer = {
        container: true,
        spacing: 2
    }

    const gridItem = {
        item: true,
        xs: true,
    }

    const defaultTextField = {
        variant: "outlined",
        fullWidth: true,
        InputLabelProps: {
            shrink: true,
          },
    }

    function handleClick() {
        //fix date format
        if (formValues.city !== null 
            || formValues.state !== null 
            || formValues.description !== null 
            || formValues.name !== null ) {
            if (formData === null) {
                fetch('http://localhost:3004/companies', {
                    method:'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({put: formValues}),
                })
                .then(response=>response.json())
                .then(response=>{
                    window.location.reload(true);
                });
            } else {
                fetch('http://localhost:3004/companies/'+formValues.id, {
                    method:'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({post: formValues}),
                })
                .then(response=>response.json())
                .then(response=>{
                    window.location.reload(true);
                });
            }
        } 
    }
    let formData = props.open.data;

    if (!rendered && formData !== null) {
        setFormValue(formData);
        setRender(true);
    }

    return (
        <Dialog className={classes.modal}
            open={props.open.open}
            onClose={props.handleClose}
            BackdropComponent={Backdrop}
            aria-labelledby="dialogTitle"
            fullWidth={true}
            maxWidth={'md'}
        >
            <AppBar position="relative" className={classes.appBar}>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {formData === null ? "Create a New Company" : "Edit Company"}
                </Typography>
                {props.handleClose ? (
                    <IconButton aria-label="close" color="inherit" className={classes.closeButton} onClick={props.handleClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
                </Toolbar>
            </AppBar>
            <div style={{padding:"2rem"}}>
                <Grid {...gridContainer}>
                    <Grid {...gridItem} md={12}>
                        <TextField
                            {...defaultTextField}
                            label="Company Name"
                            id="name"
                            disabled={false}
                            value={formValues.name ? formValues.name : ""}
                            onChange = { e => setFormValue({...formValues, name: e.target.value})}
                            required
                        />
                    </Grid>
                    <Grid {...gridItem} md={4}>
                        <TextField 
                            {...defaultTextField} 
                            label="City" 
                            id="city" 
                            value={formValues.city ? formValues.city : ""}
                            onChange = { e => setFormValue({...formValues, city: e.target.value})}
                            required
                        />
                    </Grid>
                    <Grid {...gridItem} md={4}>
                        <TextField 
                            {...defaultTextField} 
                            label="State" 
                            id="state"
                            value={formValues.state ? formValues.state : ""}
                            onChange = { e => setFormValue({...formValues, state: e.target.value})}
                            required
                        />
                    </Grid>
                    <Grid {...gridItem} md={4}>
                        <TextField 
                            {...defaultTextField} 
                            label="Founded Date" 
                            id="date"
                            type="date"
                            value={formValues.date_founded ? formValues.date_founded : ""}
                            onChange = { e => setFormValue({...formValues, date_founded: e.target.value})}
                        />
                    </Grid>
                    <Grid {...gridItem} md={12}>
                        <TextField 
                            {...defaultTextField} 
                            label="Description" 
                            id="description" 
                            multiline
                            rows={4}
                            value={formValues.description ? formValues.description : ""}
                            onChange = { e => setFormValue({...formValues, description: e.target.value})}
                            required
                        />
                    </Grid>
                    <Grid {...gridItem} md={12} style={{textAlign:"right"}}>
                        <Button variant="contained" onClick = { e => handleClick()}>Save</Button>
                    </Grid>
                </Grid>        
            </div>
        </Dialog>
    )
}