import React, { useContext } from "react";
import { GlobalInfo } from "./App";
import SuperChild from "./SuperChild";
const Header = () => {
  const { appColor } = useContext(GlobalInfo);
  console.log(appColor);
  return (
    <div>
      <h1 style={{ color: appColor }}>I am header</h1>
      <SuperChild />
    </div>
  );
};
export default Header;
