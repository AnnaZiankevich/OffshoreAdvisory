import s from './App.module.css';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes, servicesPublicRoutes, regionsPublicRoutes } from "./Constants/PublicRoutes";
import Home from "../src/pages/Home/Home"
import Header from '../src/components/Header/Header'
import './styles/_main.scss';

function App() {
  return (
    <div className="App">
      <div className={s.desktop_header}>
        <Header/>
      </div>

      <Routes>

        <Route path={'/'} element={ Home }/>

        {
            publicRoutes.map(route => {
                return (
                    <Route path={route.path} element={route.element}/>
                )
            })
        }

        {
            servicesPublicRoutes.map(route => {
                return (
                    <Route path={route.path} element={route.element}/>
                )
            })
        }

        {
            regionsPublicRoutes.map(route => {
                return (
                    <Route path={route.path} element={route.element}/>
                )
            })
        }

      </Routes>

    </div>
  );
}

export default App;
