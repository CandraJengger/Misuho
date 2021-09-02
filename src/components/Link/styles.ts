import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import spacing from '../../themes/spacing';
import colors from '../../themes/color';

export const Link = styled(LinkR)`
  font-size: ${spacing[1] + 'px'};
  font-weight: 700;
  text-decoration: underline;
  color: ${colors.primary};
`;
