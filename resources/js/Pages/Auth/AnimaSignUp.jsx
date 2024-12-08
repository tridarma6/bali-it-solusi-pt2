import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './AnimationSignUp.json'; // File animasi Lottie

const LottieAnimationSignUp = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: '400px', width: '400px' }} // Sesuaikan ukuran
    />
  );
};

export default LottieAnimationSignUp;
