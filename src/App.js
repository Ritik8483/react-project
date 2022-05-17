import logo from './logo.svg';
import './App.css';
import { GetApi } from './components/GetApi';
import { Student } from './components/Student';
import { Pokimon } from './axios_tut/Pokimon';
import { Cart } from './components/Cart';
import { AppModal } from './Modal/FormModal';
import { Home } from './Routes/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  Navigate
} from "react-router-dom";
import School from './Routes/School';
import Navbar from './Routes/Navbar';
import Error from './Routes/Error';
import College from './Routes/College';
import FormikForm from './components/FormikForm';
import { useEffect } from 'react';

function App() {
  return (
    <div>
      <FormikForm/>
    <Router >
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/school' element={<School/>} />
        <Route path='/college' element={<College/>} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
