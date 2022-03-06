import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { UIContext } from '../../../Unknown/UIContext';

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
    <div>
      <Button type="button" onClick={handleSignIn}>
        Sign in
      </Button>
    </div>
  );
}
