import { useState } from 'react'
import './styles/global.css';
import AppRoutes from './routes';
import { Row } from './components/common';
import Sidebar from './layout/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
