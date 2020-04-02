import React, { useState, useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import Home from './Home'
import Dashboard from './Dashboard'

function App() {
  const [user, setUser] = useState(netlifyIdentity.currentUser())

  useEffect(() => {
    netlifyIdentity.on('login', user => {
      netlifyIdentity.close()
      setUser(user)
    })

    netlifyIdentity.on('logout', () => {
      setUser(null)
    })

    netlifyIdentity.on('error', err => {})
  })

  const handleLogIn = () => {
    netlifyIdentity.open()
  }

  const handleLogout = () => {
    netlifyIdentity.logout()
  }

  if (user) return <Dashboard handleLogOut={handleLogout}></Dashboard>

  return <Home handleLogIn={handleLogIn}></Home>
}

export default App
