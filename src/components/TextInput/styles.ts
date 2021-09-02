import styled from 'styled-components';
import colors from '../../themes/color';
import spacing from '../../themes/spacing';

export const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  display: inline-block;
  color: ${colors.primary};
  font-size: ${spacing[1] + 'px'};
  margin-bottom: ${spacing[0] + 'px'};
`;

export const Input = styled.input`
  color: ${colors.primary};
  font-size: ${spacing[3] + 'px'};
  padding: 12px;
  font-weight: 700;
  border: 2px solid ${colors.primary};
  box-shadow: 5px 5px 0px -2px ${colors.primary};
`;

export const TextArea = styled.textarea`
  color: ${colors.primary};
  height: 120px;
  font-size: ${spacing[3] + 'px'};
  padding: 12px;
  font-weight: 700;
  border: 2px solid ${colors.primary};
  box-shadow: 5px 5px 0px -2px ${colors.primary};
`;
