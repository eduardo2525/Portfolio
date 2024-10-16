import { createGlobalStyle } from 'styled-components'
import { Colors } from './variables'

export const StylesGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    background-color: ${Colors.background};
  }

  .container {
    max-width: 1366px;
    margin: 0 auto;
  }

  .primary__title {
    text-align: center;
    font-size: 48px;
    color: ${Colors.colorWhite};
    border-radius: 30px 30px 0 0;

    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .secundary__title {
    color: ${Colors.colorWhite};
    width: 80%;
    position: relative;
    left: 15px;
    font-size: 30px;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  .paragraph {
    padding: 32px;
    color: ${Colors.colorWhite};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .title__gray {
    font-size: 40px;
    text-align: center;
    color: ${Colors.titleGray};

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: oblique;
  }

  .paragraph__project {
    font-size: 20px;
    padding-bottom: 10px;
    color: ${Colors.lightBlue};

    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-style: normal;
  }
`
