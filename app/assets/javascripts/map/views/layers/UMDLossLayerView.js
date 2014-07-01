/**
 * The UMD loss map layer view.
 *
 * @return UMDLossLayerView class (extends CanvasLayer)
 */
define([
  'moment',
  'views/layers/class/CanvasLayer',
  'presenters/UMDLossLayerPresenter'
], function(moment, CanvasLayer, Presenter) {

  'use strict';

  var UMDLossLayerView = CanvasLayer.extend({

    init: function(layer) {
      this._super();
      this.layer = layer;
      this.dataMaxZoom = 12;
      this.name = layer.slug;
      this.urlTemplate = 'http://earthengine.google.org/static/hansen_2013/gfw_loss_year{/z}{/x}{/y}.png';
      this.presenter = new Presenter(this);
    },

    /**
     * Implementation for CanvasLayerView.filterCanvasImage().
     *
     * @param  {[type]} imgdata [description]
     * @param  {[type]} w       [description]
     * @param  {[type]} h       [description]
     * @param  {[type]} z       [description]
     * @return {[type]}         [description]
     */
    filterCanvasImage: function(imgdata, w, h, z) {
      var components = 4;

      var timelineDate = [2001, 2004];

      for(var i = 0; i < w; ++i) {
        for(var j = 0; j < h; ++j) {
          var pixelPos = (j * w + i) * components,
              yearLoss = imgdata[pixelPos],
              yearStart = timelineDate[0],
              yearEnd = timelineDate[1];

          yearLoss = 2000 + yearLoss;

          if (imgdata[pixelPos + 1] > 10 && (yearLoss >= yearStart && yearLoss < yearEnd)) {
            imgdata[pixelPos] = 220;
            imgdata[pixelPos + 1] = 102;
            imgdata[pixelPos + 2] = 153;
            imgdata[pixelPos + 3] = (z < 13) ? (12/z) * 255 : 255;
          } else {
            imgdata[pixelPos + 3] = 0;
          }
        }
      }
    },

    /**
     * Used by UMDLoassLayerPresenter to set the dates for the tile.
     *
     * @param {Array} date 2D array of moment dates [begin, end]
     */
    setTimelineDate: function(date) {
      this.timelineDate = date;
    }
  });

  return UMDLossLayerView;

});
