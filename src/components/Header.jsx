import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>logo</div>
            <div className='link'>
              <Link to="/?php=variable">
              <h6>PHP</h6>
              </Link>
              <Link to="/?php=request">
              <h6>PHP</h6>
              </Link>
              <Link to="/?php=condition">
              <h6>PHP</h6>
              </Link>
              <span>Rady</span>
              <span>logout</span>
              <span className='write'><Link to='/write'> write</Link></span>
            </div>
        </div>
    </div>
  )
}

export default Header