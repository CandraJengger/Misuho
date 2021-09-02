import React from 'react';
import Text from '../Text';
import Gap from '../Gap';
import IcClose from '../../assets/image/ic_close.svg';
import { CardWrapper, Header, Body, CardContent, CardIcon } from './styles';
import Props from './card.props';

const CardComponent: React.FC<Props> = ({ to, text, onClose }) => {
  return (
    <CardWrapper>
      <CardContent>
        <Header>
          <Text type="sm" strong={false} text="Buat: " />
          <Gap width="4px" height="2px" />
          <Text type="sm" text={to} />
        </Header>
        <Body>
          <Text text={text} />
        </Body>
      </CardContent>
      <CardIcon onClick={onClose}>
        <img src={IcClose} alt="icon" />
      </CardIcon>
    </CardWrapper>
  );
};

export default CardComponent;
