import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.primary.main
  },
  editButton: {
    marginBottom: 15,
    marginTop: 10,
    marginRight: 10,
  },
}));
