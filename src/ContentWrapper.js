import React from 'react';

const ContentWrapper = ({ children }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      {children}
    </div>
  );
};

export default ContentWrapper;