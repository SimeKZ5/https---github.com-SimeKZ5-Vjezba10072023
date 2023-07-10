import React, { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return <button onClick={handleClick}>{isToggled ? "ON" : "OFF"}</button>;
};

export default ToggleButton;
