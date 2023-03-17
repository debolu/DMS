import Header from "./header";
import Sidebar from "./sidebar";
import Welcome from "./components/pages/homepage/welcome-section";
import { useGlobalContext } from "./context";
import Review from "./components/pages/homepage/reviews";
import Subscribe from "./components/pages/homepage/Subscribe";

function App() {
  return (
    <main>
      <Header />
      <Sidebar />
      <div style={{display: 'flex', flexDirection: 'column', justifyItems: 'center', alignItems: 'center' }}>
        <Welcome />
        <Review />
        <Subscribe />
        
        
      </div>
    </main>
  );
}

export default App;
