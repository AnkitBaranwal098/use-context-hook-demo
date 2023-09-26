import React,{useContext} from "react";
import { GlobalInfo } from "./App";

const SuperChild = ()=>{

    const {appcolor, getDay} = useContext(GlobalInfo);
    const day = "Sunday"
    // console.log(`Super child -> ${appcolor}`)
    return (
        <div>
            <h1 style={{color: appcolor}}>SuperChild Component</h1>
            <button onClick={()=>{getDay(day)}}>
                Click Me
            </button>
        </div>
    )
}

export default SuperChild;