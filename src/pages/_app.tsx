import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import { StateMachineProvider, createStore } from 'little-state-machine';

createStore({
  yourDetails: {
    salutation: { value: '' },
    firstName: '',
    lastName: '',
    gender: { value: '' },
    birthDate: new Date(),
    age: 0,
    location: { value: '' },
    phoneNumber: 0,
    checkPhone: false,
    whatsappNumber: 0,
    // files: [],
  },
  yourDetails1: {
    consultType: { value: '' },
    lastVisit: [],
    surgeryDate: [],
    appointment: { value: '' },
    appointmentDates: [],
  },
});

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Book Appointment</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <StateMachineProvider>
          <Component {...pageProps} />
        </StateMachineProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
