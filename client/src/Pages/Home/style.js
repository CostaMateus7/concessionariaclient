import styled from "styled-components";


export const Div = styled.div`
  position: absolute;
  top: 220px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h2{
    margin-top: 10px;
    font-size: 1rem;
  }
  @media screen and (max-width: 900px) {
  top: 0px;
    }
`
export const Par = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  font-size: 1.8em;
  justify-content: space-between;
  width: 21%;
  height: 40%;
  padding-bottom: 5px;
  font-size: 18px;
  margin: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 1.5px 2.5px 0px #898F9C;
  img{
    width:100%;
    height: 70%;
    border-radius: 5px;
  }
  p{
    font-size: .875rem;
    color: #898F9C;

  }
  div{
    font-size: 1rem;
  }
  svg{
    display: inline;
    cursor: pointer;
    margin-left: 90%;
  }
  @media screen and (max-width: 900px) {
    width: 80%;
    margin:auto;
    padding:20px;
    margin-top:10px;
    margin-bottom: 10px;
  }
`
export const DivDescription = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 12px;
  div{
    font-size: 1.2rem;
    color: #398ADE;
    font-weight: bolder;
  }
`
export const HeaderAdmin = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0px;
  margin-top: 0;
  background-color:black;
  height: 30px;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  button{
    background-color: #fff;
    border:none;
    font-size: 18px;
    cursor: pointer;
    padding: 0 7px;
    opacity: 0.8;
    :hover{
      opacity: 1;
    }
  }
`
