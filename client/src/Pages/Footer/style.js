import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  position: relative;
  bottom: 0px;
  margin-bottom: 0;
  background-color: transparent;
`
export const FooterStyled = styled.div`
  width: 100%;
  height: 35%;
  background-color: #000;
  display: flex;
  flex-direction: row;
  gap: 12px;
  color: #fff;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  h2{
    font-size: 42px;
    font-weight: bolder;
  }
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li{
    list-style: none;
    margin: 15px;
    cursor: pointer;
  }
`
export const FooterFooterStyled = styled.div`
  background-color: #000;
  width: 100%;
  height: 50%;
  color: #fff;
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 5px;
  div{
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
    padding: 25px;
  }
  p{
    padding: 25px;
  }
`