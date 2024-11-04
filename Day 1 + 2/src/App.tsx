import { FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Message from "./components/Message";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <Hero />
      <Message />
      <Footer />
    </div>
  );
};

export default App;
