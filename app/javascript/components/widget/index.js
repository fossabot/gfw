import { createElement, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CancelToken } from 'axios';
import isEqual from 'lodash/isEqual';
import pick from 'lodash/pick';

import WidgetComponent from './component';

const mapStateToProps = (state, props) => {
  const { parseData, widget, ...rest } = props;
  const parsedProps = {
    ...rest,
    ...(parseData && parseData(rest))
  };
  const { settings, data } = parsedProps || {};
  const { settings: dataSettings, options: dataOptions } = data || {};
  const mergedProps = {
    ...parsedProps,
    settings: {
      ...dataSettings,
      ...settings
    }
  };
  const { title, locationLabelFull } = mergedProps;

  return {
    ...mergedProps,
    options:
      mergedProps.options &&
      mergedProps.options.map(o => {
        const options = (dataOptions && dataOptions[o.key]) || o.options || [];
        const parsedOptions =
          typeof o.options === 'function' ? o.options(mergedProps) : options;

        return {
          ...o,
          options: parsedOptions.filter(
            opt => !o.whitelist || o.whitelist.includes(opt.value)
          ),
          value:
            parsedOptions &&
            parsedOptions.find(opt => opt.value === mergedProps.settings[o.key])
        };
      }),
    title: title && title.replace('{location}', locationLabelFull || '...')
  };
};

class WidgetContainer extends Component {
  static propTypes = {
    widget: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    getData: PropTypes.func.isRequired,
    setWidgetData: PropTypes.func.isRequired,
    refetchKeys: PropTypes.array,
    error: PropTypes.bool,
    settings: PropTypes.object,
    data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  };

  static defaultProps = {
    widget: '',
    location: {},
    getData: fetch,
    setWidgetData: () => {}
  };

  state = {
    loading: false,
    error: false
  };

  _mounted = false;

  componentDidMount() {
    this._mounted = true;
    const { location, settings, data } = this.props;
    const params = { ...location, ...settings };

    if (!data || data.noContent) {
      this.handleGetWidgetData(params);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { location, settings, refetchKeys } = this.props;
    const { error } = this.state;

    const hasLocationChanged = !isEqual(location, prevProps.location);
    const hasErrorChanged =
      !error &&
      prevState.error !== undefined &&
      !isEqual(error, prevState.error);
    const refetchSettings = refetchKeys ? pick(settings, refetchKeys) : settings;
    const refetchPrevSettings = refetchKeys ? pick(prevProps.settings, refetchKeys) : prevProps.settings;
    const hasSettingsChanged = !isEqual(refetchSettings, refetchPrevSettings);

    // refetch data if error, settings, or location changes
    if (hasSettingsChanged || hasLocationChanged || hasErrorChanged) {
      const params = { ...location, ...settings };
      this.handleGetWidgetData(params);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
    this.cancelWidgetDataFetch();
  }

  handleGetWidgetData = params => {
    const { getData, setWidgetData } = this.props;
    this.cancelWidgetDataFetch();
    this.widgetDataFetch = CancelToken.source();

    this.setState({ loading: true, error: false });
    getData({ ...params, token: this.widgetDataFetch.token })
      .then(data => {
        setWidgetData(data);
        if (this._mounted) {
          this.setState({ loading: false, error: false });
        }
      })
      .catch(error => {
        console.info(error);
        if (this._mounted) {
          this.setState({ error: true, loading: false });
        }
      });
  };

  cancelWidgetDataFetch = () => {
    if (this.widgetDataFetch) {
      this.widgetDataFetch.cancel(`Cancelling ${this.props.widget} fetch`);
    }
  };

  render() {
    return createElement(WidgetComponent, {
      ...this.props,
      ...this.state
    });
  }
}

export default connect(mapStateToProps)(WidgetContainer);
