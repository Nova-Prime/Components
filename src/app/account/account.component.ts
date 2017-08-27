import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  drawingManager;
  selectedShape;

  clearSelection() {
    if (this.selectedShape) {
      this.selectedShape.setEditable(false);
      this.selectedShape = null;
    }
  }

  setSelection(shape) {
    this.clearSelection();
    this.selectedShape = shape;
    shape.setEditable(true);
  }

  deleteSelectedShape() {
    if (this.selectedShape) {
      this.selectedShape.setMap(null);
      this.selectedShape = null;
      document.getElementById('info').innerHTML = '';
    }
  }

  getCoodinates() {
    this.drawingManager.setDrawingMode(null);
    if (this.selectedShape) {
      const len = this.selectedShape.getPath().getLength();
      let htmlStr = '';
      for (let i = 0; i < len; i++) {
        htmlStr += this.selectedShape.getPath().getAt(i).toUrlValue(5) + '\n';
      }
      document.getElementById('info').innerHTML = htmlStr;
    }
    else {
      console.log('select something');
      alert('Select A Polygon First.');
    }
  }


  initialize() {

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(33.5362475, -111.9267386),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      zoomControl: true
    });

    const polyOptions = {
      strokeWeight: 0,
      fillOpacity: 0.45,
      fillColor: 'green',
      editable: true
    };
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.Polygon,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: []
      },
      markerOptions: {
        draggable: true
      },
      polylineOptions: {
        editable: true
      },
      polygonOptions: polyOptions,
      map: map
    });

    this.drawingManager.setMap(map);
    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (e) => {
      this.drawingManager.setDrawingMode(null);
      if (e.type !== google.maps.drawing.OverlayType.MARKER) {
        const newShape = e.overlay;
        newShape.type = e.type;
        google.maps.event.addListener(newShape, 'click', () => {
          this.setSelection(newShape);
        });
        this.setSelection(newShape);
      }
    });
    google.maps.event.addListener(this.drawingManager, 'drawingmode_changed', () => this.clearSelection());
    google.maps.event.addListener(map, 'click', () => this.clearSelection());
  }

  constructor() { }


  ngOnInit() {
    /*     if (document.getElementById('map')) {
          const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
          });
          const drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: ['polygon']
            },
            markerOptions: { icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' },
            circleOptions: {
              fillColor: '#ffff00',
              fillOpacity: 1,
              strokeWeight: 5,
              clickable: false,
              editable: true,
              zIndex: 1
            }
          });
          drawingManager.setMap(map);
          google.maps.event.addListener(drawingManager, 'polygoncomplete',  (polygon) {
            const coordinates = (polygon.getPath().getArray());
            console.log(coordinates);
          }); */
    if (document.getElementById('map')) {
      this.initialize();
    }
  }

  setDrawingMode() {
    this.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
  }

}


