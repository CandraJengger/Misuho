import styled from 'styled-components';
import spacing from '../../../themes/spacing';

export const Container = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: ${spacing[5] + 'px'};
  box-sizing: border-box;
`;
