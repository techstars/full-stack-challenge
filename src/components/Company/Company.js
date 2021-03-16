import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Aux from '../../hoc/Auxilary/Auxilary';
import FullCompany from '../../containers/FullCompany/FullCompany';

const useStyles = makeStyles((theme) => ({
    companyContainer: {
        display:'flex',
        margin: theme.spacing(3),
        padding: theme.spacing(3),
        width: '50%'
    },
    companyName: {
        borderRight: "2px solid #eee",
    },
    companyLocation: {
    },
    companyGrid: {
        alignItems: "center"
    }
}));
  
const Company = (props) => {
    const classes = useStyles();
    const data = props.data;
    const [open, setOpen] = React.useState({open: false, render: false, founders: null});

    const fetchURL = process.env.FETCH_URL || 'http://localhost:3004';

    const handleOpen = () => {
      if (open.founders === null) {
        fetch(fetchURL + '/founders/' + props.data.id, {
            method:'GET'
        })
        .then(response=>response.json())
        .then(response=>{
            setOpen({...open, founders:response, open:true});
        });
    }

    }

    const handleClose = () => {
        setOpen({...open, open: false, founders:null});
    }
    return (
        <Aux>
          <Card color="primary" className={classes.companyContainer}>
              <Grid container className={classes.companyGrid} spacing={2}>
                  <Grid item md={6}>
                      <Typography variant ="h5" className={classes.companyName}>{data.name}</Typography>
                  </Grid>
                  <Grid item md={3}>
                      <Typography variant="h6" className={classes.companyLocation} color="textSecondary">{data.city}, {data.state}</Typography>
                  </Grid>
                  <Grid item md={3} style={{textAlign:"right"}}>
                      <Button size="small" onClick={handleOpen}>More...</Button>
                  </Grid>
                  <Grid item md={12}>
                      {data.description.length > 50 ? data.description.substring(0,50) + "..." : data.description}
                  </Grid>
                  <Divider variant="middle" />
                  <Grid item md={12}>
                  </Grid>
              </Grid>
          </Card>
          <FullCompany 
            open={open}
            data={props.data}
            handleClose={handleClose}
            setOpen={setOpen}
          />
      </Aux>
    )
}

export default Company;