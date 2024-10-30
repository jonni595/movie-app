import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100px;
  max-width: 1200px;
  margin: 0 auto;
  position: sticky;
  top: 0;
`;

export const Input = styled.input`
  width: 40%;
  height: 60px;
  background: none;
  border: none;
  border-bottom: 2px solid #21052d;
  outline: none;
  color: #f5f5f5;
  padding: 8px 10px;
  font-size: 50px;
  font-family: "Manrope", sans-serif;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 2px solid #7e60bf;
  }

  &::placeholder {
    color: #ccc;
    opacity: 0.7;
  }

  &:focus {
    width: 70%;
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

  &:hover {
    opacity: 0.8;
  }
`;
