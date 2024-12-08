import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from './AnimationSignUp2.json'; // File animasi Lottie

const LottieAnimationSignUp2 = () => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: '400px', width: '400px' }} // Sesuaikan ukuran
    />
  );
};

export default LottieAnimationSignUp2;
