import { createContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

// import Style from "./Style";

 export const GlobalInfo=createContext();

function App() {

  const getPizza=(pizza)=>{
    console.log(pizza)
  }

  const [color]=useState('red')
  return (
    <GlobalInfo.Provider value={{appColor:color,getData:getPizza}}>
    <div>
      <h1>App COmponent</h1>
      <Header />
      <Footer/>
      
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
