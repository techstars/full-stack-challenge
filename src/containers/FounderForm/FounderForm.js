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
    modal: {
        margin: 'auto',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(.5),
        top: theme.spacing(.5)
    }
}));


export default function FounderForm(props) {
    const classes = useStyles();
    const defaultState = {
        name: null,
        title: null,
        company_id: props.id,
    }
    let [formValues, setFormValue] = React.useState(defaultState);

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

    const fetchURL = process.env.FETCH_URL || 'http://localhost:3004';

    function handleClick() {
        if (formValues.name !== null || formValues.title !== null) {
            fetch(fetchURL + '/founders', {
                method:'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({put: formValues}),
            })
            .then(response=>response.json())
            .then(response=>{
                setFormValue(defaultState);
                    fetch(fetchURL + '/founders/' + props.id, {
                        method:'GET'
                    })
                    .then(response=>response.json())
                    .then(response=>{
                        props.setOpen({...props.open, founders:response});
                    });
            
                props.handleClose();
            });
        }
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
                    Add a Founder
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
                    <Grid {...gridItem} md={8}>
                        <TextField
                            {...defaultTextField}
                            label="Full Name"
                            id="name"
                            onChange = { e => setFormValue({...formValues, name: e.target.value})}
                            required
                        />
                    </Grid>
                    <Grid {...gridItem} md={4}>
                        <TextField 
                            {...defaultTextField} 
                            label="Title" 
                            id="title" 
                            onChange = { e => setFormValue({...formValues, title: e.target.value})}
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