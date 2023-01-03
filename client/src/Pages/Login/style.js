import styled from "styled-components";


export const Div = styled.div`
  
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Form = styled.form`
  width: 50%;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  gap: 10px;
  padding: 15px;
  
  @media screen and (max-width: 900px) {
      width: 90%;
      border: none;
    }
  p{
    font-size: 18px;
    text-align: center;
  }
  a{
    text-align: center;
    font-size: 18px;
    }

`
export const Title = styled.h1`
  text-align: center;
  padding: 20px;
`

export const FooterStyle = styled.footer`
  padding: 10px;
  text-align: center;
`
