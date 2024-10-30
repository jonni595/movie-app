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
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background: #503687;
    color: #896ec5;
    // opacity: 0.8;
  }
`;
