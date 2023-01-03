import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderStyled, FooterHeaderStyle } from "./style";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"
import MenuMobile from "../MenuMobile";


export default function Header(){
  const navigate = useNavigate()
  const [mobile, setMobile] = useState(false)
  
  const login = (e)=>{
    e.preventDefault()
    return(
      navigate('/login')
    )
  }
  return(
    <>
    <MenuMobile
     menuVisible={mobile} 
     setMenuVisible={setMobile}
     onClickLogin={login}
     />
    <HeaderStyled>
    <h1>KavaK</h1>
    <span>
    <GiHamburgerMenu size={45} onClick={()=> setMobile(true)}/>
    </span>

    <ul>
      <li>
        Comprar carro
      </li>
      <li>
        Vender carro
      </li>
      <li>
        App KavaK
      </li>
      <li>
        Sobre nós
      </li>
      <li>
        <button
          type='Submit'
          onClick={login}
          >
          <FaRegUser size={25}/>
        </button>
      </li>
    </ul>
    </HeaderStyled>
    <FooterHeaderStyle>
      Seminovos em oferta!!
    </FooterHeaderStyle>
    </>
  )
}