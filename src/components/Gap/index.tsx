import React from 'react';
import Props from './gap.props';

const Gap: React.FC<Props> = ({ width, height }) => {
  return <div style={{ width, height }}></div>;
};

export default Gap;
