import styled, {keyframes} from "styled-components";

import {Colors} from '../../styles/colors';

export const Container = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid ${Colors.primary};
  border-right: 2px solid ${Colors.primary};
  border-bottom: 2px solid ${Colors.primary};
  border-left: 4px solid ${Colors.background};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block;
  margin-top: 5px;
`;
