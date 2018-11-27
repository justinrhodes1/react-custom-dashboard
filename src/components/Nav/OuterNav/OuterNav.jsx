import React, { Component } from 'react';
import InnerNav from '../InnerNav/InnerNav';
import { ReactComponent as ChestnutSvg } from '../../../assets/chestnut.svg';
import PerfectScrollbar from 'react-perfect-scrollbar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import * as css from './OuterNav.module.css';
import './animations.css';

class OuterNav extends Component {
  state = {
    clickIndex: null,
    hoverIndex: null
  }

  clickHandler = index => {
    this.setState({ clickIndex: index });
  }

  render() {
    const { clickIndex } = this.state;
    const { menuClicked } = this.props;
    const optionArray = [{
      icon: ChestnutSvg,
      text: 'Option 1'
    }, {
      icon: ChestnutSvg,
      text: 'Option 2'
    }, {
      icon: ChestnutSvg,
      text: 'Option 3'
    }, {
      icon: ChestnutSvg,
      text: 'Option 4'
    }];

    const options = optionArray.map((option, index) => {
      return (
        <li
          key={index}
          onClick={() => this.clickHandler(index)}
          className={clickIndex === index ? css.Selected : null}>
          <option.icon className={css.OuterIcon} />
          <span>{option.text}</span>
        </li>
      )
    });

    return (
      <div
        className={css.Container}
        style={{
          animationName: `${menuClicked ? 'moveOut' : 'moveIn'}`,
          animationDuration: '0.5s',
          left: `${menuClicked ? '-100px' : '0'}`
        }}
      >
        <PerfectScrollbar>
          <ul className={css.OuterNav}>
            {options}
          </ul>
        </PerfectScrollbar>
        <InnerNav menuClicked={menuClicked} />
      </div>
    );
  }
}

export default OuterNav;