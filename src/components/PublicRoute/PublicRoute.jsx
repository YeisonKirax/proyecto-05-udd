import { useContext, useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import UserContext from "../../contexts/user/UserContext.jsx";
export default function PublicRoute( { children } ) {
  const userCtx = useContext( UserContext )
  const { authStatus, verifyingToken } = userCtx
  const [ loading, setLoading ] = useState( true )
  useEffect( () => {
    const verifyUser = async () => {
      await verifyingToken()
      setLoading( false )
    }
    if ( !authStatus ) {
      verifyUser()
    }
  }, [] )

  if ( loading ) return ( <><Spinner></Spinner></> )

  return ( children )
}