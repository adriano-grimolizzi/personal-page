import './App.css'
import Header from './header/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './home/Home'
import Cv from './cv/Cv'
import { Box } from '@mui/material';

export default () =>
  <Router>
    <Box>
      <Header />
      <Routes>
        <Route path="/cv" element={<Cv />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  </Router>
