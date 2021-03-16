import React, { useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Company from '../../components/Company/Company';
import Aux from '../Auxilary/Auxilary';
import CompanyForm from '../../containers/CompanyForm/CompanyForm';


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
        padding: theme.spacing(3)
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

const RenderLayout = () => {
    const companyState = {list: [],rendered: false}
    const [companies, setCompanies] = React.useState(companyState);
    const [open, setOpen] = React.useState({open:false, render: false, data:null});
    const classes = useStyles();

    const handleOpen = () => {
        setOpen({...open, open: true});
    }

    const handleClose = () => {
        setOpen({...open, open: false, data: null});
    }


    useEffect(() => {
        if (companies.rendered === false) {
            fetch('http://localhost:3004/companies', {
                    method:'GET'
                })
                .then(response=>response.json())
                .then(response=>{
                    if (response.length > 0) {
                        let updateCompanies = {...companies};
                        // replace mysql default with null value for dates (prevent datepicker confusion)
                        response.forEach((props) => {
                            if (props.date_founded === "0000-00-00" || props.date_founded === null) {
                                props.date_founded = null;
                            } else {
                                console.log(props.date_founded);
                                const date_founded = props.date_founded;
                                let date_founded_converted = date_founded.split('T',1);
                                props.date_founded = date_founded_converted[0];
                            }
                        })
                        updateCompanies.list = response;
                        updateCompanies.rendered = true;
                        setCompanies(updateCompanies);
                    }
                });
        }
    })

    return (
        <Aux>
            <Box className={classes.companyContainer}>
                {
                    companies.list.length > 0 ? 
                        companies.list.map((company, index) => {
                            return <Company key={index} data={company} />
                        })
                    : null
                }
                <Fab 
                    color="primary" 
                    className={classes.addCompany} 
                    variant="extended" 
                    onClick={handleOpen}
                    aria-label="add">
                    Add Company
                </Fab>
            </Box>
            <CompanyForm 
                open={open}
                setOpen={setOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
            />
        </Aux>
    );
}

export default RenderLayout;