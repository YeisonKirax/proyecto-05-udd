const userReducers = ( globalState, action ) => {
  const { type, payload } = action
  switch ( type ) {
    case "LOGIN_EXITOSO":
      localStorage.setItem( "token", payload.token )
      return {
        ...globalState,
        authStatus: true
      }

    case "REGISTRO_EXITOSO":
      localStorage.setItem( "token", payload.token )
      return {
        ...globalState,
        authStatus: true
      }

    case "OBTENER_USUARIO":
      return {
        ...globalState,
        authStatus: true,
        user: action.payload
      }

    case "CERRAR_SESION":
      localStorage.removeItem( 'token' )
      return {
        ...globalState,
        user: null,
        authStatus: false
      }

    default:
      return globalState
  }
}

export default userReducers