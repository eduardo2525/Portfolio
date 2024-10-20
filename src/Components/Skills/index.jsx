import { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import { FcSearch } from 'react-icons/fc'
import { IoPersonSharp } from 'react-icons/io5'
import { BsFillMortarboardFill } from 'react-icons/bs'
import { FaEnvelopeCircleCheck } from 'react-icons/fa6'
import { FaHouseUser } from 'react-icons/fa'
import { FaEarthAmericas } from 'react-icons/fa6'

import Html from '../../Image/Technologies/html-5-svgrepo-com.png'
import Css from '../../Image/Technologies/css-svgrepo-com.png'
import Javascript from '../../Image/Technologies/javascript-svgrepo-com.png'
import Bootstrap from '../../Image/Technologies/bootstrap-fill-svgrepo-com.png'
import Sass from '../../Image/Technologies/sass-svgrepo-com.png'
import Less from '../../Image/Technologies/less-svgrepo-com.png'
import Typescript from '../../Image/Technologies/typescript-svgrepo-com.png'
import Vue from '../../Image/Technologies/vue-svgrepo-com.png'
import React from '../../Image/Technologies/react-svgrepo-com.png'
import Git from '../../Image/Technologies/git-svgrepo-com.png'
import Gulp from '../../Image/Technologies/gulp-svgrepo-com.png'
import Grunt from '../../Image/Technologies/grunt-svgrepo-com.png'

import FrontEndEngineer from '../../Image/Certificate/Certificado Engenheiro Front end.jpeg'
import Logic from '../../Image/Certificate/Certificado de logica de programação.jpg'
import HtmlCss from '../../Image/Certificate/Certificado HTML e CSS.jpg'
import JavascriptCertificate from '../../Image/Certificate/Certificado javaScript.jpg'
import SassCertificate from '../../Image/Certificate/Certificado Sass.jpg'
import TypescriptCertificate from '../../Image/Certificate/Certificado TypeScript.jpg'

import { StyleSection, Information, Ability, Certificate } from './styles'
import { Colors } from '../../variables'

const Skills = () => {
  const [tabsBtn, steTabsBtn] = useState('informacao-pessoal')
  const [isVisible, setIsVisible] = useState('informacao-pessoal')

  const tabs = (tab) => {
    steTabsBtn(tab)
    setIsVisible(tab)
  }

  const certificates = [
    { id: 1, image: FrontEndEngineer },
    { id: 2, image: Logic },
    { id: 3, image: HtmlCss },
    { id: 4, image: JavascriptCertificate },
    { id: 5, image: SassCertificate },
    { id: 6, image: TypescriptCertificate }
  ]

  return (
    <StyleSection className="container">
      <h1 className="primary__title">SOBRE MIM</h1>
      <div className="tabs">
        <button
          className={`tabs__btn ${tabsBtn === 'informacao-pessoal' ? 'tabs__btn--cliked' : ''}`}
          onClick={() => tabs('informacao-pessoal')}
        >
          Informação pessoal
        </button>
        <button
          className={`tabs__btn ${tabsBtn === 'habilidades' ? 'tabs__btn--cliked' : ''}`}
          onClick={() => tabs('habilidades')}
        >
          Habilidades
        </button>
        <button
          className={`tabs__btn ${tabsBtn === 'certificados' ? 'tabs__btn--cliked' : ''}`}
          onClick={() => tabs('certificados')}
        >
          Certificados
        </button>
      </div>
      <Information
        className={`${isVisible === 'informacao-pessoal' ? 'active' : 'disabled'}`}
      >
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h2 className="title__gray">Estudo front-End a Mais de 1 ano</h2>
          <p className="paragraph">
            <FcSearch size={20} />
            Motivado pela curiosidade incessante, me dedico à codificação,
            explorando novos projetos e aprendendo constantemente.
          </p>
          <div className="information__my">
            <div className="information__my__container">
              <IoPersonSharp size={25} color={`${Colors.lightBlue}`} />
              <span>Eduardo Silva</span>
            </div>
            <div className="information__my__container">
              <BsFillMortarboardFill size={25} color={`${Colors.lightBlue}`} />
              <span>Desenvolvedor front-end</span>
            </div>
            <div className="information__my__container">
              <FaEnvelopeCircleCheck size={25} color={`${Colors.lightBlue}`} />
              <span>eduardojoaored3101@gmail.com</span>
            </div>
            <div className="information__my__container">
              <FaHouseUser size={25} color={`${Colors.lightBlue}`} />
              <span>Igarassu, Pernambuco, Brasil</span>
            </div>
            <div className="information__my__ability">
              <FaEarthAmericas size={20} color={`${Colors.lightBlue}`} />
              <p>Habilidade linguística</p>
              <br />
              <span>Inglês(Técnico)</span>
            </div>
          </div>
        </div>
      </Information>
      <Ability
        className={`${isVisible === 'habilidades' ? 'active' : 'disabled'}`}
      >
        <h2 className="title__gray">Meu Conjunto de Habilidades</h2>
        <h3>Habilidades</h3>
        <div className="ability__tec">
          <div className="ability__tec__my">
            <img src={Html} alt="imagem do Html" />
            <img src={Css} alt="imagem do Css" />
            <img src={Javascript} alt="imagem do Javascript" />
          </div>
          <div className="ability__tec__my">
            <img src={Bootstrap} alt="imagem do Bootstrap" />
            <img src={Sass} alt="imagem do Sass" />
            <img src={Less} alt="" />
          </div>
          <div className="ability__tec__my">
            <img src={Typescript} alt="imgagem do Typescript" />
            <img src={Vue} alt="imagem do Vue" />
            <img src={React} alt="imagem do React" />
          </div>
          <div className="ability__tec__my">
            <img src={Git} alt="imagem do Git" />
            <img src={Gulp} alt="imagem do Gulp" />
            <img src={Grunt} alt="imagem do Grunt" />
          </div>
        </div>
      </Ability>
      <Certificate
        className={`${isVisible === 'certificados' ? 'active' : 'disabled'}`}
      >
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true
          }}
        >
          {certificates.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="slider" className="slide-item" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Certificate>
    </StyleSection>
  )
}

export default Skills
