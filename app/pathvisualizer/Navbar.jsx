import React from 'react'
import Button from '../customComponent/button'

const Navbar = ({runAlgo, generateMaze}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Path Visualizer</a>
    <Button text={'Visualize'} onClick={runAlgo} />
    <Button text={'Generate Maze'} onClick={generateMaze} />
  </div>
</nav>
  )
}

export default Navbar
