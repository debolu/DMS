// import logo from "./logo.png";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import logo from "./components/images/logo.png";

const Header = () => {
    const { openSidebar } = useGlobalContext();
  return (
    <div >
      <header className="App-header">
        <a href="/" className="logo"><img src={logo} alt="logo" /></a>
        <nav className="nav-bar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/our-company">Our Company</a></li>
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
    </div>
  );
};

export default Header;