import styled from 'styled-components';
import colors from '../../themes/color';
import spacing from '../../themes/spacing';

export const CardWrapper = styled.article`
  display: flex;
  padding: ${spacing[0] + 'px'};
  border: 2px solid ${colors.primary};
  box-shadow: 5px 5px 0px -2px ${colors.primary};
  min-height: 75px;
  margin-bottom: ${spacing[1] + 'px'};
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CardIcon = styled.button`
  width: max-content;
  height: max-content;
  align-self: center;
  background: transparent;
  cursor: pointer;
  border: none;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${spacing[0] + 'px'};
`;

export const Body = styled.div`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
`;
