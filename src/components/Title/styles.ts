import styled from 'styled-components';
import colors from '../../themes/color';
import spacing from '../../themes/spacing';

export const Title = styled.h1`
  font-size: ${spacing[5] + 'px'};
  font-weight: 700;
  color: ${colors.primary};
`;

export const SubTitle = styled(Title)`
  font-size: ${spacing[4] + 'px'};
`;
