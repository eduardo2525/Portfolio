import { useLocation } from 'react-router-dom'
import { StyleHeader, StyleNav, StyleLink } from './styles'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname == path

  return (
    <StyleHeader>
      <div className="__container container">
        <h1 className="__title">Eduardo Silva</h1>
        <StyleNav>
          <ul className="__list">
            <li className="__list__item">
              <StyleLink to="/" className={isActive('/') ? 'active' : ''}>
                Home
              </StyleLink>
            </li>
            <li className="__list__item">
              <StyleLink
                to="/Sobre"
                className={isActive('/Sobre') ? 'active' : ''}
              >
                Sobre Mim
              </StyleLink>
            </li>
            <li className="__list__item">
              <StyleLink
                to="/Projetos"
                className={isActive('/Projetos') ? 'active' : ''}
              >
                Projetos
              </StyleLink>
            </li>
          </ul>
        </StyleNav>
      </div>
    </StyleHeader>
  )
}

export default Header
