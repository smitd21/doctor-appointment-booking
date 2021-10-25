import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';
import { withStyles, makeStyles, Theme } from '@material-ui/core/styles';

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: '#fff',
    '&:hover': {
      backgroundColor: deepPurple[700],
    },
  },
}))(Button);
const useStyles = makeStyles((theme) => ({
  root: {
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
    <ColorButton
      className={classes.root}
      type="submit"
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </ColorButton>
  );
}
