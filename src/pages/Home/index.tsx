import React, { useContext, useEffect, useState } from 'react';
import { Hero, HomeLayout, ListView, Modal } from '../../components';
import addMisuh from '../../context/actions/addMisuh';
import deleteMisuh from '../../context/actions/deleteMisuh';
import getAllMisuh from '../../context/actions/getMisuh';
import { GlobalContext } from '../../context/Provider';
import Misuh from '../../types/Misuh.interface';

const Home: React.FC = () => {
  const {
    misuhState: { data },
    misuhDispatch,
  } = useContext(GlobalContext);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    problem: '',
  });

  const handleToggleModal = () => setOpen(!open);
  const onSubmit = () => {
    const newData: Misuh = {
      id: Math.random(),
      ...form,
    };

    addMisuh(data, newData)(misuhDispatch)(() =>
      setForm({
        name: '',
        problem: '',
      })
    );
  };
  const onDeleteMisuh = (misuh: Misuh) => {
    deleteMisuh(misuh)(misuhDispatch);
  };

  useEffect(() => {
    getAllMisuh()(misuhDispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HomeLayout addMisuh={handleToggleModal}>
        {data !== undefined && data.length !== 0 ? (
          <ListView data={data} onDeleteItem={onDeleteMisuh} />
        ) : (
          <Hero />
        )}
      </HomeLayout>
      <Modal
        open={open}
        onClose={handleToggleModal}
        name={form.name}
        problem={form.problem}
        onChangeName={(e) => setForm({ ...form, name: e.target.value })}
        onChangeProblem={(e) => setForm({ ...form, problem: e.target.value })}
        onAddNewMisuh={onSubmit}
      />
    </>
  );
};

export default Home;
