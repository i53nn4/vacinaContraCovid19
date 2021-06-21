import styled from 'styled-components';

import {Colors} from '../../styles/colors';

export const Container = styled.div`
  align-items: stretch;

  strong {
    font-weight: bold;
  }
`;

export const Content = styled.div<{ show?: boolean }>`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;

  h1, h2, h3, h4, h5 {
    margin-bottom: 10px;
  }

  span {
    display: flex;
    margin-bottom: 5px;
  }

  fieldset {
    text-align: left;
  }

  form {
    margin: 10px 0;
    width: 100%;
    text-align: center;

    label {
      display: flex;
      margin-bottom: 5px;
    }

    a {
      color: ${Colors.primary};
      text-decoration: none;
      transition: color 0.2s;
    }
  }
`;

export const MoreDetails = styled.div<{ show?: boolean }>`
  display: ${props => props.show ? 'inline-block' : 'none'};
  margin-top: 15px;
  width: 100%;

  a {
    background: ${Colors.secondary};
    width: 100%;
    padding: 20px;
    border-radius: 7px;
    display: block;
    text-decoration: none;
    transition: transform 0.6s;

    &:hover {
      transform: translateX(-10px);
    }

    & + a {
      margin-top: 19px;
    }

    div {
      margin-bottom: 15px;

      strong {
        font-size: 25px;
        color: ${Colors.font};
      }

      p {
        font-size: 16px;
        margin-top: 6px;
        color: ${Colors.font};
      }
    }

    svg {
      margin-top: 6px;
      margin-left: 50%;
      color: ${Colors.font};

      &:hover {
        color: ${Colors.fontHover};
      }
    }
  }
`;
