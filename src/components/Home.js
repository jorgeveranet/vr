import React from 'react'

function Home(props) {
  const handleLogIn = () => props.handleLogIn()

  return <button onClick={handleLogIn}>Log in (Invited users only!)</button>
}

export default Home
