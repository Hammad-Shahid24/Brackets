import { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Message from "./components/Message";
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";
import { Element } from "react-scroll";
import TechStack from "./components/TechStack";
import Portfolio from "./components/Portfolio";

const App: FC = () => {
  return (
    <div className="w-full h-screen">
      <Element name="top" className="absolute top-0">
        <Header />
      </Element>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="techstack">
        <TechStack />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="message">
        <Message />
      </Element>
      <Element name="contact">
        <GetInTouch />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
