import React from 'react';
import { SubTitle, SuperTitle, Title } from './styles';
import Props from './title.props';

const TitleComponent: React.FC<Props> = ({ text, superTitle, subTitle }) => {
  return superTitle ? (
    <SuperTitle>{text}</SuperTitle>
  ) : subTitle ? (
    <SubTitle>{text}</SubTitle>
  ) : (
    <Title>{text}</Title>
  );
};

export default TitleComponent;
