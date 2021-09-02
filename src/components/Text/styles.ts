import styled from 'styled-components';
import colors from '../../themes/color';
import spacing from '../../themes/spacing';

interface TextProps {
  strong?: boolean;
  type: string;
}

export const Text = styled.p<TextProps>`
  color: ${colors.primary};
  margin: 0;
  font-size: ${(props) =>
    props.type === 'sm'
      ? spacing[0] + 'px'
      : props.type === 'xl'
      ? spacing[2] + 'px'
      : props.type === '2xl'
      ? spacing[3] + 'px'
      : spacing[1] + 'px'};
  font-weight: ${(props) => (props.strong ? 700 : 400)};
`;
