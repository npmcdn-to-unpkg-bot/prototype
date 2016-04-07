import { combineReducers } from 'redux';
import {scaleCalculator, gridPositions} from './lib';

const stage = (columnNumber,columnWidth,gutterWidth) => {
  let stage = ( (columnNumber*columnWidth)+((columnNumber-1)*gutterWidth) );
  return stage
};

import defaultStates from './default-states';

// let myState = JSON.parse(
//   localStorage['state_1440'] ? 
//     localStorage['state_1440'] : (
//       localStorage['state_1440'] = JSON.stringify(defaultStates['state_1440'])
//     )
// );

const gridStore = (
  state = {
    baseFontSize: 16,
    modularScale: 1.125,
    scale: scaleCalculator(16,1.125),
    baseLineHeight: 24,
    baseLineDivisions: 1,
    baseLineShow : true,
    baseLineColor: 'red',
    baseUnit: 24,
    baseUnitDivisions: 2,
    baseUnitOffset: 0,
    baseUnitShow : true,
    baseUnitColor: 'black',
    gridPositions: gridPositions(12,120,24),
    columnNumber: 12,
    columnWidth: 120,
    columnColor: 'blue',
    gutterWidth: 24,
    screen : 1,
    screenFake: 1920,
    stage: 1704,
    marginLeft: 108,
    marginRight: 108
  },
  action
  ) => {
  switch (action.type) {
    case 'SCREEN_FAKE_CHANGE':
      return{
        ...state,
        screenFake: action.payload 
      };
    case 'SET_SCREEN':
      return{
        ...state,
        screen : action.payload,
        screenFake : action.payload
      };
    case 'CHANGE_SCREEN':
      return{
        ...state,
        screen : action.payload
        
      };
    case 'BASEFONTSIZE_PLUS':
      return {
        ...state,
        baseFontSize : state.baseFontSize + 1,
        scale : scaleCalculator(state.baseFontSize + 1,state.modularScale)
      };
    case 'BASEFONTSIZE_MINUS':
      if(state.baseFontSize === 1){
        return state
      }else{
        return {
          ...state,
          baseFontSize : state.baseFontSize - 1,
          scale : scaleCalculator(state.baseFontSize - 1,state.modularScale)
        }
      };
    case 'MODULARSCALE_CHANGE':
      return {
        ...state,
        modularScale : action.payload,
        scale : scaleCalculator(state.baseFontSize,action.payload)
      };
    case 'BASELINE_PLUS':
      return {
        ...state,
        baseLineHeight : state.baseLineHeight + 1
      };
    case 'BASELINE_MINUS':
      return {
        ...state,
        baseLineHeight : state.baseLineHeight - 1
      };
    case 'BASELINE_DIVISIONS_PLUS':
      if(state.baseLineDivisions === 4){
        return state
      }else{
      return {
        ...state,
        baseLineDivisions : state.baseLineDivisions + 1
      }};
    case 'BASELINE_DIVISIONS_MINUS':
      if(state.baseLineDivisions === 1){
        return state
      }else{
      return {
        ...state,
        baseLineDivisions : state.baseLineDivisions - 1
      }};
    case 'BASEUNIT_PLUS':
      return {
        ...state,
        baseUnit : state.baseUnit + 1
      };
    case 'BASEUNIT_MINUS':
      return {
        ...state,
        baseUnit : state.baseUnit - 1
      };
    case 'BASEUNIT_DIVISIONS_PLUS':
      if(state.baseUnitDivisions === 4){
        return state
      }else{
      return {
        ...state,
        baseUnitDivisions : state.baseUnitDivisions + 1
      }};
    case 'BASEUNIT_DIVISIONS_MINUS':
      if(state.baseUnitDivisions === 1){
        return state
      }else{
      return {
        ...state,
        baseUnitDivisions : state.baseUnitDivisions - 1
      }};
    case 'BASEUNIT_OFFSET_PLUS':
      if(state.baseUnitOffset === state.baseUnit-1){
        return state
      }else{
      return {
        ...state,
        baseUnitOffset : state.baseUnitOffset + 1
      }};
    case 'BASEUNIT_OFFSET_MINUS':
      if(state.baseUnitOffset === 0){
        return state
      }else{
      return {
        ...state,
        baseUnitOffset : state.baseUnitOffset - 1
      }};
    case 'COLUMN_NUMBER_PLUS':
      return {
        ...state,
        columnNumber : state.columnNumber + 1,
        stage : stage(state.columnNumber+1,state.columnWidth,state.gutterWidth),
        gridPositions : gridPositions(state.columnNumber+1,state.columnWidth,state.gutterWidth)

      };
    case 'COLUMN_NUMBER_MINUS':
      if(state.columnNumber === 1){
        return state
      }else{
      return {
        ...state,
        columnNumber : state.columnNumber - 1,
        stage : stage(state.columnNumber-1,state.columnWidth,state.gutterWidth),
        gridPositions : gridPositions(state.columnNumber-1,state.columnWidth,state.gutterWidth)
      }};
    case 'COLUMN_WIDTH_PLUS':
      return {
        ...state,
        columnWidth : state.columnWidth + 1,
        gridPositions : gridPositions(state.columnNumber,state.columnWidth+1,state.gutterWidth)
      };
    case 'COLUMN_WIDTH_MINUS':
      if(state.columnWidth === 1){
        return state
      }else{
      return {
        ...state,
        columnWidth : state.columnWidth - 1,
        gridPositions : gridPositions(state.columnNumber,state.columnWidth-1,state.gutterWidth)
      }};
    case 'GUTTER_WIDTH_PLUS':
      return {
        ...state,
        gutterWidth : state.gutterWidth + 1,
        gridPositions : gridPositions(state.columnNumber,state.columnWidth,state.gutterWidth+1)
      };
    case 'GUTTER_WIDTH_MINUS':
      if(state.gutterWidth === 1){
        return state
      }else{
        return {
          ...state,
          gutterWidth : state.gutterWidth - 1,
          gridPositions : gridPositions(state.columnNumber,state.columnWidth,state.gutterWidth-1)
        }
      };
    default:
      return state;
  }
};


// const gridStore = combineReducers({
//   baseLineStore,
// });

export default gridStore
