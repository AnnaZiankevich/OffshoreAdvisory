import React, { useEffect } from 'react';
import s from './App.module.css';
import { Route, Routes, useLocation } from "react-router-dom"
import { publicRoutes, servicesPublicRoutes, regionsPublicRoutes } from "./Constants/PublicRoutes"
import Home from './pages/Home/Home'
import Header from '../src/components/Header/Header'
import MobileHeader from './components/MobileHeader/MobileHeader';
import Footer from './components/Footer/Footer'
import './styles/_main.scss'

function App() {
  const {  pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
}, [pathname]);

  return (
    <div className="App">
      <div className={s.desktop_header}>
        <Header/>
        <MobileHeader/>
      </div>

      <Routes>

        <Route path={'/'} element={<Home/>}/>

        {
            publicRoutes.map(route => {
                return (
                    <Route path={route.path} element={route.element} key={route.path} />
                )
            })
        }

        {
            servicesPublicRoutes.map(route => {
                return (
                    <Route path={route.path} element={route.element} key={route.path} />
                )
            })
        }

        {
            regionsPublicRoutes.map(route => {
                return (
                    <Route path={route.path} element={route.element} key={route.path} />
                )
            })
        }

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
