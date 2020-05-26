import Typography from '@material-ui/core/Typography';
import { ContentBlockCentered } from '../layouts/ContentBlocks';

export default function Index() {
  return (
    <div className="container">
      <ContentBlockCentered>
        <Typography style={{textAlign: 'center'}} variant="h2" component="h1" gutterBottom>Company Directory</Typography>
      </ContentBlockCentered>
    </div>
  )
}
