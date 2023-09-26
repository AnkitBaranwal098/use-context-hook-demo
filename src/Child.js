import React, { useContext } from "react";
// import { GlobalInfo } from "./App";

import SuperChild from "./SuperChild";

const Child = () => {
//   const { appcolor } = useContext(GlobalInfo);
//   console.log(appcolor);
  return (
    <div>
      <h1 
    //   style={{ color: appcolor }}
      >
        Child Component</h1>
      <SuperChild />
    </div>
  );
};

export default Child;
