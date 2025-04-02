import React, { useContext } from 'react';
import { Container, Typography, Grid, IconButton, useTheme, createTheme, ThemeProvider } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();

  // Создаем пользовательскую тему
  const customTheme = createTheme({
    palette: {
      mode: theme.palette.mode === 'dark' ? 'dark' : 'light',
      primary: {
        main: '#1976d2', // Основной цвет
      },
      secondary: {
        main: '#dc004e', // Вторичный цвет
      },
      background: {
        default: theme.palette.mode === 'dark' ? '#121212' : '#f5f5f5', // Цвет фона
        paper: theme.palette.mode === 'dark' ? '#424242' : '#ffffff', // Цвет бумаги
      },
      text: {
        primary: theme.palette.mode === 'dark' ? '#ffffff' : '#000000', // Цвет текста
        secondary: theme.palette.mode === 'dark' ? '#b0bec5' : '#555555', // Вторичный цвет текста
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Container>
        <Typography variant="h3" component="h1" align="center" sx={{ my: 4 }}>
          Интернет-магазин
        </Typography>
        <IconButton onClick={toggleTheme} sx={{ position: 'absolute', top: 16, right: 16 }}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <ProductList />
          </Grid>
          <Grid item xs={12} md={3}>
            <Cart />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
