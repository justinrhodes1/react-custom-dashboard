import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import GhostBtn from '../Button/Ghost/Ghost';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import { ReactComponent as MenuSvg } from '../../assets/menu.svg';

import * as css from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={css.Header}>
        <div className={css.HeaderContainer}>
          <div className={css.HeaderItems}>
            <MenuSvg onClick={this.props.menuHandler} className={css.Menu} />
            <div>Dashboard</div>
          </div>
          <LogoSvg className={css.Logo} />
          <div className={css.HeaderItems}>
            <GhostBtn padding="10px 25px" fontSize="12px">
              Buy
            </GhostBtn>
            <span className={css.UserName}>Justin Rhodes</span>
            <Avatar />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;