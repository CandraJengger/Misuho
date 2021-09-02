import React from 'react';

type Props = {
  text?: string;
  type?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default Props;
