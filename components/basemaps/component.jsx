/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/ui/dropdown';
import cx from 'classnames';
import { Tooltip } from 'react-tippy';

import { Row, Column, Button, Mobile, Desktop } from 'gfw-components';

import Icon from 'components/ui/icon';

import infoIcon from 'assets/icons/info.svg?sprite';
import closeIcon from 'assets/icons/close.svg?sprite';
import arrowIcon from 'assets/icons/arrow-down.svg?sprite';

import boundariesIcon from 'assets/icons/boundaries.svg?sprite';
import labelsIcon from 'assets/icons/labels.svg?sprite';
import roadsIcon from 'assets/icons/roads.svg?sprite';

import BasemapsMenu from './basemaps-menu';

import './styles.scss';

class Basemaps extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    boundaries: PropTypes.array,
    basemaps: PropTypes.object.isRequired,
    labels: PropTypes.array.isRequired,
    labelSelected: PropTypes.object.isRequired,
    landsatYears: PropTypes.array.isRequired,
    selectLabels: PropTypes.func.isRequired,
    selectBasemap: PropTypes.func.isRequired,
    activeBasemap: PropTypes.object.isRequired,
    selectBoundaries: PropTypes.func.isRequired,
    activeBoundaries: PropTypes.object,
    isDesktop: PropTypes.bool,
    getTooltipContentProps: PropTypes.func.isRequired,
    setModalMetaSettings: PropTypes.func,
    roadsSelected: PropTypes.object.isRequired,
    selectRoads: PropTypes.func.isRequired,
    roads: PropTypes.array.isRequired,
    planetBasemapSelected: PropTypes.object,
    planetYears: PropTypes.array,
    planetYearSelected: PropTypes.object,
    planetPeriods: PropTypes.array,
    planetPeriodSelected: PropTypes.object,
  };

  state = {
    planetTooltipOpen: false,
    showBasemaps: false,
  };

  renderLandsatBasemap(item) {
    const {
      selectBasemap,
      activeBasemap,
      landsatYears,
      basemaps,
      isDesktop,
    } = this.props;
    const year = activeBasemap.year || landsatYears[0].value;
    const basemap = basemaps[item.value]
      ? basemaps[item.value]
      : basemaps.landsat;

    return (
      <button
        className="basemaps-list-item-button"
        onClick={() => {
          selectBasemap({
            value: 'landsat',
            year: basemap.defaultYear,
          });
          if (!isDesktop) {
            this.setState({ showBasemaps: !this.state.showBasemaps });
          }
        }}
      >
        <div
          className="basemaps-list-item-image"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        />
        <span
          className="basemaps-list-item-name"
          onClick={(e) => e.stopPropagation()}
        >
          {item.label}
          <div className="basemaps-list-item-selectors">
            <Dropdown
              className="landsat-selector"
              theme="theme-dropdown-native-inline"
              value={year}
              options={landsatYears}
              onChange={(value) => {
                const selectedYear = parseInt(value, 10);
                selectBasemap({
                  value: 'landsat',
                  year: selectedYear,
                });
                if (!isDesktop) {
                  this.setState({ showBasemaps: !this.state.showBasemaps });
                }
              }}
              native
            />
          </div>
        </span>
      </button>
    );
  }

  renderPlanetBasemap(item) {
    const {
      isDesktop,
      selectBasemap,
      planetBasemapSelected,
      planetYears,
      planetYearSelected,
      planetPeriods,
      planetPeriodSelected,
    } = this.props;
    const { planetTooltipOpen } = this.state;
    const { name, interval, year, period } = planetBasemapSelected || {};
    const basemap = {
      value: 'planet',
      name,
      interval,
      planetYear: year,
      period,
    };

    return (
      <button
        className="basemaps-list-item-button"
        onClick={() => {
          if (!isDesktop) {
            this.setState({ showBasemaps: !this.state.showBasemaps });
          }
          selectBasemap(basemap);
        }}
      >
        <div
          className="basemaps-list-item-image"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        />
        <span
          className="basemaps-list-item-name"
          onClick={(e) => e.stopPropagation()}
        >
          {item.label}
          <div className="basemaps-list-item-selectors">
            <Tooltip
              useContext
              theme="light"
              arrow
              interactive
              onRequestClose={() => this.setState({ planetTooltipOpen: false })}
              open={planetTooltipOpen}
              html={(
                <div className="c-basemaps-tooltip">
                  <span
                    className="planet-tooltip-close"
                    onClick={() => this.setState({ planetTooltipOpen: false })}
                  >
                    <Icon icon={closeIcon} />
                  </span>
                  {planetYears && planetPeriods ? (
                    <div className="date-selectors">
                      <Dropdown
                        className="year-selector"
                        label="Year"
                        theme="theme-dropdown-native"
                        value={planetYearSelected}
                        options={planetYears}
                        onChange={(selected) => {
                          const selectedYear = planetYears.find(
                            (f) => f.value === parseInt(selected, 10)
                          );
                          selectBasemap({
                            value: 'planet',
                            interval:
                              (selectedYear && selectedYear.interval) || null,
                            period:
                              (selectedYear && selectedYear.period) || null,
                            planetYear: parseInt(selected, 10),
                            name: (selectedYear && selectedYear.name) || '',
                          });
                        }}
                        native
                      />
                      <Dropdown
                        className="period-selector"
                        label="Period"
                        theme="theme-dropdown-native"
                        value={planetPeriodSelected}
                        options={planetPeriods}
                        onChange={(selected) => {
                          const selectedPeriod = planetPeriods.find(
                            (f) => f.value === selected
                          );
                          selectBasemap({
                            value: 'planet',
                            period: selected,
                            interval:
                              (selectedPeriod && selectedPeriod.interval) || '',
                            planetYear:
                              (selectedPeriod && selectedPeriod.year) || '',
                            name: (selectedPeriod && selectedPeriod.name) || '',
                          });
                        }}
                        native
                      />
                    </div>
                  ) : (
                    <div className="date-selectors">
                      <p>There was an error retrieving the data.</p>
                    </div>
                  )}
                </div>
              )}
              trigger="click"
              position="top"
            >
              <span
                className="planet-label"
                onClick={() => {
                  this.setState({ planetTooltipOpen: !planetTooltipOpen });
                }}
              >
                {(planetBasemapSelected && planetBasemapSelected.label) ||
                  'Select...'}
                <Icon icon={arrowIcon} className="arrow-icon" />
              </span>
            </Tooltip>
          </div>
        </span>
      </button>
    );
  }

  render() {
    const {
      className,
      labelSelected,
      activeBasemap,
      getTooltipContentProps,
      activeBoundaries,
      selectBoundaries,
      boundaries,
      selectLabels,
      labels,
      isDesktop,
      roadsSelected,
      selectRoads,
      roads,
      basemaps,
      setModalMetaSettings,
      selectBasemap,
      onClose,
    } = this.props;

    const selectedBoundaries = activeBoundaries
      ? { label: activeBoundaries.name }
      : boundaries && boundaries[0];

    return (
      <div
        className={cx('c-basemaps', 'map-tour-basemaps', className)}
        {...getTooltipContentProps()}
      >
        <Row>
          <Column>
            <div className="map-settings-header">
              <h4>Map settings</h4>
              <div className="header-actions">
                <Button
                  className="info-btn"
                  size="small"
                  dark
                  round
                  onClick={() => setModalMetaSettings('flagship_basemaps')}
                >
                  <Icon icon={infoIcon} />
                </Button>
                <Desktop>
                  <button className="close-btn" onClick={onClose}>
                    <Icon icon={closeIcon} />
                  </button>
                </Desktop>
              </div>
            </div>
          </Column>
        </Row>
        <Row className="map-settings">
          <Column width={[1 / 4, 0]} className="mobile-basemaps-btn">
            <Mobile>
              <div className="map-settings-item">
                <Button
                  round
                  size="large"
                  clear
                  onClick={() =>
                    this.setState({ showBasemaps: !this.state.showBasemaps })}
                >
                  <img
                    src={activeBasemap.image}
                    alt={activeBasemap.label}
                    className="basemap-img"
                  />
                </Button>
                <span className="item-label">
                  {activeBasemap.label}
                  {activeBasemap.year && ` - ${activeBasemap.year}`}
                </span>
              </div>
            </Mobile>
          </Column>
          <Column width={[1 / 4, 1 / 3]} className="map-settings-col">
            <Dropdown
              className="map-settings-dropdown"
              theme={cx('theme-dropdown-button', {
                'theme-dropdown-dark-round theme-dropdown-no-border': !isDesktop,
                'theme-dropdown-dark-squared': isDesktop,
              })}
              value={selectedBoundaries}
              options={boundaries}
              onChange={selectBoundaries}
              selectorIcon={boundariesIcon}
            />
          </Column>
          <Column width={[1 / 4, 1 / 3]} className="map-settings-col">
            <Dropdown
              className="map-settings-dropdown"
              theme={cx('theme-dropdown-button', {
                'theme-dropdown-dark-round theme-dropdown-no-border': !isDesktop,
                'theme-dropdown-dark-squared': isDesktop,
              })}
              value={labelSelected}
              options={labels}
              onChange={selectLabels}
              selectorIcon={labelsIcon}
            />
          </Column>
          <Column width={[1 / 4, 1 / 3]} className="map-settings-col">
            <Dropdown
              className="map-settings-dropdown"
              theme={cx('theme-dropdown-button', {
                'theme-dropdown-dark-round theme-dropdown-no-border': !isDesktop,
                'theme-dropdown-dark-squared': isDesktop,
              })}
              value={roadsSelected}
              options={roads}
              onChange={selectRoads}
              selectorIcon={roadsIcon}
            />
          </Column>
        </Row>
        {(isDesktop || this.state.showBasemaps) && (
          <BasemapsMenu
            basemaps={basemaps}
            activeBasemap={activeBasemap?.value}
            onSelectBasemap={(basemap) =>
              selectBasemap({
                value: basemap?.value,
                ...(basemap?.defaultYear && {
                  year: basemap.defaultYear,
                }),
              })}
          />
        )}
      </div>
    );
  }
}

export default Basemaps;
