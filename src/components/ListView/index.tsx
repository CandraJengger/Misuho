import React from 'react';
import { Card } from '..';
import Misuh from '../../types/Misuh';

type Props = {
  data: Array<Misuh>;
};

const List: React.FC<Props> = ({ data = [] }) => {
  return (
    <>
      {data.map(({ id, to, text }) => (
        <Card to={to} text={text} key={id} />
      ))}
    </>
  );
};

export default List;
