import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  latitude: number = 52.4082663;
  longitude: number = 16.9335199;

  map: any;

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([16.9335199, 52.4082663]),
        zoom: 8
      })
});
  }
}
