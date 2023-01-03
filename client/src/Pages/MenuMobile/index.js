import { useEffect } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { Container } from './style'


export default function MenuMobile({menuVisible, setMenuVisible, onClickLogin}){

  useEffect(()=>{
    document.body.style.overflowY = menuVisible ? 'hidden' : 'auto'

  },[menuVisible])
  
    

  return(
    <Container menuVisible={menuVisible}>
          <IoCloseSharp size={45} onClick={()=> setMenuVisible(false)}/>

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
        <li
        onClick={onClickLogin}
        >
          <FaRegUser size={30}/> Login
        </li>
      </ul>
    </Container>
  )


}
