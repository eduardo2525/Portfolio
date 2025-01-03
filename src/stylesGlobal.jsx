import { createGlobalStyle } from 'styled-components'
import { Colors } from './variables'
import { Breakpoints } from './breakpoint'

export const StylesGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${Colors.background};
  }

  body::-webkit-scrollbar {
    display: none;
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

    @media (max-width: ${Breakpoints.mobile}) {
      font-size: 24px;
    }

    @media (min-width: ${Breakpoints.notebook}) and (max-width: ${Breakpoints.desktop}) {
      font-size: 40px;
    }
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

    @media (max-width: ${Breakpoints.mobile}) {
      font-size: 22px;
      width: 90%;
    }
  }

  .paragraph {
    padding: 32px;
    color: ${Colors.colorWhite};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: italic;

    @media (max-width: ${Breakpoints.mobile}) {
      font-size: 16px;
      padding: 20px;
    }
  }

  .title__gray {
    font-size: 40px;
    text-align: center;
    color: ${Colors.titleGray};

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: oblique;

    @media (max-width: ${Breakpoints.mobile}) {
      font-size: 24px;
    }
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
