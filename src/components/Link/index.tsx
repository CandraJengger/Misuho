import React from 'react';
import { Link } from './styles';

type Props = {
  text: string;
  to: string;
};

const LinkComponent: React.FC<Props> = ({ text, to }) => {
  return <Link to={to}>{text}</Link>;
};

export default LinkComponent;
