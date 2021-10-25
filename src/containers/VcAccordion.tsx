import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@material-ui/core/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import PatientDetailsForm from './PatientDetailsForm';
import VcAppointment from './VcAppointmentDetails';
import { MoreInfo } from './DocumentUpload';
import PrimaryButton from '../components/PrimaryButton';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: '#f7f7f7',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#341F65',
  color: '#fff',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-expandIcon': {
    backgroundColor: '#ED245A',
    margin: theme.spacing(1),
  },
  '& .MuiAccordionSummary-expandIcon.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiIconButton-root': {
    color: '#fff',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  //backgroundColor: '#f7f7f7',
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('lg')]: {
    padding: '0 130px',
    paddingTop: '10px',
  },
}));
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: '1168px',
      margin: '50px auto',
    },
  })
);
export default function Details() {
  const router = useRouter();
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Patient Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PatientDetailsForm />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Appointment Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <VcAppointment />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Document Upload (Optional)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MoreInfo />
        </AccordionDetails>
      </Accordion>
      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
        marginTop="40px"
      >
        <PrimaryButton
          onClick={() => {
            router.push('/confirmation');
          }}
        >
          Next
        </PrimaryButton>
      </Box>
    </div>
  );
}
