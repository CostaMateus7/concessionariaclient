import React, { useContext } from "react";
import{
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Auth from "../Auth";
import Home from '../Home/index'
import Login from '../Login'
import Cadastro from "../Cadastro";
import Registros from "../Registros"
import { AuthContext } from "../Auth";



export default function APPRoutes(){

  const Private = ({children})=>{
    const { authenticated, loading } = useContext(AuthContext)

    if(loading){
      return(
        <div>Carregando...</div>
      )

    }
    if(authenticated!==true){
      return(
      <Navigate to={'/login'}/>
      )
    }
    return(
      children
    )
  }
  return(
    <Router>
      <Auth>
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/cadastro" element={<Cadastro/>}/>
          <Route exact path="/registros" element={<Private><Registros/></Private>} />
          <Route path="/:id" element={<Home/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Auth>
    </Router>
  )
}
