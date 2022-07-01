import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Ability from "./components/Ability";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [Mode, setMode] = useState("Dark");
  const [Text, setText] = useState("light");
  const [modal, setModal] = useState("hide");

  const toggleMode = () => {
    if (Mode === "Dark") {
      setMode("light");
      setText("Dark");
      document.body.style.backgroundColor = "#000000e6";
      document.body.style.color = "#ffffffd9";
    } else {
      setMode("Dark");
      setText("light");
      document.body.style.backgroundColor = "#ffffffd9";
      document.body.style.color = "#000000e6";
    }
  };

  const toggleModal = () => {
    if (modal === "hide") {
      setModal("show");
    } else if (modal === "show") {
      setModal("hide");
    }
  };
  return (
    <>
      <Hero TextMode={Text} toggleModal={toggleModal} toggleMode={toggleMode} />
      <Navbar />
      <About />
      <Ability />
      <Projects />
      <Contact />
      <Footer />
      <Modal toggleModal={toggleModal} modal={modal} />
    </>
  );
}

export default App;
