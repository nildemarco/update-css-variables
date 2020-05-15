import React, { useState } from 'react';
import arboles from './assets/arboles.jpg';
import styled from 'styled-components'
import InputContainer from './components/InputContainer'
import './App.css';

const MainContainer = styled.main`
width: 100%;
padding: 10px;
color: #ffff;
font-family: Arial, Helvetica, sans-serif;
font-size: 38px;
font-weight: 100;
background-color: #193549;
display: flex;
flex-direction: column;
align-items: center;
h1 {
  margin: 10px;
}
span{
  color: #ffc600;
}
`
const ContainerImg = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: center;
`
const ImageToChange = styled.img`
  border-radius: ${({ radio }) => `${radio}%`};
  padding: ${({ spacing }) => `${spacing}px`};
  background-color:${ ({ color }) => `${color}`};
  filter: ${({ grayscale }) => `grayscale(${grayscale}%)`}; 
  @media (max-width: 425px) {
    width: 50%;
    height: auto;
  }
  @media (max-width: 320px) {
    width: 40%;
    height: auto;
  }
 `

const App = () => {
  const [style, setstyle] = useState({
    grayscale: 0,
    spacing: 5,
    radio: 0,
    color: "black",
  })

  const handleChange = e => {
    setstyle({ ...style, [e.target.name]: e.target.value })
  }

  return (
    <MainContainer>
      <h1>Update Style with <span>React</span></h1>
      <InputContainer
        style={style}
        handleChange={handleChange} />
      <ContainerImg>
        <ImageToChange
          src={arboles}
          radio={style.radio}
          spacing={style.spacing}
          grayscale={style.grayscale}
          color={style.color} />
      </ContainerImg>
    </MainContainer>
  );
}

export default App;
