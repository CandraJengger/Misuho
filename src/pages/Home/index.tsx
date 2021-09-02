import React from 'react';
import { Hero, HomeLayout, ListView } from '../../components';
import data from '../../data';

const Home: React.FC = () => {
  return (
    <HomeLayout>
      {data.length !== 0 ? <ListView data={data} /> : <Hero />}
    </HomeLayout>
  );
};

export default Home;
