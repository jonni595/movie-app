import type { MainProps } from "../interface";
import { Wrapper } from "./Main.style";

const Main: React.FC<MainProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Main;
