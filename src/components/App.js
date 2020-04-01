import React, { useState } from 'react'
import { getLoggedInUser } from '../lib/identity'

import LogIn from './Login'
import Dashboard from './Dashboard'

function App() {
  const [user, setUser] = useState(getLoggedInUser())

  if (user) {
    return (
      <div>
        <Dashboard></Dashboard>
      </div>
    )
  }

  return (
    <div>
      <LogIn></LogIn>
    </div>
  )
}

export default App
