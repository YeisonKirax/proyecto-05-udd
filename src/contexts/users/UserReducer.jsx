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
    default:
      return globalState
  }
}

export default userReducers