import React from 'react';

import * as css from './Ghost.module.css';

const Ghost = ({ children, padding, fontSize }) => {
  return (
    <div className={css.Button} style={{ padding, fontSize }}>
      {children}
    </div>
  );
};

export default Ghost;