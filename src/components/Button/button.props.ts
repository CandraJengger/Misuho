import React from 'react';

type Props = {
  text?: string;
  type?: 'primary' | 'secondary';
  fluid?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default Props;
