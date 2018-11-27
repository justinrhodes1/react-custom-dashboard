import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ReactComponent as ConeSvg } from '../../../../assets/cone.svg';
import { ReactComponent as AcornSvg } from '../../../../assets/acorn.svg';
import Card from '../../../Card/Card';
import Grid from '../../../Grid/Grid';

import * as css from './Cards.module.css';

const Cards = () => {
  return (
    <div className={css.OuterScrollContainer}>
      <PerfectScrollbar>
        <div className={css.InnerScrollContainer}>
          <Grid
            gridWidth='90%'
            itemWidth='300px'
            itemHeight='300px'
            itemMargin='20px'
          >
            {[ConeSvg,
              AcornSvg,
              ConeSvg,
              ConeSvg,
              AcornSvg,
              ConeSvg,
              ConeSvg,
              AcornSvg,
              AcornSvg].map((Icon, i) => {
                return (
                  <Card key={i} width='300px' height='300px'>
                    <Icon className={css.CardIcon} />
                    <span className={css.CardText}>
                      Some text
                    </span>
                  </Card>)
              })}
          </Grid>
        </div>
      </PerfectScrollbar >
    </div>
  );
};

export default Cards;