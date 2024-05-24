import { useState, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import { Container } from './styles';
import { Card } from './styles';

import { IoLockClosed } from "react-icons/io5";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { MdLockOpen } from "react-icons/md";

import Logo from '../../assets/Images/home_images/image.webp'
import JS from '../../assets/Images/home_images/java-script.png';
import CSS3 from '../../assets/Images/home_images/css3.png';
import GIT from '../../assets/Images/home_images/git.png';

import { Link } from 'react-router-dom';


const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSelected = (index: number): void => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
    } 
  }

  return (
    <>
      <Navbar />
      <Container>
        <div className='left-side'>
          <div style={{ position: "relative" }}>
            <span className='line'></span>
            <h2 className='dev-quiz'>Dev Quiz</h2>
          </div>
          <h1 className='title x'>Seja bem-vindo ao nosso Quiz para Desenvolvedores</h1>
          <h2 className='description'>Desafie-se em nosso Quiz de Programação com perguntas desafiadoras em três categorias distintas. Aprimore suas habilidades e conquiste cada categoria para ganhar uma premiação.</h2>
          {selectedCard !== null ? (
            <Link style={{ textDecoration: "none" }} to="/questions">
              <span className='start-btn' style={{ background: '#52F791', color: 'white' }}>Começar <MdLockOpen /></span>
            </Link>
          ) : (
            <span className='start-btn'>Selecionar categoria <IoLockClosed className='icon' /></span>
          )}
        </div>

        <div className="right-side">
           <img src={Logo} className='image' />
        </div>
      </Container>
      <Card ref={cardRef}>
        <div onClick={() => { handleSelected(0) }} className={`card-01 ${selectedCard === 0 ? 'selected-card' : ''}`}>
          <img src={JS} width={"100px"} />
          <h2 className='title'>Java-Script</h2>
          <p className='text'>Teste seu domínio da linguagem enquanto enfrenta perguntas cuidadosamente elaboradas para abranger diversos aspectos do JavaScript. </p>
          <span className='select-btn'> Selecionar <FaArrowRightToBracket className='icon' /></span>
        </div>
        <div className="card-02">
          <img src={CSS3} width={"100px"} />
          <h2 className='title'>CSS3</h2>
          <p className='text'>Teste seus conhecimentos em CSS3 enquanto enfrenta perguntas cuidadosamente elaboradas para abranger diversos aspectos sobre estilização. </p>
          <span className='select-btn'> Selecionar <FaArrowRightToBracket className='icon' /> </span>
        </div>
        <div  className={`card-03`}>
          <img src={GIT} width={"100px"} />
          <h2 className='title'>GIT</h2>
          <p className='text'>Aprimore suas habilidades no GIT enquanto enfrenta perguntas cuidadosamente elaboradas para abranger diversos aspectos sobre controle de versão e colaboração em projetos de software.</p>
          <span className='select-btn'> Selecionar <FaArrowRightToBracket className='icon' /> </span>
        </div>
      </Card>
      <Footer />
    </>
  );
}

export default HomePage;
