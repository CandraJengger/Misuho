import React from 'react';
import { Gap, Link, PlainLayout, Text, Title } from '../../components';

const NotFound: React.FC = () => {
  return (
    <PlainLayout>
      <Text type="2xl" strong text="Waduh. Halaman kosong, nih." />
      <Gap height="8px" width="100px" />
      <Title text="Misuhnya tolong ditahan dulu." superTitle />
      <Gap height="32px" width="120px" />
      <Link text="Kembali aja yuk." to="/" />
    </PlainLayout>
  );
};

export default NotFound;
