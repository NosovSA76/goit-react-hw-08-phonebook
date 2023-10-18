import { useState } from "react";
import { VisibleNoVisibleButton } from "./showButton.styled";

export const ShowButton = ({ contactCount, onButtonChange }) => {
  const [isHidden, setIsHidden] = useState(true);

  const handleButtonClick = () => {
    setIsHidden(!isHidden);
    onButtonChange();
  };

  return (

      <VisibleNoVisibleButton onClick={handleButtonClick}>
        {isHidden ? "Show up" : "Hide"}
      </VisibleNoVisibleButton>

  );
};
