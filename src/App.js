import React, {useState, useEffect} from 'react';
import styled from 'styled-components/macro';

import logo from './logo.svg';
import './App.css';
import {getCurrent} from "./api";

const StyledContainer = styled.div`
    border-radius: 5px;
    background-color: aliceblue;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 400px;
    min-height: 400px;
    box-sizing: border-box;
    width: 33%;
    height: 33%;
    margin: 10px;
  `;

const SyledWeather = styled.div`
    border-radius: 5px;
    background-color: dimgrey;
    padding: 5px;
    box-sizing: border-box;
    min-width: 300px;
    min-height: 300px;
    height: 80%;
    width: 80%;
    margin: 10px;
  `;

const StyledInput = styled.input`
    padding: 5px;
    border-style: solid;
    border-width: thin;
    box-sizing: border-box;
    min-width: 100px;
    width: 50%;
    font-size: large;
  `;

const StyledH1 = styled.h1`
    color: olive;
    font-size: xx-large;
  `;


function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [city, setCity] = useState('new york');
  const inputRef = React.createRef();

  const onChange = (e = {}) => {
    const {
      target: {
        value: city,
      } = {},
    } = e;
    setCity(city);
  };

  useEffect(() => {
    const get = async () => {
      try {
        const result = await getCurrent(city);
        setCurrentWeather(result);
      } catch (err) {
        console.error(err);
      }
    }

    get();
  }, [city]);


  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef, city]);

  const {
    temperature,
  } = currentWeather;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <StyledContainer>
          <StyledH1>Palmetto Weather</StyledH1>
            <SyledWeather />
            <StyledInput ref={inputRef} id={'city'} name={city} onChange={onChange} placeholder={'Enter your city'}/>
        </StyledContainer>
      </main>
    </div>
  );
}

export default App;
