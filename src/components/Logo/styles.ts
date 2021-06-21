import styled from 'styled-components';

export const LogoStyle = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  min-width: 200px;
  max-width: 200px !important;
  height: auto;
  margin-bottom: 30px;
  transition: transform 0.8s;

  &:hover {
    transform: translateY(5px);
  }
`;