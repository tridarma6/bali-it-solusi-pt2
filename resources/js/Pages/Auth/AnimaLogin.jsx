import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './AnimationLogin.json'; // File animasi Lottie

const LottieAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: '400px', width: '400px' }} // Sesuaikan ukuran
    />
  );
};

export default LottieAnimation;
