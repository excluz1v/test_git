import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Form, Formik } from 'formik';
import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { UIContext } from '../../../Unknown/UIContext';
import Logo from '../Logo/Logo';
import LoginSchema from './validateSchema';

export default function LoginForm() {
  const { setAlert } = useContext(UIContext);

  const handleSignIn = React.useCallback(async () => {
    setAlert({
      show: true,
      severity: 'info',
      message: 'Sign in button was clicked.',
    });
  }, [setAlert]);

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
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
          handleSignIn();
        }}
      >
        {({ errors, touched }) => (
          <Form className="login_form">
            <TextField fullWidth name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <TextField fullWidth name="password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
