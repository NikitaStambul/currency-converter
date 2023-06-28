import { Stack, Typography, styled } from '@mui/material';
import React from 'react';

const Rights = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 12,
  fontWeight: 300,
  fontStyle: 'italic',
  textAlign: 'center',
}));

const Creds = styled(Rights)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const Credits = () => {
  return (
    <Stack spacing="10px">
      <Rights>© 2023 Currency Converter Inc.</Rights>
      <Creds>Dev by Mykyta Stambul / Design by Igor Kochmak</Creds>
    </Stack>
  );
};

export default Credits;
