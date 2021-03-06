// This configuration object determines which deck.gl classes are accessible in Playground

import {MapView, FirstPersonView, OrbitView, OrthographicView} from '@deck.gl/core';
import * as Layers from '@deck.gl/layers';
import * as AggregationLayers from '@deck.gl/aggregation-layers';
import * as GeoLayers from '@deck.gl/geo-layers';
import * as MeshLayers from '@deck.gl/mesh-layers';

import {COORDINATE_SYSTEM} from '@deck.gl/core';
import GL from '@luma.gl/constants';

import {registerLoaders} from '@loaders.gl/core';
import {CSVLoader} from '@loaders.gl/csv';
import {DracoLoader, DracoWorkerLoader} from '@loaders.gl/draco';

// Note: deck already registers JSONLoader...
registerLoaders([CSVLoader]);

export default {
  // Classes that should be instantiatable by JSON converter
  classes: Object.assign(
    // Support `@deck.gl/core` Views
    {MapView, FirstPersonView, OrbitView, OrthographicView},
    // a map of all layers that should be exposes as JSONLayers
    Layers,
    AggregationLayers,
    GeoLayers,
    MeshLayers,
    // Any non-standard views
    {}
  ),

  // Enumerations that should be available to JSON parser
  // Will be resolved as `<enum-name>.<enum-value>`
  enumerations: {
    COORDINATE_SYSTEM,
    GL
  },

  // Constants that should be resolved with the provided values by JSON converter
  constants: {
    DracoLoader,
    DracoWorkerLoader
  }
};
