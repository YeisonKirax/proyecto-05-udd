import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from "../../../contexts/user/UserContext.jsx";
export const Login = () => {
  const userCtx = useContext( UserContext )
  const { loginUser } = userCtx
  const navigate = useNavigate()
  const [ formValues, setFormValues ] = useState( {
    email: '',
    password: ''
  } )

  async function handleSubmit( event ) {
    event.preventDefault()
    await loginUser( formValues )
    navigate( "/profile" )

  }

  async function handleFormChange( event ) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...formValues, [ name ]: value }
    setFormValues( newValues )
  }

  return (
    <div>
      <h1>Ingreso</h1>
      <form onSubmit={ handleSubmit }>
        <label htmlFor='email'>Correo</label>
        <input id='email' name='email' type='email' value={ formValues.email } onChange={ handleFormChange }></input>

        <label htmlFor='password'>Contraseña</label>
        <input id='password' name='password' type='password' value={ formValues.password } onChange={ handleFormChange }></input>

        <button type='submit'>Ingresar</button>
      </form>
    </div>
  )
}