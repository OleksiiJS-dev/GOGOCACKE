import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './componennts/Main/Main';
import Admin from './componennts/Admin/Admin';
import NotFound from './componennts/404/404';


function App() {
  useEffect(() => {

  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main children={undefined} styles={"power"} />} />
        <Route path="admin" element={<Admin children={undefined}></Admin>} />
        <Route path="*" element={<NotFound children={undefined}></NotFound>} />
      </Routes>

    </Router>
  );
}

export default App;
