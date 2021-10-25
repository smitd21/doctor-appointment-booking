import Image from 'next/image';
import Box from '@material-ui/core/Box';
import {
  createStyles,
  withStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { deepPurple } from '@material-ui/core/colors';
import { useRouter } from 'next/router';
import PrimaryButton from '../components/PrimaryButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: '100vh',
    },
    image: {
      borderRadius: '50%',
    },
    textBox: {
      backgroundColor: '#f7f7f7',
      margin: '15px 0',
      maxWidth: '100%',
    },
    margin: {
      margin: '20px 10px',
    },
  })
);
const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: '#341F65',
    '&:hover': {
      backgroundColor: deepPurple[700],
    },
  },
}))(Button);

export default function Main() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box className={classes.box}>
      <Box>
        <Image
          className={classes.image}
          src="https://res.cloudinary.com/healync/image/upload/v1623998841/nene_image_tbthhu.jpg"
          width="164"
          height="164"
        />
      </Box>

      <Box className={classes.textBox}>
        <h2>Dr. Knowledgeable Guy, M.D</h2>
        <p>Orthopedist</p>
        <h5>Lilavati Hospital, Fortis Hospital, Apollo Hospital</h5>
        <h5>
          Specializes in : Neck Pain, Back Pain, Spinal cord injuries,
          Rehabilitation and 5 more
        </h5>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginLeft="20px"
      >
        <PrimaryButton
          onClick={() => router.push('/vcAppointment')}
          className={classes.margin}
        >
          Video call Appointment
        </PrimaryButton>
        <PrimaryButton
          onClick={() => router.push('/hospitalAppointment')}
          className={classes.margin}
        >
          Hospital / Clinic Appointment
        </PrimaryButton>
      </Box>
    </Box>
  );
}
