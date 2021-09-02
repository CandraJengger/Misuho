import React from 'react';
import IcClose from '../../assets/image/ic_close.svg';
import { Button, ButtonIcon, Gap, TextInput, Title } from '..';
import {
  ModalWrapper,
  ModalIcon,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from './styles';
import Props from './modal.props';

const ModalComponent: React.FC<Props> = ({
  open = false,
  name,
  onChangeName,
  problem,
  onChangeProblem,
  onClose,
  onAddNewMisuh,
}) => {
  return (
    <ModalWrapper open={open}>
      <ModalIcon>
        <ButtonIcon source={IcClose} onClick={onClose} />
      </ModalIcon>
      <ModalHeader>
        <Title text="Tambahin Misuhan" />
        <Gap height="4px" width="4px" />
        <Title subTitle text="Buruan, keburu dingin." />
      </ModalHeader>
      <ModalContent>
        <TextInput
          label="Buat Siapa?"
          placeholder="Tulis namanya"
          value={name}
          onChange={onChangeName}
        />
        <Gap height="48px" width="10px" />
        <TextInput
          label="Misuhanya apa?"
          placeholder="Tulis kekesalanmu"
          value={problem}
          type="textarea"
          onChange={onChangeProblem}
        />
      </ModalContent>
      <ModalFooter>
        <Button text="+ Tambahin" fluid onClick={onAddNewMisuh} />
      </ModalFooter>
    </ModalWrapper>
  );
};

export default ModalComponent;
