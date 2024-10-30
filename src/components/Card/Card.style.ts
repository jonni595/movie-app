import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover > img {
    transform: scale(1.1);
    filter: brightness(50%);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
  transition: all 0.3s ease-in-out;
`;

export const Title = styled.h3`
  color: #f5f5f5;
  font-size: 20px;
`;

export const OverviewContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  & > * {
    transform: translateY(20px);
    transition: all 0.3s ease-in-out;
  }

  &:hover > * {
    transform: translateY(0);
  }
`;

export const Overview = styled.p`
  padding: 10px;
  font-size: 14px;
`;

export const Vote = styled.span`
  color: #e1b322;
  font-size: 14px;
`;

export const Language = styled(Vote)`
  font-size: 12px;
  text-transform: uppercase;
  color: #f5f5f5;
`;

export const VoteContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
