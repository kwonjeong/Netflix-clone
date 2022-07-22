import React from 'react';
import Slilder from '../slider/slider';

const RowContainer = ({ netflix, title, method }) => {
  return (
    <>
      <h2>{title}</h2>
      <Slilder netflix={netflix} method={method} />
    </>
  );
};

export default RowContainer;
