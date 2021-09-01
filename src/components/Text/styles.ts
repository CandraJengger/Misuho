import styled from 'styled-components';
import colors from '../../themes/color';
import spacing from '../../themes/spacing';

interface TextProps {
  strong?: boolean;
}

export const MdText = styled.p<TextProps>`
  color: ${colors.primary};
  font-size: ${spacing[1] + 'px'};
  font-weight: ${(props) => (props.strong ? 700 : 400)};
`;

export const SmText = styled(MdText)`
  font-size: ${spacing[0] + 'px'};
`;

export const XlText = styled(MdText)`
  font-size: ${spacing[2] + 'px'};
`;

export const XxlText = styled(MdText)`
  font-size: ${spacing[3] + 'px'};
`;
