import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Content/Home/Home';
import Cards from './Content/Cards/Cards';
import Timeline from './Content/Timeline/Timeline';

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
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/cards" component={Cards} />
        <Route path="/timeline" component={Timeline} />
      </div>
    );
  }
}

export default Main;