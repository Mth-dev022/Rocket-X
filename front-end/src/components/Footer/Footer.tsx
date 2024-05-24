import React from 'react'
import { Container } from './styles'

import Detail01 from '../../assets/Images/footer_images/detail01.svg'
import Detail02 from '../../assets/Images/footer_images/detail02.svg'
import Logo from '../../assets/Images/footer_images/logoWhite.svg'

import { FaLinkedin } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { SiTermius } from "react-icons/si";

const Footer = () => {
  return (
    <Container>
        <div className='all-content'> 

            <div className='card'>
            Preparado para encarar esse desafio ?
            <img className='icon01' src={Detail01} />
            <img className='icon02' src={Detail02} />
            </div>

            <div className='content'>
                <a href='#'>
                    <img className='logo' src={Logo} />
                </a>
                <p className='about-my-job'>Quer conhecer melhor o trabalho de quem desenvolveu esse site ? Me siga nas redes socias abaixo...</p>
                <div className='icons-container'>
                    <div className='icon-circle'>
                    <a href='https://www.linkedin.com/in/matheus-souza-87336723a/'>
                        <FaLinkedin className='icon'/>
                    </a>
                    </div>
                    <div className='icon-circle'>
                    <a href='https://github.com/Mth-dev022'>
                        <FaGithubAlt className='icon'/>
                    </a>
                    </div>
                    <div className='icon-circle'>
                    <a href='https://portifolio-lime-chi.vercel.app/'>
                        <SiTermius className='icon'/>
                    </a>
                    </div>
                </div>  
            </div>
            <hr style={{marginTop:"3rem"}}></hr>
            <p className='copyright'>Copyright © Rocket X | Designed by Matheus Souza </p>
      </div>
    </Container>
  )
}

export default Footer
