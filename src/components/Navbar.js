import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="logo">BLOG</NavLink>
      <ul>
        <li><NavLink to="" className="navLink">HOME</NavLink></li>
        <li><NavLink to="/posts" className="navLink">POSTS</NavLink></li>
        <li><NavLink to="/profile" className="navLink">PROFILE</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar