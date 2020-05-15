import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
color: #ffff;
margin: 38px;
label {
  font-weight: 100;
  font-size: 30px;
}
input {
  text-align: center;
  padding: 5px;
  margin: 0px;

}
@media (max-width: 768px) {
    flex-direction: column;
}`

const InputContainer = ({ style, handleChange }) => {
  return (
    <Container>
      <label>Radius:</label>
      <input type='range'
        name='radio'
        max='50'
        min='0'
        defaultValue={0}
        value={style.radio}
        onChange={handleChange}></input>

      <label> Spacing:</label>
      <input type='range'
        name='spacing'
        max='100'
        min='0'
        defaultValue={0}
        value={style.spacing}
        onChange={handleChange}>
      </input>

      <label> GrayScale:</label>
      <input type='range'
        name='grayscale'
        max='100'
        min='0'
        defaultValue={0}
        value={style.grayscale}
        onChange={handleChange}>
      </input>

      <label> Color:</label>
      <input type="color"
        name='color'
        value={style.color}
        onChange={handleChange}>
      </input>

    </Container>
  );
}
export default InputContainer;