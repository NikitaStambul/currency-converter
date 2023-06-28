import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Box display="flex" justifyContent='center' width='100vw' marginTop={4}>
      <CircularProgress />
    </Box>
  );
};

export default Loader;
