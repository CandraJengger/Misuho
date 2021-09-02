import React from 'react';
import { Button, Gap, PlainLayout, Text, Title } from '../../components';
import { useHistory } from 'react-router-dom';

const NotFound: React.FC = () => {
  const history = useHistory();

  return (
    <PlainLayout>
      <Text type="2xl" strong text="Waduh. Lagi error, nih." />
      <Title text="Misuhnya tolong ditahan dulu." superTitle />
      <Gap height="32px" width="100px" />
      <Button text="Kembali" onClick={() => history.push('/')} />
    </PlainLayout>
  );
};

export default NotFound;
