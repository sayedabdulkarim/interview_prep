import React from "react";

const EventDelegationComp = () => {
  const handleClick = (e) => {
    console.log(e.target, " e.target");
  };
  return (
    <div>
      <ul onClick={handleClick}>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li>Four</li>
        <li>Five</li>
      </ul>
    </div>
  );
};

export default EventDelegationComp;
