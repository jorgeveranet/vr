import React from 'react'

function LogIn(props) {
  const handleLogIn = () => props.handleLogIn()

  return <button onClick={handleLogIn}>Log in</button>
}

export default LogIn
