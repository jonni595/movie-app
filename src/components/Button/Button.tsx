import { FaRightToBracket } from "react-icons/fa6";
import { Button } from "./Button.style";
import type { ButtonProps } from "../../interface";

const NextButton: React.FC<ButtonProps> = ({ onNextClick }) => {
  return (
    <Button onClick={onNextClick}>
      Next <FaRightToBracket />
    </Button>
  );
};

export { NextButton };
