import { IoIosSearch } from "react-icons/io";
import { Button, Container, Input } from "./Navbar.style";
import { NavbarProps } from "../../interface";
import { useEffect } from "react";

const Navbar: React.FC<NavbarProps> = ({ query, onChange, onSubmit }) => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const button = document.querySelector("button");
      const input = document.querySelector("input");
      if (header && button && input) {
        header.classList.toggle("sticky", window.scrollY > 0);
        button.classList.toggle("small", window.scrollY > 0);
        input.classList.toggle("small", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
