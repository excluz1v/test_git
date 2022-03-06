import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';
import { useUser } from 'reactfire';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menu: {
      backgroundColor: theme.palette.secondary.main,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function HomeMenu() {
  const classes = useStyles();
  const user = useUser();
  function extractInitials(fullName: string) {
    const arr = fullName.split(' ');
    return arr[0][0] + arr[1][0];
  }
  const initials = user.data.displayName
    ? extractInitials(user.data.displayName)
    : 'U';

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.menu}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Voypost
          </Typography>
          <Avatar>{initials}</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}
