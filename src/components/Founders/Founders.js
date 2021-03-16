import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FounderForm from '../../containers/FounderForm/FounderForm';
import Aux from '../../hoc/Auxilary/Auxilary';

export default function Founders(props) {
    const [open, setOpen] = React.useState({open:false, render: ""});
    const handleOpen = () => {
        setOpen({...open, open: true});
    }

    const handleClose = () => {
        setOpen({...open, open: false});
    }
    return (
        <Aux>
            <div style={{padding:"1rem", border:"1px solid #eeeeee",position:"relative"}}>
                <Typography variant="h6">Founders</Typography>
                <div>
                    {props.data !== null && props.data.length > 0 ? 
                        props.data.map((founder,index) => {
                            return <span key={index} style={{padding:'1.5rem', fontWeight:'400',display:'inline-block'}}>{founder.name}: <span style={{color:"#797979",fontWeight:'300'}}>{founder.title}</span></span>
                        }) : "No founders listed"}
                        <Button 
                            variant="contained" 
                            style={{position:"absolute",right:"-5px",bottom:"-5px"}}
                            onClick={handleOpen}>
                            Add a Founder
                        </Button>
                </div>
            </div>
            <FounderForm
                open={open}
                setOpen={props.setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
                id={props.id}
            />
        </Aux>
    );
}