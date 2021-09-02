import React from 'react';

type Props = {
  open: boolean;
  name?: string;
  onChangeName?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  problem?: string;
  onChangeProblem?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onClose?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default Props;
