import { IoIosSearch } from "react-icons/io";
import { Button, Container, Input } from "./Navbar.style";
import { NavbarProps } from "../../interface";

const Navbar: React.FC<NavbarProps> = ({ query, onChange, onSubmit }) => {
  return (
    <Container>
      <Input
        type="text"
        value={query}
        onChange={onChange}
        placeholder="Search your movie"
      />
      <Button type="submit" onClick={onSubmit}>
        <IoIosSearch style={{ fontSize: "30px" }} />
      </Button>
    </Container>
  );
};

export { Navbar };
