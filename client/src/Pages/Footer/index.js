import React from "react";
import { FooterContainer, FooterFooterStyled, FooterStyled } from "./style";
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { AiFillFacebook } from "react-icons/ai"


export default function Footer(){
  return(
    <FooterContainer>
      <FooterStyled>
        <h2>KavaK</h2>
        <ul>
          <li><BsInstagram size={25}/></li>
          <li><AiFillFacebook size={25}/></li>
          <li><BsLinkedin size={25}/></li>
        </ul>
  
      </FooterStyled>
      <FooterFooterStyled>
        <div><span>·Copyright © 2022 KAVAK.</span><span>·Todos os direitos reservados.</span> <span>·Política de Privacidade</span><span>·Termos e Condições</span><span>·Definições de cookies</span></div>
        <p>KAVAK TECNOLOGIA E COMERCIO DE VEICULOS LTDA., inscrita no CNPJ sob o nº 36.740.390/0001-83, com sede na Estrada dos Alpes, nº 855, Galpão A, Módulo 1, Jardim Belval, Barueri/SP, CEP 06.423-080</p> 
      </FooterFooterStyled>

    </FooterContainer>
  )
}