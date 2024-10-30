import { styled, keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(80px);
  }
`;

export const Loader = styled.div`
  display: flex;
  position: relative;
  width: 96px;
  height: 16px;

  & > div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: 0px;
    background: #ffffff;
    animation: ${rotate} alternate 1.2s infinite;
    animation-timing-function: cubic-bezier(0.43, 0.03, 0.53, 0.93);
  }

  & > div:nth-child(2) {
    animation-delay: 12ms;
    opacity: 0.3;
    width: 16px;
    height: 16px;
    top: 0px;
  }

  & > div:nth-child(3) {
    animation-delay: 24ms;
    opacity: 0.28;
    width: 15.8px;
    height: 15.8px;
    top: 0.1px;
  }
  & > div:nth-child(4) {
    animation-delay: 36ms;
    opacity: 0.27;
    width: 15.6px;
    height: 15.6px;
    top: 0.2px;
  }
  & > div:nth-child(5) {
    animation-delay: 48ms;
    opacity: 0.26;
    width: 15.4px;
    height: 15.4px;
    top: 0.3px;
  }
  & > div:nth-child(6) {
    animation-delay: 60ms;
    opacity: 0.24;
    width: 15.2px;
    height: 15.2px;
    top: 0.4px;
  }
  & > div:nth-child(7) {
    animation-delay: 72ms;
    opacity: 0.22;
    width: 15px;
    height: 15px;
    top: 0.5px;
  }
  & > div:nth-child(8) {
    animation-delay: 84ms;
    opacity: 0.21;
    width: 14.8px;
    height: 14.8px;
    top: 0.6px;
  }
  & > div:nth-child(9) {
    animation-delay: 96ms;
    opacity: 0.2;
    width: 14.6px;
    height: 14.6px;
    top: 0.7px;
  }
  & > div:nth-child(10) {
    animation-delay: 108ms;
    opacity: 0.18;
    width: 14.4px;
    height: 14.4px;
    top: 0.8px;
  }
  & > div:nth-child(11) {
    animation-delay: 120ms;
    opacity: 0.16;
    width: 14.2px;
    height: 14.2px;
    top: 0.9px;
  }
  & > div:nth-child(12) {
    animation-delay: 132ms;
    opacity: 0.15;
    width: 14px;
    height: 14px;
    top: 1px;
  }
  & > div:nth-child(13) {
    animation-delay: 144ms;
    opacity: 0.14;
    width: 13.8px;
    height: 13.8px;
    top: 1.1px;
  }
  & > div:nth-child(14) {
    animation-delay: 156ms;
    opacity: 0.12;
    width: 13.6px;
    height: 13.6px;
    top: 1.2px;
  }
  & > div:nth-child(15) {
    animation-delay: 168ms;
    opacity: 0.1;
    width: 13.4px;
    height: 13.4px;
    top: 1.3px;
  }
  & > div:nth-child(16) {
    animation-delay: 180ms;
    opacity: 0.09;
    width: 13.2px;
    height: 13.2px;
    top: 1.4px;
  }
  & > div:nth-child(17) {
    animation-delay: 192ms;
    opacity: 0.08;
    width: 13px;
    height: 13px;
    top: 1.5px;
  }
  & > div:nth-child(18) {
    animation-delay: 204ms;
    opacity: 0.06;
    width: 12.8px;
    height: 12.8px;
    top: 1.6px;
  }
  & > div:nth-child(19) {
    animation-delay: 216ms;
    opacity: 0.04;
    width: 12.6px;
    height: 12.6px;
    top: 1.7px;
  }
  & > div:nth-child(20) {
    animation-delay: 228ms;
    opacity: 0.03;
    width: 12.4px;
    height: 12.4px;
    top: 1.8px;
  }
`;
