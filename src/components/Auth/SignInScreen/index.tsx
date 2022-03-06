import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginForm from './LoginForm/LoginForm';

const SignInScreen: React.FC = () => {
  return (
    <>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Container fixed>
          <Grid container>
            <Grid item xs={6}>
              <img
                src="./Hero_image.png"
                alt="login img"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={6}>
              <LoginForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default SignInScreen;
