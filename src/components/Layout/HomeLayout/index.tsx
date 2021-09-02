import React from 'react';
import { Button, Gap, Title } from '../..';
import { Footer, Header, Main, Container } from './styles';

type Props = {
  children: React.ReactNode;
  addMisuh?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const HomeLayout: React.FC<Props> = ({ children, addMisuh }) => {
  return (
    <Container>
      <Header>
        <Title text="Misuho." />
        <Gap height="4px" width="4px" />
        <Title subTitle text="Luapin kekesalanmu" />
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Button text="Mau misuh apa sekarang?" fluid onClick={addMisuh} />
      </Footer>
    </Container>
  );
};

export default HomeLayout;
