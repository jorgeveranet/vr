import React from 'react'

function Dashboard(props) {
  const handleLogOut = () => props.handleLogOut()

  return (
    <div>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default Dashboard
