import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/Auth/operations';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { ButtonStyle, AdditionalStyle } from './UserLogin.style';

export const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  // Отримуємо метод для переходу між сторінками
  const dispatch = useDispatch();

  // Отримуємо метод для переходу між сторінками
  const navigate = useNavigate();

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = value => {
    dispatch(signin(formData));
    navigate('/', { replace: true });
    setFormData({ username: '', email: '', password: '' });
  };
  // Створюємо тему для компонентів Material-UI
  const defaultTheme = createTheme();

  // Повертаємо JSX, який буде відображений на сторінці
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
            Sign in
          </Typography>

          {/* Форма для входу */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            autoComplete="true"
          >
            <Grid container spacing={2}>
              {/* Поле для введення електронної пошти */}
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
                />
              </Grid>
              {/* Поле для введення пароля */}
              <Grid item xs={12}>
                <label htmlFor="password">Password</label>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Grid>
              {/* Кнопка для відправлення форми */}
              <Grid item xs={12}>
                <ButtonStyle type="submit">Sign in</ButtonStyle>
              </Grid>
              {/* Посилання на сторінку реєстрації */}
              <Grid item xs={12}>
                <AdditionalStyle>
                  <p>Don't have an account yet? </p>
                  <NavLink to="auth/signup">Sign up</NavLink>
                </AdditionalStyle>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
