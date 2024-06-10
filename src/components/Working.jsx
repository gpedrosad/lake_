import React from 'react';
import { Box, Typography } from '@mui/material';

const Working = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.default"
      color="text.primary"
      p={3}
    >
      <Typography variant="h4" component="div">
        Working...
      </Typography>
    </Box>
  );
};

export default Working;
