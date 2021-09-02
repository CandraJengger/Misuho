import styled from 'styled-components';
import colors from '../../../themes/color';

export const Header = styled.header`
  width: 100%;
  padding: 54px 24px 24px;
  background: ${colors.secondary};
`;

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  max-width: 512px;
  position: relative;
  margin: 0 auto;
`;

export const Main = styled.main`
  padding: 0 24px;
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 20px 24px;
  background: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
