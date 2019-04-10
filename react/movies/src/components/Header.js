import React from "react";

const Header = function() {
  return (
    <header>
      <h1>Movies</h1>
    </header>
  );
};

export const SubHeader = function(props) {
  return (
    <h3>{props.case === "upper" ? props.title.toUpperCase() : props.title}</h3>
  );
};

export default Header;
