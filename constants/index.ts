export const CHART_OPTIONS = {
  elements   : {
    point : {
      radius : 0
    }
  },
  legend     : {
    display : false
  },
  angleLines : {
    display : false
  },
  scale      : {
    gridLines : {
      circular  : true,
      color     : 'rgba(0, 0, 0, 0.1)',
      lineWidth : 14
    },
    pointLabels : {
      fontColor: '#FFFFFF',
      fontSize: 8
    },
    ticks     : {
      display     : false,
      beginAtZero : true,
      max         : 6,
      stepSize    : 2
    }
  }
};