import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context';
// import { useGlobalContext } from "./context";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import App from './App';
import Signin from "./components/pages/signin/signin";
import Login from "./components/pages/signin/login"
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
       <Routes>
          <Route exact path="/" Component={App} />
          {/* <Route path="/our-company" Component={ourCompany} /> */}
          {/* <Route path="/features" Component={Features} /> */}
          {/* <Route path="/help" Component={Help} /> */}
          <Route path="/sign-in" Component={Signin} />
          <Route path="/login" Component={Login} />
        </Routes>
        <Header />
        <Sidebar />
        <Footer />
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
