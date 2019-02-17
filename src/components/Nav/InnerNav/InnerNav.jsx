import React, { Component } from 'react';
import { ReactComponent as LeafSvg } from '../../../assets/leaf.svg';
import { Link } from 'react-router-dom';

import * as css from './InnerNav.module.css';

class InnerNav extends Component {
  render() {

    const { menuClicked, menuHandler } = this.props;
    const optionArray = [{
      icon: LeafSvg,
      text: 'Home',
      url: '/home'
    }, {
      icon: LeafSvg,
      text: 'Cards example',
      url: '/cards'
    }, {
      icon: LeafSvg,
      text: 'Timeline example',
      url: '/timeline'
    }, {
      icon: LeafSvg,
      text: 'Sub-option D',
      url: '/url4'
    }];

    const options = optionArray.map((option, i) => {
      return (
        <li key={i}>
          <option.icon className={css.InnerIcon} />
          <Link to={option.url}>{option.text}</Link>
        </li>
      )
    });


    return (
      <div className={css.Container} style={{ left: menuClicked ? '-200px' : '100px' }}>
        <nav>
          <ul className={css.InnerNav} onClick={menuHandler}>
            {options}
          </ul>
        </nav>
      </div>
    );
  }
}

export default InnerNav;