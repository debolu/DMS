import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from "./components/images/logo.png";
import { links } from "./links-socials";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const { openSidebar } = useGlobalContext();
  return (
      <header className="App-header">
        <a href="/" className="logo"><img src={logo} alt="logo" /></a>
        <nav className="nav-bar">
            <ul>
                {links.map((link) => {
                  const { id, url, text } = link
                  return (
                  <li key={id} ><Link to={url}>{text}</Link></li>
                  )
                })}
            </ul>
        </nav>
        <div className="signin-div">
            <NavLink to="/login"><button className="btn">Log In</button></NavLink>
            <NavLink to="/sign-in"><button className="btn get-started">Get Started</button></NavLink>
        </div>

        <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
        </button>
      </header>
  );
};

export default Header;