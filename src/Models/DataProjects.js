import Project from './Project'

import Efood from '../Image/Project/Efood.png'
import AgendaContato from '../Image/Project/Agenda de contatos.png'
import Previsao from '../Image/Project/Previsão.png'
import DisneyPlus from '../Image/Project/disney-plus.png'
import Calculadora from '../Image/Project/Calculadora de Médias -.png'

const ProjectData = [
  new Project(
    1,
    'Efood',
    [
      'React e TypeScript',
      'API para manipulação de dados',
      'Navegação com React Router Dom',
      'Aplicação de "styled-components" para estilizaçã',
      'Gerenciamento de estados com Redux Toolkit'
    ],
    Efood,
    'https://github.com/eduardo2525/Efood',
    'https://efood-jet-five.vercel.app/'
  ),
  new Project(
    2,
    'Agenda de Contatos',
    [
      'React',
      'Gerenciamento de estados com Redux Toolkit',
      'Aplicação de "styled-components" para estilizaçã'
    ],
    AgendaContato,
    'https://github.com/eduardo2525/Lista-de-contato',
    'https://lista-de-contato-sand.vercel.app/'
  ),
  new Project(
    3,
    'Previsão do Tempo',
    [
      'React',
      'Api do openweathermap',
      'Hooks (useState, useEffect)',
      'Biblioteca Styled Components'
    ],
    Previsao,
    'https://github.com/eduardo2525/Previsao_do_tempo',
    'https://previsao-do-tempo-opal-ten.vercel.app/'
  ),
  new Project(
    4,
    'Disney Plus',
    [
      'HTML',
      'SASS',
      'JavaScript',
      'Gulp',
      'Plugins Gulp-imagemin, Gulp-sass, Gulp-uglify'
    ],
    DisneyPlus,
    'https://github.com/eduardo2525/disney_Plus',
    'https://disney-plus-two-gamma.vercel.app/'
  ),
  new Project(
    5,
    'Calculadora de Médias',
    [
      'HTML',
      'SASS',
      'javaScript',
      'Gulp',
      'Plugins Gulp-imagemin, Gulp-obfuscate, Gulp-sass, Gulp-sourcemaps, Gulp-uglify'
    ],
    Calculadora,
    'https://github.com/eduardo2525/Calculadora_de_Medias',
    'https://calculadora-de-medias-mu.vercel.app/'
  )
]

export default ProjectData
