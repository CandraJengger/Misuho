import React from 'react';
import { Card } from '..';
import Misuh from '../../types/Misuh.interface';

type Props = {
  data: Array<Misuh>;
  onDeleteItem: (misuh: Misuh) => void;
};

const List: React.FC<Props> = ({ data = [], onDeleteItem }) => {
  return (
    <>
      {data.map((misuh) => (
        <Card
          to={misuh.name}
          text={misuh.problem}
          key={misuh.id}
          onClose={() => onDeleteItem(misuh)}
        />
      ))}
    </>
  );
};

export default List;
