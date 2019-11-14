import React, {Component} from 'react';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.resultLayers = [];
    this.barPath = this.props.path && this.props.pathLength ?
      this.props.path : 'M25.29 101.37 A 54 54 0 1 1 94.71 101.37';
    this.startValue = this.props.startValue || 0;
    this.endValue = this.props.endValue;
    this.width = this.props.viewBoxWidth || 120;
    this.height = this.props.viewBoxHeight || 120;
  }

  getStroke() {
    if (this.props.patternID) {
      return `url(#${this.props.patternID})`;
    }
    if (this.props.gradientID) {
      return `url(#${this.props.gradientID})`;
    }
    return null;
  }

  componentDidMount() {
    this.setStylesForProgressAnimation(this.resultLayers);
  }

  setStylesForProgressAnimation(layers) {
    const totalPoints = this.endValue - this.startValue;
    const progressSector = 7 / 9; // 280 degrees / 360
    const radius = 54;

    layers.forEach((layer) => {
      const percent = layer.value / totalPoints;
      const pathLength = this.props.pathLength ? this.props.pathLength : 2 * Math.PI * radius * progressSector;

      // fallback for IE (show results with no no amination)
      layer.elem.setAttribute('stroke-dasharray', pathLength);
      layer.elem.setAttribute('stroke-dashoffset', pathLength * (1 - percent));

      // normal browsers will support animation
      layer.elem.style.setProperty('--path-length', pathLength);
      layer.elem.style.setProperty('--value', pathLength * (1 - percent));
    });
  }

  render() {
    const sortedresults = this.props.results.sort(
      (val1, val2) =>  {
        return val2.value - val1.value;
      });
    const gradient = !this.props.gradientID ? '' :
      <linearGradient
        id={this.props.gradientID}
        x1="0%"
        y1="0%"
        x2="80%"
        y2="0%"
        gradientUnits="userSpaceOnUse">
        {this.props.gradientStops.map((stop, index) => {
          return (
            <stop
              key={index}
              offset={stop.offset}
              stopColor={stop.color} />
          );
        })}
      </linearGradient>;
    const filter = !this.props.filterID ? '' :
      <filter
        id={this.props.filterID}
        x="-50%"
        y="-50%"
        width="200%"
        height="200%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA
            type="table"
            tableValues="1 0" />
        </feComponentTransfer>
        <feFlood floodColor="white"/>
        <feComposite
          in2="SourceAlpha"
          operator="out"/>
        <feGaussianBlur stdDeviation="3"/>
        <feOffset
          dx="0"
          dy="0"
          result="offsetblur"/>
        <feFlood
          floodColor={this.props.filterColor}
          result="color"/>
        <feComposite
          in2="offsetblur"
          operator="in"/>
        <feComposite
          in2="SourceAlpha"
          operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic"/>
          <feMergeNode/>
        </feMerge>
      </filter>;
    const pattern = !this.props.patternID ? '' :
      <pattern
        id={this.props.patternID}
        patternUnits="userSpaceOnUse"
        width={this.width}
        height={this.height}>
        <image
          xlinkHref={this.props.patternUrl}
          width={this.width}
          height={this.height} />
      </pattern>;

    return (
      <svg
        className="lci-progress-bar-svg"
        strokeLinecap={this.props.strokeLinecap || 'round'}
        width={this.width}
        height={this.height}
        strokeWidth={this.props.strokeWidth || 12}
        viewBox={`0 0 ${this.width} ${this.height}`}>
        <defs>
          {gradient}
          {filter}
          {pattern}
        </defs>
        <path
          className="lci-progress-bar__bottom-layer"
          d={this.barPath} />
        {sortedresults.map((result, index) => {
          const fixedStartValue = result.value - this.startValue;
          const filterStyle = this.props.filterID ? `url(#${this.props.filterID})` : null;

          return (
            <path
              ref={(elem) => {
                this.resultLayers.push({elem, value: fixedStartValue});
              }}
              stroke={this.getStroke() || result.color}
              filter={filterStyle}
              key={index}
              className={`lci-progress-bar__layer${index} ${result.cssClass || ''}`}
              d={this.barPath} />
          );
        })}
      </svg>
    );
  }
}
export default ProgressBar