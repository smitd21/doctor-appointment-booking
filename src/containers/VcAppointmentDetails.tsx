import React, { useState, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PrimaryButton from '../components/PrimaryButton';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import { useStateMachine } from 'little-state-machine';
import { updateAction1 } from '../../store/yourDetailsAction';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    '& .MuiButtonBase-root': {
      marginTop: theme.spacing(2),
    },
    '& .MuiFormLabel-root': {
      color: '#341F65',
      fontSize: '18px',
      fontWeight: '600',
    },
  },
  label: {
    color: '#341F65',
    fontWeight: '600',
    margin: '20px auto',
    width: '100%',
  },
  selectLabel: {
    color: '#341F65',
    fontWeight: '600',
    marginTop: '12px',
    width: '100%',
  },
  input: {
    width: '100%',
    borderRadius: '4px',
  },
  textLine: {
    width: '276px',
  },
}));

interface IFormInputs {
  consultType: { value: string };
  lastVisit: String;
  surgeryDate: String;
  appointment: { value: string };
  appointmentDates: Value;
}

const options = [
  {
    value: 'First Consultation',
    label: 'First Consultation',
  },
  {
    value: 'Follow Up Consultation',
    label: 'Follow Up Consultation',
  },
  {
    value: 'Surgical Follow Up',
    label: 'Surgical Follow Up',
  },
] as const;

const options1 = [
  {
    value: 'Zoom',
    label: 'Zoom',
  },
  {
    value: 'Google Meet',
    label: 'Google Meet',
  },
  {
    value: 'Whats App',
    label: 'Whats App',
  },
  {
    value: 'Other',
    label: 'Other',
  },
] as const;

export default function VcAppointment() {
  const classes = useStyles();
  // const onSubmit = (data: IFormInput) => {
  //   alert(JSON.stringify(data));
  // };
  const { state, actions } = useStateMachine({
    updateAction1,
  });
  const [selectedDate, handleDateChange] = useState(new Date());
  const { handleSubmit, control, watch, setValue } = useForm<IFormInputs>({
    defaultValues: state.yourDetails1,
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    console.log(JSON.stringify(data));
    actions.updateAction1({
      yourDetails1: data,
    });
  };
  const consultType = watch('consultType');
  const setLastVisit = () => {
    if (consultType === 'Follow Up Consultation') {
      return false;
    } else {
      return true;
    }
  };
  const setSurgery = () => {
    if (consultType == 'Surgical Follow Up') {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div>
      <form
        className={classes.root}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} md={4} sm={4}>
            <Grid container alignItems="flex-end">
              <label className={classes.selectLabel}>Consult Type</label>
              <Controller
                name="consultType"
                control={control}
                rules={{ required: 'Enter Consultation Type' }}
                render={({ field: { onChange, value, name, ref } }) => (
                  <Select
                    className={classes.input}
                    labelId="consultType"
                    id="consultType"
                    inputRef={ref}
                    onChange={(e) =>
                      setValue('consultType', e.target.value, true)
                    }
                    displayEmpty
                  >
                    {options.map((option) => (
                      <MenuItem key={option.label} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} md={4} sm={4}>
            <Grid container alignItems="flex-end">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  name="lastVisit"
                  control={control}
                  render={({ field: { ref, ...rest } }) => (
                    <DatePicker
                      disableFuture
                      openTo="month"
                      format="dd/MM/yyyy"
                      label="Last Visit Date"
                      disabled={setLastVisit()}
                      views={['year', 'month', 'date']}
                      value={selectedDate}
                      onChange={handleDateChange}
                      {...rest}
                    />
                  )}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} md={4} sm={4}>
            <Grid container alignItems="flex-end">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  name="surgeryDate"
                  control={control}
                  render={({ field: { ref, ...rest } }) => (
                    <DatePicker
                      disableFuture
                      disabled={setSurgery()}
                      openTo="month"
                      format="dd/MM/yyyy"
                      label="Surgery Date"
                      views={['year', 'month', 'date']}
                      value={selectedDate}
                      onChange={handleDateChange}
                      {...rest}
                    />
                  )}
                />
              </MuiPickersUtilsProvider>
            </Grid>
          </Grid>
        </Grid>
        <label className={classes.selectLabel}>
          Preferred Video Call Platform
        </label>
        <Controller
          name="appointment"
          control={control}
          rules={{ required: 'Enter Preferred Video Call Platform' }}
          render={({ field: { onChange, value, name, ref } }) => (
            <Select
              className={classes.input}
              labelId="appointment"
              id="appointment"
              inputRef={ref}
              onChange={(e) => setValue('appointment', e.target.value, true)}
              displayEmpty
            >
              {options1.map((option) => (
                <MenuItem key={option.label} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <label className={classes.label}>
            Select 2 preferred dates for your appointment
          </label>
          <Controller
            control={control}
            name="appointmentDates"
            render={({ field }) => (
              <Calendar
                value={Array.isArray(field.value) ? field.value : []}
                colorPrimary="#341F65"
                minimumDate={utils().getToday()}
                onChange={(value) => field.onChange(value)}
                shouldHighlightWeekends
              />
            )}
          />
        </Box>
        <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
          <PrimaryButton>Next</PrimaryButton>
        </Box>
      </form>
    </div>
  );
}
