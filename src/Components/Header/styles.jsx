import { Link } from 'react-router-dom'

import { Colors } from '../../variables'
import { Breakpoints } from '../../breakpoint'

import styled from 'styled-components'

export const StyleHeader = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;

  .__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.notebook}) {
      justify-content: space-around;
    }

    @media (max-width: ${Breakpoints.mobile}) {
      flex-direction: column;
    }
  }

  .__title {
    font-size: 64px;
    color: ${Colors.prymary};

    @media (min-width: ${Breakpoints.tablet}) and (max-width: ${Breakpoints.notebook}) {
      font-size: 48px;
    }

    @media (max-width: ${Breakpoints.mobile}) {
      font-size: 40px;
    }
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 100%;
    height: 100%;
  }
`

export const StyleNav = styled.nav`
  .__list {
    display: flex;
    list-style: none;
    gap: 20px;
    padding: 5px;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      padding: 10px;
    }

    @media (max-width: ${Breakpoints.mobile}) {
      gap: 10px;
    }
  }
`

export const StyleLink = styled(Link)`
  font-size: 30px;
  color: ${Colors.colorLinks};
  text-decoration: none;
  padding: 4px 4px;

  &:hover {
    color: ${Colors.prymary};
    cursor: pointer;
  }

  &.active {
    color: ${Colors.colorWhite};
    background-color: ${Colors.secundary};
    border-radius: 15px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 24px;
  }

  @media (min-width: ${Breakpoints.mobileSmall.min}) and (max-width: ${Breakpoints.mobileSmall.max}) {
    font-size: 20px;
  }
`
