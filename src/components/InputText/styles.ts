import styled from 'styled-components';

import {Colors} from '../../styles/colors';

export const Container = styled.div`
  text-align: center;
`;

export const ImputStyle = styled.input<{ error?: boolean }>`
  background: white;
  border-radius: 5px;
  border: 1px solid ${props => props.error ? Colors.error : Colors.border};
  padding: 16px;
  width: 100%;
  color: #232129;
  margin-bottom: 10px;

  & + input {
    margin-top: 8px;
  }

  ${({disabled}) => disabled && `
    color: ${Colors.fontHover};
    border: 1px solid ${Colors.secondaryHover};
  `}
`;