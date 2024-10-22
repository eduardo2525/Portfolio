import BackgroundCard from '../../Image/Project/background.jpg'
import { Colors } from '../../variables'
import { Breakpoints } from '../../breakpoint'

import styled from 'styled-components'

export const StyleProject = styled.section`
  height: 90vh;

  h2 {
    margin-bottom: 10px;
  }

  .project__container {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 20px;

    &__my {
      width: 350px;
      height: 546px;
      background: ${Colors.backgroundCard};
      border-radius: 30px;
      margin: 0 auto;

      &__background {
        position: relative;
        width: 100%;
        height: 50%;
        background-image: url(${BackgroundCard});
        background-size: 50%;
        border-radius: 30px 30px 0 0;

        img {
          width: 80%;
          border-radius: 15px;
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -40%);
          object-fit: cover;
          z-index: 1;
        }

        &__links {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -30%);
          z-index: 999;
          width: 150px;
          height: 60px;
          display: flex;
          justify-content: space-around;

          a {
            display: none;
            width: 60px;
            height: 60px;
            border-radius: 15px;
            background: ${Colors.buttonLinks};

            .svg {
              position: relative;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              fill: ${Colors.colorWhite};
            }
          }

          .appear {
            display: block;
          }
        }

        .front-end {
          width: 100px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          position: absolute;
          top: 10px;
          left: 20px;
          background-color: #00ffff;

          font-family: 'Roboto' sans-serif;
          font-weight: 700;
        }

        .front-end--active {
          width: 100px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          position: absolute;
          top: 10px;
          left: 20px;
          color: white;
          background-color: black;

          font-family: 'Roboto' sans-serif;
          font-weight: 700;
        }
      }
      &__background::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 30px 30px 0 0;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.7)
        );
      }

      &__description {
        width: 100%;
        height: 50%;
        border-radius: 0 0 30px 30px;
        padding: 20px;

        p {
          font-size: 20px;
          margin-bottom: 16px;
          color: ${Colors.colorWhite};
        }

        ul {
          list-style-type: disc;
          padding-left: 32px;

          li {
            color: ${Colors.colorWhite};
            font-size: 18px;

            &::marker {
              font-size: 20px;
              color: black;
            }
          }
        }
      }

      @media (min-width: ${Breakpoints.notebook}) and (max-width: ${Breakpoints.desktop}) {
        width: 80%;
      }

      @media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.notebook}) {
        width: 90%;
      }

      @media (min-width: ${Breakpoints.mobileSmall.min}) and (max-width: ${Breakpoints.mobileSmall.max}) {
        width: 95%;
      }
    }

    @media (min-width: ${Breakpoints.notebook}) and (max-width: ${Breakpoints.desktop}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.notebook}) {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${Breakpoints.mobile}) {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }
`
