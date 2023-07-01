import { useContext } from 'react'
import UserContext from '../../contexts/users/UserContext.jsx'

export const Profile = () => {
  const userCtx = useContext( UserContext )
  const { user } = userCtx
  return (
    <div>

      <h1>Profile</h1>
      <p>Nombre: { user.fullName }</p>
    </div>
  )
}