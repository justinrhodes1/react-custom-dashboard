import React, { Component } from 'react';
import Cards from './Content/Cards/Cards';

import * as css from './Main.module.css';

class Main extends Component {
  clickHandler = () => {
    if (!this.props.menuClicked) {
      this.props.menuHandler();
    }
  }
  render() {
    return (

      <div className={css.Background} onClick={() => this.clickHandler()}>
        <Cards />
      </div>

      // <div className={css.MainContent} onClick={() => this.clickHandler()} />
    );
  }
}

export default Main;