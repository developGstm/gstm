import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/main.scss'
import 'leaflet/dist/leaflet.css';
import './index.css'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home'
import About from './pages/about';
import Destino from './pages/landingDestino';
import LandingTour from './pages/landingTour';
import { store, persistore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import LandingHome from './pages/landingHome';
import Auth from './components/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>  
    <PersistGate loading={null} persistor={persistore}>    
        <BrowserRouter>
          <Routes>
            <Route path={ "/" }  element={ <LandingHome/> }/>
              <Route path={ "/home" }  element={ <Auth> <Home/></Auth> }/> 
              <Route path={ "/about/:id" }  element={ <Auth><About/></Auth> }/>
              <Route path={ "/landingTour/:packageId" }  element={ <Auth><LandingTour/></Auth> }/>
              <Route path={ "/destino" }  element={ <Auth><Destino/></Auth> }/>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
