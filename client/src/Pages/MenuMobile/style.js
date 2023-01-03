import styled, {css} from "styled-components";



export const Container = styled.div`
  width:100%;
  height: 100vh;
  backdrop-filter: blur(3px);
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  z-index: 5;
  display: flex;
  opacity: 0;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  transform: translateY(50px);
  transition: .6s ;
  background: #fff;
  svg{
    position: absolute; 
    right: 1rem;
    top: 1rem;
    cursor: pointer;

  }
  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transform:scale(0.7);
    transition: 0.5s;
  }
  li{
    list-style: none;
    font-size: 24px;
  }
  li svg{
    position: static;
  }
  ${({menuVisible})=> menuVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    ul{
      transform:scale(1)
    }
    
  `}
`