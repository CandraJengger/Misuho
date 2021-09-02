import styled from 'styled-components';
import colors from '../../themes/color';

interface Modal {
  open: boolean;
}

export const ModalWrapper = styled.div<Modal>`
  position: fixed;
  top: ${(props) => (props.open ? 0 : '-100%')};
  background: ${colors.secondary};
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 350ms ease-in;
  height: 100vh;
  padding: 16px 24px 20px;
  display: flex;
  flex-direction: column;
`;

export const ModalIcon = styled.div`
  align-self: flex-end;
  margin-bottom: 18px;
`;

export const ModalHeader = styled.div`
  margin-bottom: 42px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 24px;
`;
