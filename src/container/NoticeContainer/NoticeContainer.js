import React from 'react';
import Notice from '../../component/Notice/Notice';

const NoticeContainer = () => {
  const isAdmin = true;

  return (
    <div>
      <Notice isAdmin={isAdmin} />
    </div>
  );
};

export default NoticeContainer;