import React from "react";

const Test = () => {
  const isGoingOut = false;

  return (
    <div className="counter">
      <div className="counter--count">
        <h1>{isGoingOut ? "yes" : "no"}</h1>
        <p>
        </p>
      </div>
    </div>
  );
};

export default Test;
