import React from 'react'
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

import './home.sass'

const Home = () => {
  const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`;

  return (
    <Bounce><h1>Hello Animation Bounce</h1></Bounce>
  )
}

export default Home