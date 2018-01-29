import moment from 'moment';
import { getRangeForDates } from 'utils/dates';
import CartoDB from './abstract/cartoDB';
import ViirsCartoCSS from '../cartocss/viirs.cartocss';

const OPTIONS = {
  sql:
    "SELECT the_geom_webmercator, '{tableName}' as tablename,'{tableName}' AS layer, (SUBSTR(acq_time, 1, 2) || ':' || SUBSTR(acq_time, 3, 4)) as acq_time,  COALESCE(to_char(acq_date, 'DD Mon, YYYY')) as acq_date, confidence, bright_ti4 brightness, longitude, latitude FROM {tableName} WHERE acq_date >= '{year}-{month}-{day}' AND confidence != 'low'",
  cartocss: ViirsCartoCSS,
  interactivity:
    'acq_time, acq_date, confidence, brightness, longitude, latitude',
  infowindow: true
};

class Viirs extends CartoDB {
  constructor(map, options) {
    super(map, OPTIONS);
    this.options = { ...this.options, ...options };
    this.currentDate = getRangeForDates(
      options.currentDate || [moment().subtract(24, 'hours'), moment()]
    );
  }

  _getQuery() {
    return this.options.sql
      .replace(/{tableName}/g, this.options.layerSpec.table_name)
      .replace('{year}', moment(this.currentDate[0]).year())
      .replace('{month}', moment(this.currentDate[0]).format('MM'))
      .replace('{day}', moment(this.currentDate[0]).format('DD'));
  }
}

export default Viirs;
