import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import AddButton from '../buttons/AddButton';
import useStyles from './CompaniesList.style';

export default function CompaniesList(props) {
  const classes = useStyles();
  const companiesData = props.companiesData;
  const onCompanyClick = props.onCompanyClick;
  const setNewCompanyDialogOpen = props.setNewCompanyDialogOpen;
  
  return (
    <div>
      { !companiesData ?
        <Typography style={{textAlign: 'center'}} variant="body1" gutterBottom>Loading Companies List...</Typography>
        : (
          <div>
            <List dense style={{marginBottom: 15}}>
              {companiesData.length ? companiesData.map((company) => {
                const companyPrimaryText = (
                  <div style={{display: 'flex'}}>
                    <Typography variant="h4">{company.name}</Typography>
                    <Typography className={classes.location} variant="body2">{company.city}, {company.state}</Typography>
                  </div>
                );
                const companyDescription = company.description.length > 100 ? company.description.substring(0,97) + '...' : company.description;
                return (
                  <ListItem
                    button
                    key={company.id}
                    onClick={() => {
                      onCompanyClick(company);
                    }}
                  >
                    <ListItemText
                      primary={companyPrimaryText}
                      secondary={companyDescription}
                    />
                  </ListItem>
                );
              }) : (
                <ListItem>
                  <ListItemText
                    primary='No Companies in Directory'
                  />
                </ListItem>
              )}
            </List>
            <AddButton
              onClick={() => {
                setNewCompanyDialogOpen(true);
              }}
              className={classes.addButton}
            >
              Add Company
            </AddButton>
          </div>
        )
      }
    </div>
  );
}
