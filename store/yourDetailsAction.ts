import { GlobalState } from 'react-hook-form';

export function updateAction(
  state: GlobalState,
  payload: {
    yourDetails: {
      salutation: { value: string };
      firstName: string;
      lastName: string;
      gender: { value: string };
      birthDate: Date;
      age: Number;
      location: { value: string };
      phoneNumber: Number;
      checkPhone: boolean;
      whatsappNumber: Number;
      // files:File[];
    };
  }
): GlobalState {
  return {
    ...state,
    ...payload,
  };
}
export function updateAction1(
  state1: GlobalState,
  payload1: {
    yourDetails1: {
      consultType: { value: string };
      lastVisit: [];
      surgeryDate: [];
      appointment: { value: string };
      appointmentDates: [];
    };
  }
): GlobalState {
  return {
    ...state1,
    ...payload1,
  };
}
