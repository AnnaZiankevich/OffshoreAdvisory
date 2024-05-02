import s from './App.module.css';
import { Route, Routes } from "react-router-dom"
import { publicRoutes, servicesPublicRoutes, regionsPublicRoutes } from "./Constants/PublicRoutes"
import Home from './pages/Home/Home'
import Header from '../src/components/Header/Header'
import Footer from './components/Footer/Footer'
import './styles/_main.scss'

function App() {
  return (
    <div className="App">
      <div className={s.desktop_header}>
        <Header/>
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
