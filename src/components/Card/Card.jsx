import React, { Component } from 'react';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';

import * as css from './Card.module.css';

class Card extends Component {
  state = {
    show: true
  }

  closeHandler = () => {
    this.setState({ show: false });
  }

  render() {
    const { children, width, height, margin } = this.props;
    const content = this.state.show ? (
      <div className={css.Card} style={{ width, height, margin }}>
        <CloseSvg className={css.CloseIcon} onClick={this.closeHandler} />
        {children}
      </div>) : null;

    return (
      <>
        {content}
      </>
    );
  }
}

export default Card;