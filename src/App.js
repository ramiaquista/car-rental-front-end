import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Home from './components/Home';
import Nav from './components/Nav';
import CarDetails from './components/car/CarDetails';
import CarNew from './components/car/CarNew';
import Redirect from './components/Redirect';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import configureStore from './redux/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex">
          <Nav />
          <Routes>
            <Route exact path="/" element={<ProtectedRoute />}>
              <Route path="/" exac element={<Home />} />
              <Route path="/car/:id" exac element={<CarDetails />} />
              <Route path="/car/new" exac element={<CarNew />} />
              <Route path="/redirect" exac element={<Redirect />} />
            </Route>
              <Route path="/login" exac element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
