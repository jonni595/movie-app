import { styled } from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background: #7e60bf;
  border: none;
  border-radius: 5px;
  color: #f5f5f5;
  cursor: pointer;
  font-size: 17px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #21052d;
    color: #7e60bf;
    opacity: 0.8;
  }
`;
