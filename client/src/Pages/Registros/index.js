import React, { useState } from "react";
import * as yup from 'yup';
import Button from "../Button";
import Input from "../Input";
import { RegisterCar } from "../../Service/Api";
import { Form, Div, Title, FooterStyle } from "./style";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Registros(){
  const [ status, setStatus ] = useState({
    Type: '',
    Mensage: ''
  })
  const [ image, setImage ] = useState('')

  const [ car, setCar ] = useState({
    name: '',
    brand:'',
    model:'',
    price:'',
  })
  useEffect(()=>{

  },[car])


    const handleClick = async (e) => {
      e.preventDefault();

      if (!(await validate(car))) return;

      try{
        const formData = new FormData();
        formData.append('image', image)
        formData.append('name', car.name)
        formData.append('brand', car.brand)
        formData.append('model', car.model)
        formData.append('price', car.price)
        await RegisterCar(formData)
        (setStatus(
          {
            Type: 'Sucesso',
            Mensage: 'Cadastro secesso!',
          },
        ))

      } catch(error){
        setStatus(
          {
            Type: 'Erro',
            Mensage: error.response.data,
          },
        );
      }

  }
  const validate = async () => {
    const schema = yup.object().shape({
      price: yup.string('Favor preencher o valor do veículo')
        .required('Favor preencher o valor do veículo'),
      model: yup.string('Favor preencher modelo')
        .required('Favor preencher modelo'),
      brand: yup.string('Favor preencher a marca do veículo')
        .required('Favor preencher a marca do veículo'),
      name: yup.string('Favor inserir o nome do veículo')
        .required('Favor inserir o nome do veículo'),
    });
    try {
      await schema.validate(car);

      return true;
    } catch (err) {
      setStatus({
        Type: 'Erro',
        Mensage: err.errors,
      });
      return false;
    }
  };
  return(
    <Div>
    <Title>Regitrar Carro</Title>
    <Form   method =" post " enctype="multipart/form-data">
    {status.Type === 'Sucesso' ? <p>{status.Mensage}</p> : <p>{status.Mensage}</p>}

    <label
          type="name"
          value={car.name}
        >
          Nome:
          <Input
            type="text"
            name="name"
            value={car.name}
            onChange={(e) => setCar({
              name: e.target.value, brand: car.brand, model: car.model,
            })}
          />
        </label>
        <label
          type="brand"
          value={car.brand}
        >
          Marca:
          <Input
            type="text"
            name="brand"
            value={car.brand}
            onChange={(e) => setCar({
              name: car.name, brand: e.target.value, model: car.model,
            })}
          />
        </label>
        <label
          type="model"
          value={car.model}
        >
          Modelo:
          <Input
            type="text"
            name="model"
            value={car.model}
            onChange={(e) => setCar({
              name: car.name, brand: car.brand, model: e.target.value,
            })}
          />
        </label>
        <label
          type="price"
          value={car.price}
        >
          Preço:
          <Input
            type="number"
            name="price"
            value={car.price}
            onChange={(e) => setCar({
              name: car.name, brand: car.brand, model: car.model, price: e.target.value
            })}
          />
        </label>
        <label>
          Imagem:
        <Input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0]) }
        />
        </label>
        <span>{image ? <img src={URL.createObjectURL(image)} alt='Imagem carro' width='380px' height='250px'/> : ''}</span>
    
    <Button
     type="submit"
     onClick={handleClick}
    >Salvar</Button>
     <Link to='/'>Ir para Home</Link>
    </Form>
    <FooterStyle>&copy;KavaK</FooterStyle>
    </Div>
  )
  }

