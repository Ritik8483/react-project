import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>Home</Link> |  
        <NavLink style={({isActive})=>{return {color:isActive?'red':''}}} to='/school'>School</NavLink>
    </div>
  )
}

export default Navbar