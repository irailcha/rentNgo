import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registrationField, setIsLogin } from '../../redux/Auth/userSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ButtonStyle } from './UserRegister.style';

export const UserRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = value => {
    dispatch(registrationField({ field: 'name', value: value.name }));
    dispatch(registrationField({ field: 'email', value: value.email }));
    dispatch(registrationField({ field: 'password', value: value.password }));
    navigate('/', { replace: true });
    console.log(value);
  };

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            autoComplete
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label htmlFor="name">Name</label>
                <TextField fullWidth id="name" name="name" placeholder="Jane" />
              </Grid>

              <Grid item xs={12}>
                <label htmlFor="email">Email</label>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="@example.com"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="password">Password</label>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonStyle
                  type="submit"
                  onClick={() => dispatch(setIsLogin(true))}
                >
                  Sign up
                </ButtonStyle>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
