import Typography from '@material-ui/core/Typography';
import useSWR from 'swr';
import CompaniesList from '../components/companies-list/CompaniesList';
import Dialog from '@material-ui/core/Dialog';
import React, { useState } from 'react';
import NewCompanyDialog from '../components/new-company-dialog/NewCompanyDialog';
import { ContentBlockCentered } from '../layouts/ContentBlocks';
import fetcher from '../utils/fetcher';

export default function Index() {
  const [newCompanyDialogOpen, setNewCompanyDialogOpen] = useState(false);
  const { data } = useSWR('/api/companies', fetcher);

  const onCompanyClick = () => {
    console.log("Company Clicked!");
  }

  return (
    <div className="container">
      <ContentBlockCentered>
        <Dialog
          onClose={() => setNewCompanyDialogOpen(false)}
          open={newCompanyDialogOpen}
          fullWidth={true}
          maxWidth='sm'
        >
          <NewCompanyDialog onClose={() => setNewCompanyDialogOpen(false)}/>
        </Dialog>
        <Typography style={{textAlign: 'center'}} variant="h2" gutterBottom>Company Directory</Typography>
        { !data ?
          <Typography style={{textAlign: 'center'}} variant="body1" gutterBottom>Loading Companies...</Typography>
          : <CompaniesList companiesData={data} onCompanyClick={onCompanyClick} setNewCompanyDialogOpen={setNewCompanyDialogOpen}/>
        }
      </ContentBlockCentered>
    </div>
  );
}
