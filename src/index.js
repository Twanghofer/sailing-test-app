import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import News from "./components/News";
import About from "./components/About";
import Team from "./components/Team";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <Landing />
      <News />
      <About />
      <Team />
    </main>
    <Footer />
  </React.StrictMode>
);
