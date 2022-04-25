
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAuth, getGlobal } from './redux/selectors';
import { CHECK_AUTH } from './redux/actions/auth';

import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home'
import AddNew from './Pages/AddNew/AddNew'
import Edit from './Pages/Edit/Edit'

import NoMatch from './Pages/NoMatch/NoMatch';
import Ad from './Pages/Ad/Ad';

import Loading from './components/Loading/Loading';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(getAuth);
  const {isFetching} = useSelector(getGlobal);

  useEffect(() => {
    dispatch({type: CHECK_AUTH});
  }, []);

  // Check Authenticition
  useEffect(() => {
    !auth.token && navigate('/auth');
  }, [auth]);

  return (
      <section className='app'>
        <Header />
        {
          isFetching && <Loading isActive />
        }
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="auth" element={<Auth/>} />
          <Route path="addnew" element={<AddNew/>} />
          <Route path="ad/:id" element={<Ad/>} />
          <Route path="edit" element={<Edit/>} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </section>
  );

}

export default App
