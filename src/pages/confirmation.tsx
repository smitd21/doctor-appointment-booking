import React, { useState } from 'react';
import Header from '../components/Header';
import Doctor from '../components/Doctor';
import { useStateMachine } from 'little-state-machine';
import { updateAction } from '../../store/yourDetailsAction';
import { updateAction1 } from '../../store/yourDetailsAction';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import BackButton from '../components/BackButton';
import PaymentButton from '../components/PaymentButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import WcIcon from '@material-ui/icons/Wc';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '30px',
  },
  container: {
    maxWidth: '100%',
    margin: '50px auto',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px',
    [theme.breakpoints.down('sm')]: {
      padding: '50px',
    },
  },
  innerContainer: {
    backgroundColor: '#fff',
  },
  heading: {
    color: '#341f65',
  },
  layout: {
    padding: '30px',
    marginTop: '40px',
  },
  layout1: {
    padding: '0 50px',
    marginTop: '40px',
    marginBottom: '50px',
  },
  box1: {
    display: 'flex',
    textAlign: 'center',
    width: '200px',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      margin: '20px auto',
    },
  },
  box2: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
  },
  box3: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  label: {
    color: '#341F65',
    fontWeight: '800',
    marginBottom: '5px',
  },
  labelD: {
    margin: '0',
  },
}));

const Result = (props) => {
  const classes = useStyles();
  const { state } = useStateMachine(updateAction);
  const { state1 } = useStateMachine(updateAction1);
  console.log(state);
  // console.log(
  //   `${state.yourDetails1.appointmentDates[0].day} - ${state.yourDetails1.appointmentDates[0].month} - ${state.yourDetails1.appointmentDates[0].year}`
  // );
  const currentYear = new Date().getFullYear();
  const getAge = () => {
    if (state.yourDetails.birthDate)
      return currentYear - state.yourDetails.birthDate.getFullYear();
  };
  console.log(getAge());
  const router = useRouter();
  return (
    <div style={{ width: '100%' }}>
      <Header />
      <Doctor />
      <Container className={classes.container}>
        <div className={classes.innerContainer}>
          <h2 className={classes.heading}>Confirm your details</h2>
          <Grid container spacing={2} className={classes.layout}>
            <Grid item xs={12} lg={3} md={3} sm={6}>
              <Grid container alignItems="flex-end">
                <Box className={classes.box1}>
                  <PersonIcon />
                  <Box className={classes.box2}>
                    <label className={classes.label}>Patient Name</label>
                    <h4 className={classes.labelD}>
                      {state.yourDetails.salutation +
                        ` ` +
                        state.yourDetails.firstName +
                        ` ` +
                        state.yourDetails.lastName}
                    </h4>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6}>
              <Grid container alignItems="flex-end">
                <Box className={classes.box1}>
                  <CallIcon />
                  <Box className={classes.box2}>
                    <label className={classes.label}>Contact Number</label>
                    <h4 className={classes.labelD}>
                      {state.yourDetails.phoneNumber}
                    </h4>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6}>
              <Grid container alignItems="flex-end">
                <Box className={classes.box1}>
                  <WcIcon />
                  <Box className={classes.box2}>
                    <label className={classes.label}>Gender</label>
                    <h4 className={classes.labelD}>
                      {state.yourDetails.gender}
                    </h4>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6}>
              <Grid container alignItems="flex-end">
                <Box className={classes.box1}>
                  <PermContactCalendarIcon />
                  <Box className={classes.box2}>
                    <label className={classes.label}>Age</label>
                    <h4 className={classes.labelD}>{getAge()}</h4>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={2} className={classes.layout1}>
            <Grid item xs={12} lg={4} md={4} sm={6}>
              <Grid container alignItems="flex-end">
                <Box className={classes.box1}>
                  <EventIcon />
                  <Box className={classes.box2}>
                    <label className={classes.label}>Selected Dates</label>
                    <h4 className={classes.labelD}>
                      {`${state.yourDetails1.appointmentDates[0].day} - ${state.yourDetails1.appointmentDates[0].month} - ${state.yourDetails1.appointmentDates[0].year}`}
                    </h4>
                    <h4 className={classes.labelD}>
                      {`${state.yourDetails1.appointmentDates[1].day} - ${state.yourDetails1.appointmentDates[1].month} - ${state.yourDetails1.appointmentDates[1].year}`}
                    </h4>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4} md={4} sm={6}>
              <Grid container alignItems="flex-end">
                <Box className={classes.box1}>
                  <AccessTimeIcon />
                  <Box className={classes.box2}>
                    <label className={classes.label}>Consultancy Type</label>
                    <h4 className={classes.labelD}>
                      {state.yourDetails1.consultType}
                    </h4>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4} md={4} sm={6}>
              <Grid container alignItems="flex-end">
                <Box className={classes.box1}>
                  <LocationOnIcon />
                  <Box className={classes.box2}>
                    <label className={classes.label}>Location / Platform</label>
                    <h4 className={classes.labelD}>
                      {state.yourDetails1.appointment}
                    </h4>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Box className={classes.box3}>
            <BackButton onClick={() => router.push('/vcAppointment')}>
              Go back and edit
            </BackButton>
            <PaymentButton onClick={() => router.push('/payment')}>
              Confirm and pay
            </PaymentButton>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Result;
