import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'
import NumInput2 from '../NumInput2.jsx'

import {
  columnChange,
  columnWidthChange,
  gutterWidthChange
} from '../../actions/gridStateActions.js'

class ColumnGridControl extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    let S = state.gridState;
    let style = {
      title : {
        lineHeight: 20+'px',
        height: 30,
        margin: 0,
        padding: 0
      },
      section : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end '
      }
    }
    return (
      <div style={this.props.style}>
        <div style={style.section}>
          <NumInput2
            name="Columns"
            label={S.columns}
            plus={()=>store.dispatch(columnChange(S.columns + 1))}
            minus={()=>store.dispatch(columnChange(S.columns - 1))}
          />
          <NumInput2
            name="Column Width"
            label={state.gridState.columnWidth}
            plus={()=>store.dispatch(columnWidthChange(state.gridState.columnWidth + 0.25))}
            minus={()=>store.dispatch(columnWidthChange(state.gridState.columnWidth - 0.25))}
          />
          <NumInput2
            name="Gutter Width"
            label={state.gridState.gutterWidth}
            plus={()=>store.dispatch(gutterWidthChange(state.gridState.gutterWidth + 0.25))}
            minus={()=>store.dispatch(gutterWidthChange(state.gridState.gutterWidth - 0.25))}
          />
        </div>
      </div>
    )
  };
};

ColumnGridControl.contextTypes = {
    store: React.PropTypes.object
  }

ColumnGridControl = connect()(ColumnGridControl)

export default ColumnGridControl
