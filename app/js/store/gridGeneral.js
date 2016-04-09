import {scaleCalculator, gridPositions} from './lib';

// const stage = (columnNumber,columnWidth,gutterWidth) => {
//   let stage = ( (columnNumber*columnWidth)+((columnNumber-1)*gutterWidth) );
//   return stage
// };

export const gridGeneral = (
  state={
    baseLineColor: 'red',
    baseLineShow: true,
    baseLineVisibility: 0.5,
    baseUnitColor: 'black',
    baseUnitShow : true,
    baseUnitVisibility: 0,
    columnColor: 'blue',
    columnShow: true,
    columnVisibility: 0.1,
  },
  action
  )=>{
  switch (action.type) {
    case 'BASE_LINE_SHOW':
      return{
        ...state,
        baseLineShow: action.payload
      };
    case 'BASE_UNIT_SHOW':
      return{
        ...state,
        baseUnitShow: action.payload
      };
    case 'COLUMN_SHOW':
      return{
        ...state,
        columnShow: action.payload
      };
    default:
      return state;
  };
};



