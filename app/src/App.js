import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery, MediaQuery } from 'react-responsive';
import SplashScreen from "./components/SplashScreen";
import Main from './page/Main';
import Cursor from './components/Cursor';
import Header from './components/Header';
import CircleComponent from "./components/CircleComponent";
import Footer from './components/Footer';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });
  return (
    <AnimatePresence>
      {isLoading ? (
        <SplashScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <div className="App">
        <Cursor/>
        <Header/>
        <Main />
    </div>
      )}
    </AnimatePresence>
      // <div className="App">
      //   <Cursor/>
      //   <Header/>
      //   <Main />
      //   {!isSmallScreen && (<Footer className="footer" />) }
      //   <CircleComponent/>
      // </div>
  );
}

export default App;

