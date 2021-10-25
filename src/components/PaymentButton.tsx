import Button from '@material-ui/core/Button';
import { withStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  },
}));

export default function PrimaryButton({ children, ...props }) {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      variant="contained"
      color="secondary"
      type="submit"
      {...props}
    >
      {children}
    </Button>
  );
}
