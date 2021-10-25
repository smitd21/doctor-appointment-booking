import 'little-state-machine';

declare module 'little-state-machine' {
  interface GlobalState {
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
    yourDetails1: {
      consultType: { value: string };
      lastVisit: [];
      surgeryDate: [];
      appointment: { value: string };
      appointmentDates: [];
    };
  }
}
