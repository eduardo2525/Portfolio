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
    'É uma plataforma inovadora que conecta pessoas a uma ampla variedade de restaurantes e cardápios, oferecendo a conveniência de escolher o que comer no conforto de suas casas. Facilitando o acesso a refeições de diferentes culturas e tipos de cozinha.',
    'React e TypeScript, API para manipulação de dados, Navegação com React Router Dom, Aplicação de "styled-components" para estilizaçã, Gerenciamento de estados com Redux Toolkit',
    Efood,
    'https://github.com/eduardo2525/Efood',
    'https://efood-jet-five.vercel.app/'
  ),
  new Project(
    2,
    'Agenda de Contatos',
    'Permite ao usuário cadastrar informações como nome, e-mail e telefone. O usuário poderá visualizar, adicionar novos contatos e editar dados existentes, caso ocorram alterações, garantindo uma gestão simples e eficiente dos contatos.',
    'React, Gerenciamento de estados com Redux Toolkit, Aplicação de "styled-components" para estilizaçã',
    AgendaContato,
    'https://github.com/eduardo2525/Lista-de-contato',
    'https://lista-de-contato-sand.vercel.app/'
  ),
  new Project(
    3,
    'Previsão do Tempo',
    'Aplicação de previsão do tempo onde retorna à cidade escolhida, temperatura atual, máxima e mínima, umidade e vento.',
    'React, Api do openweathermap, Hooks (useState, useEffect), Biblioteca Styled Components',
    Previsao,
    'https://github.com/eduardo2525/Previsao_do_tempo',
    'https://previsao-do-tempo-opal-ten.vercel.app/'
  ),
  new Project(
    4,
    'Disney Plus',
    'Clone do Front-end do Disney Plus. Com foco em oferecer uma experiência intuitiva e visualmente atraente para os usuários. O projeto inclui Seção de Filmes e Séries e Combos de Planos',
    'HTML, SASS, JavaScript, Gulp (Plugins Gulp-imagemin, Gulp-sass, Gulp-uglify)',
    DisneyPlus,
    'https://github.com/eduardo2525/disney_Plus',
    'https://disney-plus-two-gamma.vercel.app/'
  ),
  new Project(
    5,
    'Calculadora de Médias',
    'Aplicação para calcular médias escolares. O usuário insere o nome da matéria e as notas do aluno, e o sistema calcula automaticamente a média, indicando se o aluno foi aprovado ou reprovado com base em critérios pré-definidos.',
    'HTML, SASS, javaScript, Gulp (Plugins Gulp-imagemin, Gulp-obfuscate, Gulp-sass, Gulp-sourcemaps, Gulp-uglify)',
    Calculadora,
    'https://github.com/eduardo2525/Calculadora_de_Medias',
    'https://calculadora-de-medias-mu.vercel.app/'
  )
]

export default ProjectData
