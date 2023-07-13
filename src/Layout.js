import React from 'react'
import { Link } from 'react-router-dom'


const Layout = () => {
    const user = 'john'
  return (
    <div>
      <ul>
        <li>
            <Link to ="/about" >About</Link>
            <Link to ="/services" >Services</Link>
            <Link to ={`/dashboard/${user}`} >Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default Layout
