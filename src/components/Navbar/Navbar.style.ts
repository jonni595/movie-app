import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  position: sticky;
  background: #21052d;
  padding: 20px 0;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all 0.3s ease;

  &.sticky {
    padding: 10px 0;
    background: #21052d;
    height: 70px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Input = styled.input`
  width: 40%;
  height: 60px;
  background: none;
  border: none;
  border-bottom: 2px solid #21052d;
  outline: none;
  color: #f5f5f5;
  padding: 0 10px;
  font-size: 40px;
  font-family: "Manrope", sans-serif;
  transition: all 0.3s ease-in-out;

  &.small {
    height: 40px;
    font-size: 30px;
  }

  &:hover {
    border-bottom: 2px solid #7e60bf;
  }

  &::placeholder {
    color: #ccc;
    opacity: 0.7;
  }

  &:focus {
    width: 60%;
    border-bottom: 2px solid #7e60bf;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: #6c48c5;
  color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease-in-out;

  &.small {
    padding: 5px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
