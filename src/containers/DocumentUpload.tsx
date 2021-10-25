import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FileInput } from '../components/FileInput';
import PrimaryButton from '../components/PrimaryButton';
import Box from '@material-ui/core/Box';
import { useStateMachine } from 'little-state-machine';
import { updateAction } from '../../store/yourDetailsAction';

export const MoreInfo = () => {
  // const { state, actions } = useStateMachine({
  //   updateAction,
  // });
  const { control, handleSubmit } = useForm({
    // defaultValues: state.yourDetails,
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // actions.updateAction({
    //   yourDetails: data,
    // });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <FileInput name="files" control={control} />
        <PrimaryButton>Upload</PrimaryButton>
      </Box>
    </form>
  );
};
