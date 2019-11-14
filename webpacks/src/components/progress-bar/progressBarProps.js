// example with 3 results

const data = {
    endValue: 203,
    strokeLinecap: 'round',
    patternID: 'svgPattern',
    patternUrl: 'https://danielcss.github.io/experiments/assets/gradient1.png',
    results: [
      {
        value: 203,
        color: '#FFBF00'
      }
    ]
  };
  
  // example with 3 results
  
  const data0 = {
    endValue: 500,
    results: [
      {
        value: 20,
        cssClass: 'lci-progress-bar__result1'
      },
      {
        value: 100,
        cssClass: 'lci-progress-bar__result2'
      },
      {
        value: 250,
        cssClass: 'lci-progress-bar__result3'
      }
    ]
  };
  
  // example with gradient and filter
  
  // NOTE: Only ONE gradient and filter will be applied -
  // even if there are multiple results!!!
  
  const data1 = {
    endValue: 500,
    gradientID: 'grad1',
    gradientStops: [
      {
        offset: 0,
        color: '#1e5799'
      },
      {
        offset: 100,
        color: 'green'
      }
    ],
    filterID: 'filter1',
    filterColor: '#F57066',
    results: [
      {
        value: 95,
        color: 'blue'
      },
      {
        value: 406,
        color: 'salmon'
      },
      {
        value: 203,
        color: '#FFBF00'
      }
    ]
  };
  
  // example with two results
  
  // NOTE: startValue is not 0
  // support for this is based on a requirement from Coby
  // COBY NEEDS TO VERIFY THIS
  
  const data2 = {
    startValue: 200,
    endValue: 500,
    strokeLinecap: 'butt',
    results: [
      {
        value: 260,
        color: 'pink'
      },
      {
        value: 350,
        color: 'lightgreen'
      }
    ]
  };
  
  // example one result, strokeLinecap is round by default
  
  const data3 = {
    endValue: 500,
    gradientID: 'grad1',
    gradientStops: [
      {
        offset: 0,
        color: '#ec028d'
      },
      {
        offset: 100,
        color: '#fdd941'
      }
    ],
    filterID: 'filter1',
    filterColor: '#F57066',
    strokeLinecap: 'round', // 'butt', 'square' or 'round'
    results: [
      {
        value: 295,
        color: 'purple' // not used when a gradient is present
      }
    ]
  };
  
  // example with 3 results - CONFIGURABLE PATH - line bar
  // support a stroke width of 40
  // NOTE: path is based on a ViewBox of 120 x 20
  
  const data4 = {
    endValue: 500,
    viewBoxWidth: 120,
    viewBoxHeight: 20,
    strokeWidth: 4,
    path: 'M2 2 L116 2',
    pathLength: 114,
    results: [
      {
        value: 95,
        color: 'blue'
      },
      {
        value: 316,
        color: 'salmon'
      },
      {
        value: 203,
        color: '#FFBF00'
      }
    ]
  };
  
  
  // example with 3 results - CONFIGURABLE PATH
  // NOTE: path is based on a ViewBox of 120 x 120
  
  const data5 = {
    endValue: 500,
    path: 'M10 110 L40 60 L80 60 L110 10 L105 5 L115 5 L118 18 L110 10',
    pathLength: 198.35,
    results: [
      {
        value: 95,
        color: 'blue'
      },
      {
        value: 316,
        color: 'salmon'
      },
      {
        value: 203,
        color: '#FFBF00'
      }
    ]
  };
  
  export { data, data0, data1, data2, data3, data4, data5 };
  export default data;