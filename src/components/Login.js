import React, { useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'
import { persistUser, logoutUser } from '../lib/identity'

function LogIn() {
  useEffect(() => {
    netlifyIdentity.on('login', user => persistUser(user))
    netlifyIdentity.on('logout', () => logoutUser())
  })

  const handleLogIn = () => netlifyIdentity.open()

  return <button onClick={handleLogIn}>Log in</button>
}

export default LogIn
