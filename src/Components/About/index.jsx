import { StyleAbout } from './styles'
import Eduardo from '../../Image/Eduardo.png'
import CV from '../../../public/Eduardo-CV.pdf'

const About = () => {
  return (
    <StyleAbout
      className="container"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <div className="__photograph">
        <img className="__photograph__img" src={Eduardo} alt="" />
      </div>
      <div className="__me">
        <h1 className="primary__title">Especialização em Front-End</h1>
        <p className="paragraph">DESENVOLVEDOR FRONT-END</p>
        <h2 className="secundary__title">Olá, meu nome é Eduardo Silva</h2>
        <p className="paragraph">
          Desenvolvedor Front-End com foco pronunciado e entusiasmo pela
          construção de soluções front-end poderosas.
        </p>

        <div className="__me__contact">
          <a className="button__link" href={CV} target="_blank">
            Download CV
          </a>
          <a
            className="button__link__contact--me"
            href="https://www.linkedin.com/in/eduardo-desenvolvedor-front-end/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="button__link__contact--me"
            href="https://github.com/eduardo2525"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </StyleAbout>
  )
}

export default About
