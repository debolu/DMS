import './App.css';
import Header from "./header";
import Sidebar from "./sidebar";
import Welcome from "./components/pages/homepage/welcome-section";
// import { useGlobalContext } from "./context";
import Review from "./components/pages/homepage/reviews";
import Subscribe from "./components/pages/homepage/Subscribe";
import Footer from "./footer";

function App() {
  return (
    <main>
      <Header />
      <Sidebar />
      <div style={{display: 'flex', width: "100%", flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
        <Welcome />
        <Review />
        <Subscribe />        
      </div>
      <Footer />
    </main>
  );
}

export default App;
