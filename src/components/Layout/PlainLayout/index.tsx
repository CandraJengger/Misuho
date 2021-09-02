import React from 'react';
import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

const PlainLayout: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PlainLayout;
