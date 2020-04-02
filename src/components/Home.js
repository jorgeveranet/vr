import React from 'react'

function Home(props) {
  const handleLogIn = () => props.handleLogIn()

  return <button onClick={handleLogIn}>Log in (Only for Invited Users!)</button>
}

export default Home
