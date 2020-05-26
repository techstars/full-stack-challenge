import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import AddButton from '../buttons/AddButton';
import useStyles from './CompanyFoundersList.style';

export default function CompanyFoundersList(props) {
  const classes = useStyles();
  const companyFoundersData = props.companyFoundersData;
  // const onCompanyClick = props.onCompanyClick;
  // const setNewCompanyDialogOpen = props.setNewCompanyDialogOpen;
  
  return (
    <div>
      { !companyFoundersData ?
        null
        : (
          <div>
            <Typography variant="h5" gutterBottom>Founders</Typography>
            <List dense style={{marginBottom: 15}}>
              {companyFoundersData.length ? companyFoundersData.map((companyFounder) => {
                // const companyPrimaryText = (
                //   <div style={{display: 'flex'}}>
                //     <Typography variant="h4">{company.name}</Typography>
                //     <Typography className={classes.location} variant="body2">{company.city}, {company.state}</Typography>
                //   </div>
                // );
                // const companyDescription = company.description.length > 100 ? company.description.substring(0,97) + '...' : company.description;
                return (
                  <ListItem
                    button
                    key={companyFounder.id}
                  >
                    <ListItemText
                      primary={companyFounder.name}
                      secondary={companyFounder.title}
                    />
                  </ListItem>
                );
              }) : (
                <ListItem>
                  <ListItemText
                    primary='No Founders Added in Directory'
                  />
                </ListItem>
              )}
            </List>
            {/* <AddButton
              onClick={() => {
                setNewCompanyDialogOpen(true);
              }}
              className={classes.addButton}
            >
              Add Company
            </AddButton> */}
          </div>
        )
      }
    </div>
  );
}
