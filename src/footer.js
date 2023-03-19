import logo from "./components/images/logo.png";
import { links, social } from "./links-socials";

const Footer = () => {
  return (
    <footer>
      <div  style={{display: "flex", width: "100%", justifyContent:'space-between'}}>
        <div className="footer-logo">
          <img src={logo} alt="App logo" className="logo" />
          <figcaption>DERALZ MARKETING SOLUTION</figcaption>
        </div>
        <div style={{ margin: "20px 40px" }}>
                  <a href="/login"><button className="btn">Log In</button></a>
                  <a href="/signin"><button className="btn get-started">Get Started</button></a>
        </div>
      </div> 
      <nav className="nav">
        <ul className="links">
            {links.map((link) => {
                        const { id, url, text, nav } = link
                        return (
                        <li key={id} >
                          <a href={url}>{text}</a>
                          <ul className="navLinks">
                          { nav.map((navLink) => {
                            const { id, navUrl, navText } = navLink
                            return <li key={id} className="navlink"><a href={navUrl}>{navText}</a></li>
                          }) }
                          </ul>
                        </li>
                        )
            })}
             
        </ul>
      </nav>
      <div className="socials" style={{margin: 'auto 10px'}}>
        <h3>Connect with us: </h3>
        <ul className="socials-icons">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}><a href={url}>{icon}</a></li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
