import { Colors } from '../../variables'
import { Breakpoints } from '../../breakpoint'

import styled from 'styled-components'

export const StyleAbout = styled.section`
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .__photograph {
    max-width: 600px;
    max-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__img {
      width: 100%;
      height: 100%;

      @media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.notebook}) {
        width: 100%;
        height: 100%;
      }
    }

    @media (min-width: ${Breakpoints.notebook}) and (max-width: ${Breakpoints.desktop}) {
      max-width: 400px;
      max-height: 400px;
    }

    @media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.notebook}) {
      width: 100%;
      height: 100%;
    }
  }

  .__me {
    width: 700px;
    height: 400px;
    border-radius: 30px;
    background-color: ${Colors.secundary};

    &__contact {
      width: 70%;
      height: 25%;
      margin: 0 auto;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .button__link {
        color: ${Colors.colorWhite};
        padding: 15px 20px;
        border-radius: 10px;
        text-decoration: none;
        border: 2px solid rgb(9, 245, 245);
        background: ${Colors.buttonPrymary};

        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-style: normal;

        &:hover {
          background: ${Colors.background};
          transition: 1s ease;
        }

        &__contact--me {
          padding: 15px 20px;
          border: none;
          outline: none;
          text-decoration: none;
          color: ${Colors.colorWhite};
          cursor: pointer;
          position: relative;
          z-index: 0;
          border-radius: 10px;

          font-family: 'Roboto', sans-serif;
          font-weight: 500;
          font-style: normal;

          &::before {
            content: '';
            background: linear-gradient(
              45deg,
              #ff0000,
              #ff7300,
              #fffb00,
              #48ff00,
              #00ffd5,
              #002bff,
              #7a00ff,
              #ff00c8,
              #ff0000
            );
            position: absolute;
            top: -5px;
            left: -6px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 9px);
            height: calc(100% + 8px);
            animation: glowingbn5 20s linear infinite;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            border-radius: 10px;
          }

          @keyframes glowing {
            0% {
              background-position: 0 0;
            }
            50% {
              background-position: 400% 0;
            }
            100% {
              background-position: 0 0;
            }
          }

          &:active::after {
            color: #000;
          }
          &:hover::before {
            opacity: 1;
          }

          &::after {
            z-index: -1;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: #191919;
            left: 0;
            top: 0;
            border-radius: 10px;
          }

          @media (max-width: ${Breakpoints.mobile}) {
            padding: 10px 15px;
          }

          @media (min-width: ${Breakpoints.mobileSmall
              .min}) and (max-width: ${Breakpoints.mobileSmall.max}) {
            padding: 8px;
          }
        }

        @media (max-width: ${Breakpoints.mobile}) {
          padding: 10px 15px;
        }

        @media (min-width: ${Breakpoints.mobileSmall
            .min}) and (max-width: ${Breakpoints.mobileSmall.max}) {
          padding: 8px;
        }
      }

      @media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.notebook}) {
        margin: 10px auto;
      }

      @media (max-width: ${Breakpoints.mobile}) {
        width: 100%;
        height: 50%;
        margin-bottom: 20px;
      }
    }

    @media (min-width: ${Breakpoints.notebook}) and (max-width: ${Breakpoints.desktop}) {
      max-width: 700px;
    }

    @media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.notebook}) {
      height: 100%;
      margin-bottom: 10px;
    }

    @media (max-width: ${Breakpoints.mobile}) {
      width: 95%;
      height: 100%;
      margin-bottom: 20px;
    }
  }

  @media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.notebook}) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    height: 100%;
    flex-direction: column;
  }
`
