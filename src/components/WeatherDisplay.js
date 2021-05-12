import React from "react";
import styled from "styled-components/macro";

const SyledWeather = styled.div`
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    box-sizing: border-box;
    min-width: 300px;
    min-height: 300px;
    height: 80%;
    width: 80%;
    margin: 10px;
    color: black;
  `;

const StyledH2 = styled.h2`
    font-size: x-large;
  `;

const WeatherDisplay = (props) => {
  const {
    weatherImg,
    description,
    temp_min,
    temp_max,
  } = props;
  return (
    <SyledWeather style={{backgroundImage: `url(${weatherImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div>
        <StyledH2>{description}</StyledH2>
        <StyledH2>{temp_min}</StyledH2>
        <StyledH2>{temp_max}</StyledH2>
      </div>
    </SyledWeather>
  );
};

export default WeatherDisplay;