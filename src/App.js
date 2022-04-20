import React, { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Team from "./components/Team";
import News from "./components/News";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <News />
        <About />
        <Team />
      </main>
      <Footer />
    </>
  );
}

export default App;
