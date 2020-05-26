import Typography from '@material-ui/core/Typography';
import useSWR from 'swr';
import CompaniesList from '../components/companies-list/CompaniesList';
import { ContentBlockCentered } from '../layouts/ContentBlocks';
import fetcher from '../utils/fetcher';

export default function Index() {
  const { data } = useSWR('/api/companies', fetcher);

  const onCompanyClick = () => {
    console.log("Company Clicked!");
  }

  return (
    <div className="container">
      <ContentBlockCentered>
        <Typography style={{textAlign: 'center'}} variant="h2" gutterBottom>Company Directory</Typography>
        { !data ?
          <Typography style={{textAlign: 'center'}} variant="body1" gutterBottom>Loading Companies...</Typography>
          : <CompaniesList companiesData={data} onCompanyClick={onCompanyClick}/>
        }
      </ContentBlockCentered>
    </div>
  );
}
