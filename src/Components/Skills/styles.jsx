import styled from 'styled-components'
import { Colors } from '../../../variables'

export const StyleSection = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .active {
    display: block;
  }

  .disabled {
    display: none;
  }

  .tabs {
    width: 50%;
    height: 56px;
    background-color: ${Colors.backgroundTabs};
    border-radius: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__btn {
      padding: 12px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 10px;

      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-style: normal;

      &--cliked {
        background-color: ${Colors.lightBlue};
        color: ${Colors.colorWhite};
      }
    }
  }
`

export const Information = styled.div`
  margin-top: 20px;
  height: 400px;
  width: 60%;

  .information__my {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: stretch;
    gap: 20px;

    &__container {
      display: flex;
      align-items: center;

      span {
        color: ${Colors.colorWhite};
        font-size: 24px;
        margin-left: 8px;
      }
    }

    &__ability {
      p {
        color: ${Colors.colorWhite};
        font-size: 24px;
        display: inline-block;
        border-bottom: 1px solid ${Colors.lightBlue};
        margin-left: 8px;
      }

      span {
        color: ${Colors.colorWhite};
      }
    }
  }
`
export const Ability = styled.div`
  margin-top: 20px;
  width: 60%;
  height: 300px;

  h3 {
    margin: 20px 0;
    font-size: 24px;
    text-align: center;
    color: ${Colors.colorWhite};
    border-bottom: 1px solid ${Colors.lightBlue};
  }

  .ability__tec {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    &__my {
      display: flex;

      img {
        width: 96px;
        height: 96px;
        margin: 0px 10px;
        cursor: pointer;

        &:hover {
          transform: scale(1.2);
          transition: 0.7s ease;
        }
      }
    }
  }
`

export const Certificate = styled.div`
  margin-top: 20px;
  width: 80%;
  height: 700px;
  overflow: hidden;

  .slide-item {
    width: 100%;
    height: 600px;
    padding: 0px 10px;
  }

  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
  }

  .swiper-pagination-bullet-active {
    background-color: blue;
  }
`
