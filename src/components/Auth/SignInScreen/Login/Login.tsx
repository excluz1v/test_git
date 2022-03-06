import { Box } from '@mui/material';
import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Logo from '../Logo/Logo';

export default function Login() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      rowGap={3}
      maxWidth="375px"
      margin="0 auto"
      flexWrap="wrap"
    >
      <Logo />
      <h2>Login</h2>
      <LoginForm />
    </Box>
  );
}
