import React from 'react';

import * as css from './Timeline.module.css';

const Timeline = () => {
  const d1 = new Date(2018, 10, 1, 11, 20);
  const d2 = new Date(2018, 10, 2, 11, 20);
  const d3 = new Date(2018, 10, 3, 9, 18);
  const d4 = new Date(2018, 10, 19, 13, 21);
  const d5 = new Date(2018, 10, 25, 18, 55);
  const d6 = new Date(2018, 11, 2, 18, 55);
  const d7 = new Date(2018, 11, 12, 18, 55);
  const dates = [d1, d2, d3, d4, d5, d6, d7];

  // console.log(d1.getYear());

  const dateDiff = (date1, date2) => {
    return Math.floor((Date.UTC(date2.getYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getYear(), date1.getMonth(), date1.getDate())) / (1000 * 60 * 60 * 24));
  }

  // console.log(dateDiff(d1, d2));
  let nextDateIsSet = false;

  const timeItems = dates.map((date, i) => {
    const padding = {};
    let shortened;
    let grey;
    let pulse;
    if ((new Date() < date) && !nextDateIsSet) {
      pulse = css.Pulse;
      nextDateIsSet = true;
    };
    if (new Date() > date) {
      grey = css.Grey;
    };
    if ((i + 1) < dates.length) {
      console.log('i', i);
      const nextIndex = i + 1;
      let days = dateDiff(date, dates[nextIndex]);
      if (days > 15) {
        days = 6;
        shortened = css.Shortened;
      };
      padding.paddingBottom = `${5 * days}px`;
    } else {
      padding.paddingBottom = '0px';
    }
    return (
      <div key={i} className={css.Timeblock} style={padding}>
        <div className={`${css.Date} ${shortened}`}>{date.toDateString()}</div>
        <div className={`${css.Circle} ${grey} ${pulse}`} />
        <div className={css.Description}>Some description text.</div>
      </div>
    )

  });
  return (
    <div className={css.FlexContainer}>
      <div className={css.Timeline}>
        {timeItems}
        {/* <div className={css.Timeblock} style={{ paddingBottom: '80px' }}>
          <div className={css.Date}>11 Nov, 11:20</div>
          <div className={css.Circle} />
          <div className={css.Description}>Some description text.</div>
        </div>
        <div className={css.Timeblock} style={{ paddingBottom: '50px' }}>
          <div className={css.Date}>12 Nov, 11:20</div>
          <div className={css.Circle} />
          <div className={css.Description}>Some description text.</div>
        </div>
        <div className={css.Timeblock} style={{ paddingBottom: '100px' }}>
          <div className={css.Date}>Yesterday, 11:20</div>
          <div className={css.Circle} />
          <div className={css.Description}>Some description text.</div>
        </div>
        <div className={css.Timeblock} style={{ paddingBottom: '50px' }}>
          <div className={css.Date}>Today, 11:20</div>
          <div className={css.Circle} />
          <div className={css.Description}>Some description text.</div>
        </div> */}
      </div>
    </div>
  );
};

export default Timeline;