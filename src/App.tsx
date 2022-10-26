import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Company from './pages/Company';
import CoreValues from './pages/CoreValues';
import Dashboard from './pages/Dashboard';
import Error404 from './pages/Error404';
import FocusAreas from './pages/FocusAreas';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Risk from './pages/Risk';
import Stakeholders from './pages/Stakeholders';
import Statements from './pages/Statements';
import Swot from './pages/Swot';

const links = [
  {
    link: '/',
    component: <Dashboard />
  },
  {
    link: '/login',
    component: <Login />
  },
  {
    link: '/sign-up',
    component: <Register />
  },
  {
    link: '/company',
    component: <Company />
  },
  {
    link: '/swot-analysis',
    component: <Swot />
  },
  {
    link: '/statements',
    component: <Statements />
  },
  {
    link: '/core-values',
    component: <CoreValues />
  },
  {
    link: '/key-focus-areas',
    component: <FocusAreas />
  },
  {
    link: '/stakeholder-analysis',
    component: <Stakeholders />
  },
  {
    link: '/risk-management',
    component: <Risk />
  },
  {
    link: '/admin',
    component: <Admin />
  },
  {
    link: '/profile',
    component: <Profile />
  },
  {
    link: '*',
    component: <Error404 />
  },
]

const theme = createTheme({
  palette: {
    primary: {
      main: '#A4204F',
    },
    secondary: {
      main: '#747CB3',
      light: '#E3C9D7',
    },
  },
  typography: {
    fontFamily: 'Quicksand'
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {links.map(({ link, component }, index) => <Route key={index} path={link} element={component} />)}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
