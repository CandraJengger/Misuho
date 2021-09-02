import React from 'react';
import LogoWebp from '../../assets/image/misuho.webp';
import LogoPng from '../../assets/image/misuho.png';
import { Text } from '..';
import { Image, HeroWrapper } from './styles';

const HeroComponent = () => {
  return (
    <HeroWrapper>
      <picture>
        <source srcSet={LogoWebp} type="image/webp" />
        <Image src={LogoPng} alt="logo" />
      </picture>
      <Text text="“Langsung misuhin aja udah.”" strong />
    </HeroWrapper>
  );
};

export default HeroComponent;
