import { useContext, useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext.jsx";
export default function PrivateRoute( { children } ) {
  const userCtx = useContext( UserContext )
  const { authStatus, verifyingToken } = userCtx
  const [ loading, setLoading ] = useState( true )
  useEffect( () => {
    const verifyUser = async () => {
      await verifyingToken()
      setLoading( false )
    }
    verifyUser()
  }, [ authStatus, verifyingToken ] )

  if ( loading ) {
    return (
      <Spinner></Spinner>
    )
  }

  return authStatus ? ( children ) : ( <Navigate to="/"></Navigate> )
}