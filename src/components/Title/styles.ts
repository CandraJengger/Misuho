import styled from 'styled-components';
import colors from '../../themes/color';
import spacing from '../../themes/spacing';

export const Title = styled.h1`
  font-size: ${spacing[4] + 'px'};
  margin: 0;
  font-weight: 700;
  color: ${colors.primary};
`;

export const SuperTitle = styled(Title)`
  font-size: ${spacing[5] + 'px'};
`;

export const SubTitle = styled.h2`
  font-size: ${spacing[2] + 'px'};
  margin: 0;
`;
