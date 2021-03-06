import React from 'react';
import { connect } from 'react-redux';

import NumInput from '../NumInput.jsx'
import NumInput2 from '../NumInput2.jsx'
import  Switch from '../Switch.jsx'

import { BaseUnitChange, BaseUnitDivisionsChange, BaseUnitOffsetChange } from '../../actions/gridStateActions.js'

import {BaseUnitShow} from '../../actions/gridGeneralActions.js'



class BaseUnitControl extends React.Component {
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
      <div>
        <div style={style.section}>
          <NumInput2
          name="Base Unit"
          label={state.gridState.baseUnit}
          plus={()=>store.dispatch(BaseUnitChange(state.gridState.baseUnit + 2))}
          minus={()=>store.dispatch(BaseUnitChange(state.gridState.baseUnit - 2))}
          />
          <NumInput2
            name="Divisions"
            label={state.gridState.baseUnitDivisions}
            plus={()=>store.dispatch(BaseUnitDivisionsChange(state.gridState.baseUnitDivisions + 1))}
            minus={()=>store.dispatch(BaseUnitDivisionsChange(state.gridState.baseUnitDivisions - 1))}
          />
          <NumInput2
            name="Offset"
            label={state.gridState.baseUnitOffset}
            plus={(e)=>store.dispatch(BaseUnitOffsetChange(state.gridState.baseUnitOffset + 1))}
            minus={(e)=>store.dispatch(BaseUnitOffsetChange(state.gridState.baseUnitOffset - 1))}
          />
          <Switch
          name="Show"
          defaultValue={state.gridGeneral.baseUnitShow}
          value={state.gridGeneral.baseUnitShow}
          onChange={(e)=>store.dispatch(BaseUnitShow(state.gridGeneral.baseUnitShow))}
          />
        </div>
      </div>
    )
  };
};

BaseUnitControl.contextTypes = {
    store: React.PropTypes.object
  }

BaseUnitControl = connect()(BaseUnitControl)

export default BaseUnitControl

// <NumInput
// name="Offset 2"
// label={state.gridState.baseUnitOffset}
// defaultValue={state.gridState.baseUnitOffset}
// value={state.gridState.baseUnitOffset}
// onChange={(e)=>store.dispatch(BaseUnitOffsetChange(e.target.value))}
// max={state.gridState.baseUnit}
// min={0}
// step={1}
// />
