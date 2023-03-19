// import logo from "./logo.png";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from "./components/images/logo.png";
import { links } from "./links-socials";

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
                  <li key={id} ><a href={url}>{text}</a></li>
                  )
                })}
            </ul>
        </nav>
        <div className="signin-div">
            <a href="/login"><button className="btn">Log In</button></a>
            <a href="/signin"><button className="btn get-started">Get Started</button></a>
        </div>

        <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
        </button>
      </header>
  );
};

export default Header;