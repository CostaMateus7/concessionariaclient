import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #fff;
  padding: 0 20px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  margin-bottom: 0;
  h1{
    font-size: 36px;
    font-weight:bolder;
  }

  ul{
    display: flex;
    flex-direction: row;
  }
  li{
    list-style: none;
    margin: 17px;
    font-size: 18px;
    cursor: pointer;
  }
  span svg{
    opacity: 0;
  }
  button{
    background-color: #fff;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
  position: static;
  top: 0;
  margin-top: 0%;
  padding-top:0;
  ul{
    display: none;
  }
  span svg{
    opacity: 1;
  }
    }
`
export const FooterHeaderStyle = styled.div`  

  width: 100%;
  height: 100px; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0A448A;
  top: 100px;
  position: fixed;
  color: #fff;
  font-size: 24px;
  font-weight: bolder;
  @media screen and (max-width: 900px) {
  position: static;
  top: 0;
  padding-top: 0;
  margin-top: 0%;

    }
`