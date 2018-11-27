import React from 'react';

import * as css from './Grid.module.css';

const Grid = ({
  gridWidth,
  itemWidth: width,
  itemHeight: height,
  itemMargin: margin,
  children }) => {
  return (
    <div
      className={css.Grid}
      style={{ width: gridWidth }}
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, { margin, width, height })
      })}
      {[...Array(6)]
        .map((el, i) => <div key={i} style={{ width, margin: `0 ${margin}` }} />)}
    </div>
  );
};

export default Grid;