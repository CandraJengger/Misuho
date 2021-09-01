import styled from 'styled-components';
import colors from '../../themes/color';
import spacing from '../../themes/spacing';

interface ButtonProps {
  primary?: boolean;
  fluid?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.fluid ? '100%' : 'max-content')};
  max-width: 500px;
  padding: 13px 54px;
  border-radius: 100px;
  font-size: ${spacing[2] + 'px'};
  font-weight: 700;
  cursor: pointer;

  background: ${(props) => (props.primary ? colors.primary : colors.secondary)};
  color: ${(props) => (props.primary ? colors.secondary : colors.primary)};
  border: 2px solid ${colors.primary};
`;
