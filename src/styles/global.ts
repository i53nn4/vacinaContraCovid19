import {createGlobalStyle} from 'styled-components';

import {Colors} from "./colors";

// @ts-ignore
import UniSansThin from "../assets/fonts/UniSansThin.otf";
// @ts-ignore
import UniSansThinItalic from "../assets/fonts/UniSansThinItalic.otf";

// @ts-ignore
import UniSansHeavy from "../assets/fonts/UniSansHeavy.otf";
// @ts-ignore
import UniSansHeavyItalic from "../assets/fonts/UniSansHeavyItalic.otf";

export default createGlobalStyle`
  @font-face {
    font-family: 'UniSansThin';
    font-style: normal;
    font-weight: 400;
    src: url(${UniSansThin});
  }

  @font-face {
    font-family: 'UniSansThinItalic';
    font-style: normal;
    font-weight: 400;
    src: url(${UniSansThinItalic});
  }

  @font-face {
    font-family: 'UniSansHeavy';
    font-style: normal;
    font-weight: 400;
    src: url(${UniSansHeavy});
  }

  @font-face {
    font-family: 'UniSansHeavyItalic';
    font-style: normal;
    font-weight: 400;
    src: url(${UniSansHeavyItalic});
  }

  * {
    outline: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${Colors.background};
  }

  body, button, input {
    font-family: Ubuntu, sans-serif;
    font-size: 14px;
    font-weight: 300;
  }

  h1, h2, h3, h4, h5 {
    font-family: UniSansThin, sans-serif;
  }

  #root {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 20px;
  }

  button {
    cursor: pointer;
  }
`;
