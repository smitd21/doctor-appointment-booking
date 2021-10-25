import React, { Fragment, useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import dynamic from 'next/dynamic';
import { MuiPhoneNumberProps } from 'material-ui-phone-number';
const MuiPhoneNumber = dynamic<MuiPhoneNumberProps>(
  import('material-ui-phone-number'),
  { ssr: false }
);
import PrimaryButton from '../components/PrimaryButton';
import { useStateMachine } from 'little-state-machine';
import { updateAction } from '../../store/yourDetailsAction';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    '& .MuiButtonBase-root': {
      marginTop: theme.spacing(2),
    },
    '& .MuiPhoneNumber-flagButton': {
      marginBottom: '15px',
    },
    '& .MuiFormLabel-root': {
      color: '#341F65',
      fontSize: '18px',
      fontWeight: '600',
    },
  },
  labelD: {
    color: '#341F65',
    fontWeight: '600',
    marginTop: '12px',
  },
  input: {
    width: '100%',
    borderRadius: '4px',
  },
  checkLabel: {
    marginTop: '21px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '28px',
    },
  },
  button: {
    marginLeft: 'auto',
  },
}));
interface IFormInputs {
  salutation: { value: string };
  firstName: String;
  lastName: String;
  gender: { value: string };
  birthDate: Date;
  age: Number;
  location: { value: string };
  phoneNumber: Number;
  checkPhone: boolean;
  whatsappNumber: Number;
}
const salutationOptions = [
  {
    value: 'Mr',
    label: 'Mr',
  },
  {
    value: 'Mrs',
    label: 'Mrs',
  },
  {
    value: 'Ms',
    label: 'Ms',
  },
] as const;
const genderOptions = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Others',
    label: 'Others',
  },
] as const;
const locationOptions = [
  {
    value: 'Mumbai',
    label: 'Mumbai',
  },
  {
    value: 'Kolkata',
    label: 'Kolkata',
  },
  {
    value: 'Chennai',
    label: 'Chennai',
  },
] as const;

export default function PatientDetailsForm() {
  const classes = useStyles();
  const { state, actions } = useStateMachine({
    updateAction,
  });
  const [selectedDate, handleDateChange] = useState(new Date());
  const { handleSubmit, control, watch, reset, setValue } =
    useForm<IFormInputs>({
      defaultValues: state.yourDetails,
    });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    actions.updateAction({
      yourDetails: data,
    });
  };
  console.log(state);
  // const onSubmit = (data: IFormInput) => {
  //   alert(JSON.stringify(data));
  // };
  const checkPhone = watch('checkPhone');
  // console.log(checkPhone);
  const currentYear = new Date().getFullYear();
  const birthDate = watch('birthDate');
  const getAge = () => {
    if (birthDate) return currentYear - birthDate.getFullYear();
  };
  // console.log(getAge());
  const age = watch('age');
  // console.log(age);

  return (
    <form
      className={classes.root}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4} md={4} sm={4}>
          <Grid container alignItems="flex-end">
            <label className={classes.labelD}>Salutation</label>
            <Controller
              name="salutation"
              control={control}
              rules={{ required: 'Salutation required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  defaultValue=""
                  className={classes.input}
                  labelId="salutation"
                  id="salutation"
                >
                  {salutationOptions.map((option) => (
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
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: 'First name required',
                maxLength: {
                  value: 20,
                  message: 'Enter a valid first name, it exceeded max length',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'First Name should contain only alphabets',
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="First Name"
                  id="input-with-icon-textfield"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  value={value || ''}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} md={4} sm={4}>
          <Grid container alignItems="flex-end">
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: 'Last name required',
                maxLength: {
                  value: 20,
                  message: 'Enter a valid last name, it exceeded max length',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Last Name should contain only alphabets',
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  id="input-with-icon-textfield"
                  label="Last Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  value={value || ''}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4} md={4} sm={4}>
          <Grid container alignItems="flex-end">
            <label className={classes.labelD}>Gender</label>
            <Controller
              name="gender"
              control={control}
              rules={{ required: 'Gender required' }}
              render={({ field }) => (
                <Select
                  {...field}
                  defaultValue=""
                  className={classes.input}
                  labelId="gender"
                  id="gender"
                >
                  {genderOptions.map((option) => (
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
                name="birthDate"
                control={control}
                rules={{
                  required: 'Date of Birth required',
                }}
                render={({ field: { ref, ...rest } }) => (
                  <DatePicker
                    disableFuture
                    openTo="year"
                    format="dd/MM/yyyy"
                    label="Date of Birth"
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
            <Controller
              name="age"
              control={control}
              rules={{
                pattern: {
                  value: /^[1-9]+$/,
                  message: 'This input is number only and greater than 0',
                },
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Age"
                  onChange={onChange}
                  value={getAge() || 0}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4} md={4} sm={4}>
          <Grid container alignItems="flex-end">
            <label className={classes.labelD}>Location</label>
            <Controller
              name="location"
              control={control}
              rules={{
                required: 'Enter Conultation Type',
                maxLength: {
                  value: 30,
                  message: 'Enter a valid location',
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: 'Location should contain only alphabets',
                },
              }}
              render={({ field }) => (
                <Select
                  {...field}
                  defaultValue=""
                  className={classes.input}
                  labelId="location"
                  id="location"
                >
                  {locationOptions.map((option) => (
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
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: 'Phone Number required',
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  id="input-with-icon-textfield"
                  disableAreaCodes={true}
                  disableDropdown={false}
                  label="Phone Number"
                  value={value || ''}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4} md={4} sm={4}>
          <Grid container alignItems="flex-end">
            <Controller
              name="whatsappNumber"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <MuiPhoneNumber
                  defaultCountry={'in'}
                  id="input-with-icon-textfield"
                  disableAreaCodes={true}
                  disableDropdown={false}
                  label="Whatsapp Number"
                  value={value || ''}
                  disabled={checkPhone}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
            <Box display="inline-flex">
              <Controller
                name="checkPhone"
                control={control}
                defaultValue={false}
                render={({ field }) => <Checkbox {...field} />}
              />
              <small className={classes.checkLabel}>
                Check here if above Phone Number is also the What's App Number
              </small>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
        marginTop="15px"
      >
        <PrimaryButton>Sign up</PrimaryButton>
      </Box>
    </form>
  );
}
