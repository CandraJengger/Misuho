import React, { useState } from 'react';
import { Hero, HomeLayout, ListView, Modal } from '../../components';
import data from '../../data';

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggleModal = () => setOpen(!open);

  return (
    <>
      <HomeLayout addMisuh={handleToggleModal}>
        {data.length !== 0 ? <ListView data={data} /> : <Hero />}
      </HomeLayout>
      <Modal open={open} onClose={handleToggleModal} />
    </>
  );
};

export default Home;
