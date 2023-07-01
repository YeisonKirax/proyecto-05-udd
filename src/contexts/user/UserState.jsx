import { useReducer } from 'react';
import axiosClient from "../../config/axios.jsx";
import UserContext from './UserContext.jsx';
import userReducers from './UserReducer.jsx';
const UserState = ( props ) => {
  const initialState = {
    user: {
      id: null,
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

  return (
    <UserContext.Provider value={ {
      ...globalState,
      registerUser,
      loginUser
    } }>
      { props.children }
    </UserContext.Provider>
  )
}

export default UserState