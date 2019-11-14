import React from 'react';
import ProgressBar from './progressBar';
import props, {data0, data1, data2, data3, data4, data5} from './progressBarProps';

const App = () => (
    <div>
    <section className="example-page__section"><ProgressBar {...props} />
      <h3>1 result with pattern</h3>
      <p>Uses default path and a custom pattern for the stroke</p>
      <pre>
        <code>{`
        const data = {
          endValue: 203,
          patternID: 'svgPattern',
          patternUrl: 'https://danielcss.github.io/experiments/assets/gradient1.png',
          results: [
            {
              value: 203,
              color: '#FFBF00'
            }
          ]
        };`}
        </code>
      </pre>
    </section>
    <section className="example-page__section"><ProgressBar {...data0} />
      <h3>3 results</h3>
      <p>Uses custom CSS class for each result</p>
      <pre>
        <code>{`
          const data0 = {
            endValue: 500,
            results: [
              {
                value: 20,
                cssClass: 'lci-progress-bar__result1',
                color: 'salmon'
              },
              {
                value: 100,
                cssClass: 'lci-progress-bar__result2',
                color: 'rebeccapurple'
              },
              {
                value: 250,
                cssClass: 'lci-progress-bar__result3',
                color: 'gold'
              }
            ]
          };`}
        </code>
      </pre>
    </section>
    <section className="example-page__section"><ProgressBar {...data1} />
      <h3>Gradient and Filter</h3>
      <p>NOTE: Only ONE gradient and filter will be applied - even if there are multiple results!!!</p>
      <pre>
        <code>{`
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
          results: [value: 95}, { value: 406 }, { value: 203}]
        };`}
        </code>
      </pre>
    </section>
    <section className="example-page__section"><ProgressBar {...data2} />
      <h3>2 results, strokeLinecap: 'butt' - </h3>
      <p>NOTE #1: startValue is not 0!! Support for this is based on a requirement from Coby
    COBY NEEDS TO VERIFY THIS</p>
      <p>NOTE #2: The strokeLinecap prop isnt really necessary as it come be achieved with CSS</p>
      <pre>
        <code>{`
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
        };`}
        </code>
      </pre>
    </section>
    <section className="example-page__section"><ProgressBar {...data3} />
      <h3>One result, with gradient and filter</h3>
      <p>Note: strokeLinecap is round by default</p>
      <pre>
        <code>{`
        const data3 = {
          startValue: 0,
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
        };`}
        </code>
      </pre>
    </section>
    <section className="example-page__section"><ProgressBar {...data4} />
      <h3>CONFIGURABLE PATH - line bar</h3>
      <p>Note: path is based on a ViewBox of 120 x 120</p>
      <pre>
        <code>{`
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
        };`}
        </code>
      </pre>
    </section>
    <section className="example-page__section"><ProgressBar {...data5} />
      <h3>CONFIGURABLE PATH - custom path</h3>
      <p>Note: path is based on a ViewBox of 120 x 120</p>
      <pre>
        <code>{`
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
        };`}
        </code>
      </pre>
    </section></div>
)

export default App