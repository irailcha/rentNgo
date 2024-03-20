import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../redux/Auth/operations';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ButtonStyle } from './UserRegister.style';

export const UserRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signup(formData));
    navigate('/auth/signin', { replace: true });
    setFormData({ username: '', email: '', password: '' });
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
            autoComplete="true"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label htmlFor="name">Name</label>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  placeholder="Jane"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <label htmlFor="email">Email</label>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  placeholder="@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="password">Password</label>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonStyle type="submit">Sign up</ButtonStyle>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
