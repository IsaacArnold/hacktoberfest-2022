import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
