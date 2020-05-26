import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => createStyles({
  fab: {
    padding: `0 ${theme.spacing(3)}px 0 ${theme.spacing(2)}px !important`,
    textTransform: 'none',
    backgroundColor: theme.palette.tertiary.main,
    '&:hover': {
      backgroundColor: '#38804d'
    },
  },
  fabIcon: {
    marginRight: theme.spacing(1),
    width: '15px !important',
    height: '15px !important',
  }
}));