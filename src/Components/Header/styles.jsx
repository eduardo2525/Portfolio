import { Link } from 'react-router-dom'

import { Colors } from '../../../variables'
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
  }

  .__title {
    font-size: 64px;
    color: ${Colors.prymary};
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
`
