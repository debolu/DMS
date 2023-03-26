import './App.css';
import Welcome from "./components/pages/homepage/welcome-section";
// import { useGlobalContext } from "./context";
import Review from "./components/pages/homepage/reviews";
import Subscribe from "./components/pages/homepage/Subscribe";

function App() {
  return (
      <div style={{display: 'flex', width: "100%", flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
        <Welcome />
        <Review />
        <Subscribe />        
      </div>
  );
}

export default App;
