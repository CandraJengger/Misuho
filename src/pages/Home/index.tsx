import React from 'react';
import { Button, Card, Text, TextInput, Title } from '../../components';

const Home: React.FC = () => {
  return (
    <div>
      Home
      <Button />
      <Text text="casasa" />
      <Title />
      <TextInput label="Buat Siapa ?" placeholder="Tulis namanya" />
      <Card
        to="Guntur Bagus"
        text="Good Day"
        onClose={() => console.log('close')}
      />
    </div>
  );
};

export default Home;
