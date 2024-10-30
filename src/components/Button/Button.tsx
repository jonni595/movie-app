import { Button } from "./Button.style";
import type { ButtonProps } from "../../interface";

const NextButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  Icon,
  direction,
}) => {
  return (
    <Button onClick={onClick}>
      {direction === "prev" && <Icon />}
      {children}
      {direction === "next" && <Icon />}
    </Button>
  );
};

export { NextButton };
