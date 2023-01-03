import React, {useState, useEffect, useContext } from "react";
import {Div, DivDescription, Par, HeaderAdmin} from './style'
import { DeleteCar, HomeCar } from "../../Service/Api";
import { formatPrice } from "../Money"
import { AiOutlineDelete } from "react-icons/ai"
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth";


export default function Home(){
  const { logout } = useContext(AuthContext)
  const [carSale, setCarSale ] = useState([])
  const navigate = useNavigate()

  async function catCar(){
    await HomeCar()
    .then(
      (response)=>{
        const dados = response.data
        setCarSale(dados)
      }
    )
    .catch((error)=>{
      console.log(error)
    }
    )}

  useEffect(()=>{
   
    catCar()

  },[carSale])
  const showAdmin = ()=>{
    const tokenLocalStorage = localStorage.getItem("Token")
    if(tokenLocalStorage){
      return true
    }
    return false
  }
  const handleClickDelete = async(id)=>{
      DeleteCar(id)
      .then(res=>res.data)
      .then()
      .catch(error => console.log(error))      
  }
  const handleRegister = ()=>{
    navigate('/registros')
  }
  
  return(
    <Div>
      {showAdmin() === true ? <HeaderAdmin>Admin<button onClick={logout}>Logout</button><button onClick={handleRegister}>Registrar</button></HeaderAdmin> : ''}
     <Header/>

    {carSale?.map((sale, key)=>{
      return(
        <Par key={sale.id}>
            <img src={sale.filename} alt="" />
          <DivDescription>
            <h2>{sale.name}</h2>
            <p>{`${sale.brand}`} <br />{`${sale.model}`}</p>
            <div>{ formatPrice(sale.price)}</div>
            
          </DivDescription>
          {showAdmin() === true ? <AiOutlineDelete size={25} onClick={()=>handleClickDelete(sale.id)}/> : ''}
        </Par>)
    })}
    <Footer/>

    </Div>
  )
}
