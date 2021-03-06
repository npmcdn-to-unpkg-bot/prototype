import React from 'react';
import { Provider } from 'react-redux';

import { connect } from 'react-redux'

import { set320, set720, set1440, set1920 } from '../actions/gridStateActions.js'

import Menu from './controls/Menu.jsx'
import Controls from './gridcontrols/Controls.jsx';
import TextControls from './textcontrols/TextControls.jsx';

import Wrapper from './Wrapper.jsx';

import store from '../store';




class Prototype extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );

   store.dispatch(set1920())
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <Menu />
        <Controls />
        <TextControls />
        <Wrapper />
      </div>
    )
  }
};
Prototype.contextTypes = {
    store: React.PropTypes.object
  }
Prototype = connect()(Prototype)

// const Prototype = () => (
//   <div>
//     <Controls />
//     <Info />
//     <Wrapper />
//   </div>
// );

export default (
  <Provider store={store}>
    <Prototype />
  </Provider>
)
