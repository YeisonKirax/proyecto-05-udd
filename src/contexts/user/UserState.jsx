import { useReducer } from 'react';
import axiosClient from "../../config/axios.jsx";
import UserContext from './UserContext.jsx';
import userReducers from './UserReducer.jsx';
const UserState = ( props ) => {
  const initialState = {
    user: {
      _id: null,
      fullName: null,
      email: null
    },
    authStatus: false
  }

  const [ globalState, dispatch ] = useReducer( userReducers, initialState )

  const registerUser = async ( dataForm ) => {
    try {
      const res = await axiosClient.post( "/auth/signup", dataForm )
      const payload = res.data // {token: "..."}
      dispatch( {
        type: "REGISTRO_EXITOSO",
        payload: payload
      } )
    } catch ( error ) {
      console.error( error )
    }
  }

  const loginUser = async ( dataForm ) => {
    try {
      const res = await axiosClient.post( "/auth/login", dataForm )
      const payload = res.data // {token: "..."}
      dispatch( {
        type: "LOGIN_EXITOSO",
        payload: payload
      } )
    } catch ( error ) {
      console.error( error )
    }
  }

  const verifyingToken = async () => {
    const token = localStorage.getItem( 'token' )
    if ( token ) {
      axiosClient.defaults.headers.common.Authorization = `Bearer ${ token }`
    } else {
      delete axiosClient.defaults.headers.common.Authorization
    }

    try {
      const res = await axiosClient.get( '/users/profile' )
      const userData = res.data // {name: "...", surname: "...", email: "...", ...}
      dispatch( {
        type: "OBTENER_USUARIO",
        payload: userData
      } )
    } catch ( error ) {
      console.error( error )

      dispatch( {
        type: "CERRAR_SESION"
      } )
    }
  }

  const logout = () => {
    dispatch( {
      type: "CERRAR_SESION"
    } )
  }

  return (
    <UserContext.Provider value={ {
      ...globalState,
      registerUser,
      loginUser,
      verifyingToken,
      logout
    } }>
      { props.children }
    </UserContext.Provider>
  )
}

export default UserState