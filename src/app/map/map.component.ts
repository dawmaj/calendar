import { Component, OnInit } from '@angular/core';

import OlMap from 'ol/Map';
import OlVectorSource from 'ol/source/Vector';
import OlVectorLayer from 'ol/layer/Vector';
import OlView from 'ol/View';
import OlFeature from 'ol/Feature';
import OlPoint from 'ol/geom/Point';
import OlXyzSource from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import LineString from 'ol/geom/LineString';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import Fill from 'ol/style/Fill';
import { fromLonLat } from 'ol/proj';
import { markParentViewsForCheck } from '@angular/core/src/view/util';

declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  constructor() { }

  map: OlMap;
    vectorSource: OlVectorSource;
    vectorLayer: OlVectorLayer;
    xyzSource: OlXyzSource;
    tileLayer: OlTileLayer;
    view: OlView;
  latitude: number = 52.4082663;
  longitude: number = 16.9335199;

  ngOnInit() {
    this.vectorSource = new OlVectorSource({});
    var vectorLine = new OlVectorSource({});
    var places = [
      [16.9335199, 52.4082663],
      [15.9335000, 52.4082000],
      [14.9300000, 52.4080000],
    ];
    
    var points = [ 
    [16.9335199, 52.4082663],
    [15.9335000, 52.4082000],
    [14.9300000, 52.4080000]
  ];

    
    for (var i = 0; i < places.length; i++) {
      console.log(places[i][0], places[i][1]);
      var iconFeature = new OlFeature({
        geometry: new OlPoint(fromLonLat([places[i][0], places[i][1]])),
      });
      this.vectorSource.addFeature(iconFeature);
    }
      for (var i = 0; i < points.length; i++) {
            points[i] = fromLonLat(points[i]);
            console.log(points[i]);
      }

      var featureLine = new OlFeature({
        geometry: new LineString(points)
      });
      vectorLine.addFeature(featureLine);
     

      var vectorLineLayer = new OlVectorLayer({
          source: vectorLine,
          style: new Style({
              fill: new Fill({ color: '#00FF00', weight: 4 }),
              stroke: new Stroke({ color: '#00FF00', width: 2 })
          })
      });
    this.view = new OlView({
      center: fromLonLat([16.9335199, 52.4082663]),
      zoom: 8
    });


  this.vectorLayer = new OlVectorLayer({
      source: this.vectorSource
  });

  /* XYZ */

  this.xyzSource = new OlXyzSource({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
  });

  this.tileLayer = new OlTileLayer({
      source: this.xyzSource
  });

  /* View and map */

  this.map = new OlMap({
      target: 'map',
      // Added both layers
      layers: [this.tileLayer, this.vectorLayer, vectorLineLayer],
      view: this.view
  });
  }
}
