export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  export const monthOptions = monthNames.map((item) => ({
    value: item,
    label: item,
  }));


  export type TQueeryParams = {
    name : string ,
    value : string | number | boolean
  }