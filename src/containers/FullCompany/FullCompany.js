import React, {useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Founders from '../../components/Founders/Founders';
import Aux from '../../hoc/Auxilary/Auxilary';
import CompanyForm from '../CompanyForm/CompanyForm';

const useStyles = makeStyles((theme) => ({
    closeButton: {
        position: 'absolute',
        right: theme.spacing(.5),
        top: theme.spacing(.5)
    },
    appBar: {
        position: 'relative'
    },
    companyContainer: {
        padding: '1rem 20rem',
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

export default function FullCompany(props) {
    //state component for companyform
    const [formOpen, setForm] = React.useState({open:false, render: "", data: null});

    const handleEdit = () => {
        setForm({...formOpen, open: true, data: props.data})
    }

    const handleDelete = () => {
        const id = props.data.id
        fetch('http://localhost:3004/companies/'+id, {
            method:'delete'
        });
        window.location.reload(true);

    }

    const formCloseHandler = () => {
          setForm({...formOpen, open: false, data: null});
      }
  
    const classes = useStyles();
    return (
        <Aux>
        <Dialog fullScreen open={props.open.open} onClose={props.handleClose}>
            <Slide direction="up" in={props.open.open} mountOnEnter unmountOnExit>
                <div>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h5" style={{margin:'auto'}} className={classes.title}>
                                {props.data.name}
                            </Typography><IconButton aria-label="close" color="inherit" className={classes.closeButton} onClick={props.handleClose}>
                                    <CloseIcon />
                                </IconButton>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.companyContainer}>
                        <Grid container spacing={2}>
                            <Grid item md={12} style={{textAlign:"center"}}>
                                <Typography variant="h6" className={classes.companyLocation} color="textSecondary">
                                    <span style={{padding: '1.5rem'}}>{props.data.date_founded}</span>
                                    <span style={{padding: '1.5rem'}}>{props.data.city}, {props.data.state}</span>
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                {props.data.description}
                            </Grid>
                            <Grid item md={12} style={{textAlign: "right", marginBottom: "2rem"}}>
                                <Button className={classes.button} onClick={handleEdit} variant="outlined">Edit</Button> 
                                <Button className={classes.button} onClick={handleDelete}>Delete</Button>
                            </Grid>
                        </Grid>
                        {<Founders data={props.open.founders} setOpen={props.setOpen} id={props.data.id} />}
                    </div>
                </div>
            </Slide>
        </Dialog>
        <CompanyForm
            open={formOpen}
            handleClose={formCloseHandler}
        />
        </Aux>
    )
}