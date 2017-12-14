import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WidgetChartToolTip from 'pages/country/widget/components/widget-chart-tooltip';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import './widget-bar-chart-styles.scss';

class WidgetBarChart extends PureComponent {
  render() {
    const { data, xKey, yKey, className } = this.props;
    return (
      <div className={`c-bar-chart ${className}`}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey={xKey}
              padding={{ top: 135 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey={yKey}
              axisLine={false}
              tickLine={false}
              tickCount={7}
            />
            <CartesianGrid vertical={false} strokeDasharray="3 4" />
            <Tooltip content={<WidgetChartToolTip />} />
            <Bar dataKey={yKey} barSize={22} fill="#fe6598" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

WidgetBarChart.propTypes = {
  data: PropTypes.array,
  xKey: PropTypes.string,
  yKey: PropTypes.string,
  className: PropTypes.string
};

WidgetBarChart.defaultProps = {};

export default WidgetBarChart;
