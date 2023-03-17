import React from 'react'
// import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import logo from "./components/images/logo.png";

const Sidebar = () => {
const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return <aside className={`${isSidebarOpen? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className="sidebar-header">
    <a href="/" className="logo"><img src={logo} alt="logo" /></a>
      <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
    </div>
    <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/our-company">Our Company</a></li>
    </ul>

    <div className="signin-div">
            <a href="/login"><button className="btn">Log In</button></a>
            <a href="/signin"><button className="btn get-started">Get Started</button></a>
    </div>
    {/* <ul className="social-icons">
      {social.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id} >
            <a href={url}>{icon}</a>
          </li>
        )
      })}
    </ul> */}

  </aside>
}

export default Sidebar
