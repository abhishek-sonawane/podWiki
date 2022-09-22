import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' ><a className="btn btn-ghost normal-case text-xl">PODWIKI </a></Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
     <Link to='/about' > <li><a>About</a></li></Link>
     <Link to='/contact'><li><a>Contact</a></li></Link>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar