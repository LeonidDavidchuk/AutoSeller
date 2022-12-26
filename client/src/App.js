import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

const App = () => {
  React.useEffect(() => {
    fetch('http://localhost:3001/api/user/auth', (req, res) => {
      console.log('working')
    })
    .then (result => console.log(result))
  },[])
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>

  );
};

export default App;