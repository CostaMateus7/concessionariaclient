import axios from 'axios';

export const Api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const LoginPage = async (email, password) => Api.post('/login', { email, password });

export const Register = async (name, email, password) => Api.post('/cadastro', { name, email, password })

export const ImageCar = async (formData, headers) => Api.post('/regis', formData, headers)

export const RegisterCar = async (formData) => Api.post('/registros', formData, {
  headers:{
    'Content-Type':'multipart/form-data'
  }
})

export const HomeCar = async () => Api.get('/')

export const DeleteCar = async (id)=> Api.delete(`/${id}`)
