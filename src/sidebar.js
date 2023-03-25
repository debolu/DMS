import React from 'react'
// import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import logo from "./components/images/logo.png";
import { links, social } from './links-socials';
import { Link } from 'react-router-dom';

const Sidebar = () => {
const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return <aside className={`${isSidebarOpen? 'sidebar show-sidebar' : 'sidebar'}`}>
    <div className="sidebar-header">
    <a href="/" className="logo"><img src={logo} alt="logo" /></a>
      <button className='close-btn' onClick={closeSidebar}><FaTimes /></button>
    </div>
    <ul className="links">
      {links.map((link) => {
                    const { id, url, text } = link
                    return (
                    <li key={id} ><a href={url}>{text}</a></li>
                    )
                  })}
    </ul>

    <div className="socials" style={{margin: 'auto 10px'}}>
        <h3>Connect with us: </h3>
        <ul className='socials-icons'>
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id} >
                <a target={'_blank'} rel="noreferrer" href={url} >{icon}</a>
              </li>
            )
          })}
        </ul>
    </div>
    <div style={{margin: '10px auto'}}>
              <Link  to="/login"><button className="btn">Log In</button></Link>
              <Link  to="/sign-in"><button className="btn get-started">Get Started</button></Link>
    </div>
  </aside>
}

export default Sidebar
