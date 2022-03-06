import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';
import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { UIContext } from '../../../Unknown/UIContext';
import LoginSchema from './validateSchema';

export default function LoginForm() {
  const { setAlert } = useContext(UIContext);
  const [showPass, setShowPass] = useState(false);

  const handleSignIn = React.useCallback(async () => {
    setAlert({
      show: true,
      severity: 'info',
      message: 'Sign in button was clicked.',
    });
  }, [setAlert]);

  const handleTogglePassword = () => {
    setShowPass(!showPass);
  };

  return (
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
          <TextField
            fullWidth
            name="password"
            type={showPass ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePassword}
                    edge="end"
                  >
                    {!showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <Button fullWidth type="submit" variant="contained" color="secondary">
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}
