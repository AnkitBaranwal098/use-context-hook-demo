import React, { createContext, useState } from "react";
import "./App.css";
import Child from "./Child";

const GlobalInfo = createContext();

function App() {
  const [color, setColor] = useState("green");
  const [day, setDay] = useState("Monday");
  const getDay = (item)=>{
    console.log(item);
    setDay(item)
  }

  return (
    <GlobalInfo.Provider value={{ appcolor: color, getDay:getDay }}>
      <div className="App">
        <h1>App Component {day}</h1>
        <Child />
      </div>
    </GlobalInfo.Provider>
  );
}

export default App;
export {GlobalInfo};
