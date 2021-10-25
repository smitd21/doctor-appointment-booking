import Image from 'next/image';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Box from '@material-ui/core/Box';
import {
  createStyles,
  withStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
      marginTop: theme.spacing(9),
      textAlign: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: '#f7f7f7',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    image: {
      borderRadius: '50%',
    },
  })
);

export default function Doctor() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ gridColumnEnd: 'span 4' }}>
        <Image
          className={classes.image}
          src="https://res.cloudinary.com/healync/image/upload/v1623998841/nene_image_tbthhu.jpg"
          width="164"
          height="164"
        />
      </div>
      <div style={{ gridColumnEnd: 'span 4' }}>
        <h2>Dr. Abhay Nene, M.D</h2>
        <p>Orthopedist</p>
        <h5>Lilavati Hospital, Fortis Hospital, Apollo Hospital</h5>
        <h5>
          Specializes in : Neck Pain, Back Pain, Spinal cord injuries,
          Rehabilitation and 5 more
        </h5>
      </div>
      <div style={{ gridColumnEnd: 'span 4' }}>
        <Box display="flex">
          <p>+91-9123456789</p>
          <CallIcon style={{ marginTop: 10, marginLeft: 43 }} />
        </Box>
        <Box display="flex">
          <p>doctor@domain.com</p>
          <MailIcon style={{ marginTop: 10, marginLeft: 20 }} />
        </Box>
        <Box display="flex">
          <p>+91-9123456789</p>
          <WhatsAppIcon style={{ marginTop: 10, marginLeft: 43 }} />
        </Box>
      </div>
    </div>
  );
}
