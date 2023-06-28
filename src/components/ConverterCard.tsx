import React from 'react';
import { Divider, Stack, Typography, styled } from '@mui/material';

const Main = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: 16,
  padding: '12px, 28px',
}));

const Amount = styled(Typography)(({ theme }) => ({

}));

const ConverterCard = ({ type }: { type: 'from' | 'to' }) => {
  return (
    <Main>
      <Stack>
        <Amount></Amount>
      </Stack>
      <Stack divider={<Divider />}></Stack>
    </Main>
  );
};

export default ConverterCard;
