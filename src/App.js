import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import NoMatch from './Pages/NoMatch/NoMatch';
import './App.scss';

function App() {
  const navigate = useNavigate();
  // Check Authenticition
  useEffect(() => {
    const token = localStorage.getItem('token');
    !token && navigate('/auth');
  }, []);

  return (
      <section className='app'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="auth" element={<Auth/>} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </section>
  );
}

export default App;
