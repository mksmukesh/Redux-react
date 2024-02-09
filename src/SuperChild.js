import React, { useContext } from "react";
import { GlobalInfo } from "./App";

const SuperChild = () => {
  const { appColor,getData } = useContext(GlobalInfo);
  console.log(appColor);
  const pizza="dominos";
  return (
    <div>
      <h1 style={{ color: appColor }}>SuperChild Component</h1>
      <button onClick={()=>getData(pizza)}>Click Me</button>
    </div>
  );
};
export default SuperChild;
