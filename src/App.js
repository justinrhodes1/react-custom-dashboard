import React, { Component } from 'react';

import Header from './components/Header/Header';
import OuterNav from './components/Nav/OuterNav/OuterNav';
import Main from './components/Main/Main';

class App extends Component {
  state = {
    menuClicked: false,
    showOuterMenu: false,
    showInnerMenu: false
  }

  menuHandler = () => {
    this.setState(prevState => ({ menuClicked: !prevState.menuClicked }));
  }

  render() {
    return (
      <>
        <Header menuHandler={this.menuHandler} />
        <Main menuHandler={this.menuHandler} menuClicked={this.state.menuClicked} />
        <OuterNav menuHandler={this.menuHandler} menuClicked={this.state.menuClicked} />
      </>
    );
  }
}

export default App;
