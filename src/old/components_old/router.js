import './App.css'
import React from "react";
import Header from './header/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Spring } from "react-spring"

import Home from './home/Home'
import Cv from './cv/Cv'
import { Box } from '@mui/material';

import Title from './Title'

const old = () =>
  <Router>
    <Box>
      <Header />
      <div style={style}>
        <Routes >
          <Route path="/cv" element={<Cv />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Box>
  </Router>

const style = {
  marginLeft: '1rem'
}

export default () => <Title />
