import { IoIosSearch } from "react-icons/io";
import { Button, Container, Input } from "./Navbar.style";

const Navbar = () => {
  return (
    <Container>
      <Input type="text" placeholder="Search your movie" />
      <Button type="submit">
        <IoIosSearch style={{ fontSize: "30px" }} />
      </Button>
    </Container>
  );
};

export { Navbar };
