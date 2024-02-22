import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { WarningModal } from '../../components/WarningModal/WarningModal';

const BasketPage = () => {
  const [isOpen] = useState(false);

  const isLogin = useSelector(state => state.user.isLogin);

  return (
    <div>
      {isLogin ? (
        <p>Here will be your changed adverts</p>
      ) : (
        <WarningModal isOpen={isOpen} />
      )}
    </div>
  );
};

export default BasketPage;
