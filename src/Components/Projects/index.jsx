import ProjectData from '../../Models/DataProjects'
import { useEffect, useState } from 'react'

import { StyleProject } from './styles'

const Projects = () => {
  const [mouse, setMouse] = useState(null)
  const [mobileActive, setMobileActive] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = window.innerWidth

      if (mobileWidth <= 768) {
        setMobileActive(true)

        const timer = setTimeout(() => {
          setMobileActive(false)
        }, 5000);

        return () => clearTimeout(timer)
      } else {
        setMobileActive(false)
      }
    };

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  return (
    <StyleProject
      className="container"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      {mobileActive && (
        <div className="alert">
          <div className="alert__header">
            Atenção
          </div>
          <div className="alert__body">
            <p>Para acessar os links do (Github e Deploy) dos projetos, clique em cada um dos cards.</p>
          </div>
      </div>
      )}
      <h2 className="title__gray">Meus Projetos</h2>
      <div className="project__container">
        {ProjectData.map((item, index) => (
          <div
            className="project__container__my"
            key={index}
            onMouseOver={() => setMouse(index)}
            onMouseLeave={() => setMouse(null)}
          >
            <div className="project__container__my__background">
              <img src={item.image} alt={item.title} />
              <div className="project__container__my__background__links">
                <a
                  href={item.linkGit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mouse === index ? 'appear' : ''}
                >
                  <svg
                    className="svg"
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48px"
                    height="48px"
                  >
                    <path
                      d="M12 2A10 10 0 1 0 12 22A10 10 0 1 0 12 2Z"
                      opacity=".3"
                    />
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                  </svg>
                </a>
                <a
                  href={item.linkDeploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mouse === index ? 'appear' : ''}
                >
                  <svg
                    className="svg"
                    id="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="40px"
                    height="40px"
                  >
                    <path d="M 4 4 L 4 44 A 2.0002 2.0002 0 0 0 6 46 L 44 46 A 2.0002 2.0002 0 0 0 46 44 L 46 32 L 42 32 L 42 42 L 8 42 L 8 4 L 4 4 z M 35.978516 4.9804688 A 2.0002 2.0002 0 0 0 34.585938 8.4140625 L 37.171875 11 L 36.048828 11 C 25.976906 10.74934 19.618605 12.315463 15.953125 16.726562 C 12.287645 21.137662 11.831327 27.512697 12 36.039062 A 2.0003814 2.0003814 0 1 0 16 35.960938 C 15.835673 27.654299 16.533777 22.2844 19.029297 19.28125 C 21.524817 16.2781 26.334094 14.76066 35.951172 15 L 35.974609 15 L 37.171875 15 L 34.585938 17.585938 A 2.0002 2.0002 0 1 0 37.414062 20.414062 L 43.236328 14.591797 A 2.0002 2.0002 0 0 0 43.619141 14.208984 L 44.828125 13 L 43.619141 11.791016 A 2.0002 2.0002 0 0 0 43.228516 11.400391 L 37.414062 5.5859375 A 2.0002 2.0002 0 0 0 35.978516 4.9804688 z" />
                  </svg>
                </a>
              </div>
              <div
                className={mouse === index ? 'front-end--active' : 'front-end'}
              >
                Front-End
              </div>
            </div>
            <div className="project__container__my__description">
              <h3 className="paragraph__project">{item.title}</h3>
              <p>Tecnologias utilizadas</p>
              <ul>
                {item.technologies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </StyleProject>
  )
}

export default Projects
