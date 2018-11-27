import React, { Component } from 'react';
import { ReactComponent as LeafSvg } from '../../../assets/leaf.svg';

import * as css from './InnerNav.module.css';

class Header extends Component {
  render() {
    return (
      <div className={css.Container} style={{ left: this.props.menuClicked ? '-200px' : '100px' }}>
        <ul className={css.InnerNav}>
          <li>
            <LeafSvg className={css.InnerIcon} />
            <span>Sub-option A</span>
          </li>
          <li>
            <LeafSvg className={css.InnerIcon} />
            <span>Sub-option B</span>
          </li>
          <li>
            <LeafSvg className={css.InnerIcon} />
            <span>Sub-option C</span>
          </li>
          <li>
            <LeafSvg className={css.InnerIcon} />
            <span>Sub-option D</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;