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
  myPolygon;
  colors = [
    this.getRandomColor(),
    this.getRandomColor(),
    this.getRandomColor(),
    this.getRandomColor(),
    this.getRandomColor(),
    this.getRandomColor()
  ];
  selectedColor;
  colorButtons = {};
  chekmode = false;

  clearSelection() {
    if (this.selectedShape) {
      this.selectedShape.setEditable(false);
      // this.selectedShape = null;
    }
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  setSelection(shape) {
    this.clearSelection();
    this.selectedShape = shape;
    shape.setEditable(true);
    this.selectColor(shape.get('fillColor') || shape.get('strokeColor'));
  }

  deleteSelectedShape() {
    if (this.selectedShape) {
      this.selectedShape.setMap(null);
      document.getElementById('info').innerHTML = '';
    }
  }


  getCoodinates() {
    if (this.selectedShape) {
      const len = this.selectedShape.getPath().getLength();
      let htmlStr = '';
      for (let i = 0; i < len; i++) {
        htmlStr += this.selectedShape.getPath().getAt(i).toUrlValue(5) + '\n';
      }
      console.log(htmlStr);
      document.getElementById('info').innerHTML = htmlStr;
    }
    else {
      alert('Select A Polygon First.');
    }
  }

  selectColor(color) {
    this.selectedColor = color;
    // Retrieves the current options from the drawing manager and replaces the
    // stroke or fill color as appropriate.
    const polylineOptions = this.drawingManager.get('polylineOptions');
    polylineOptions.strokeColor = color;
    this.drawingManager.set('polylineOptions', polylineOptions);

    const polygonOptions = this.drawingManager.get('polygonOptions');
    polygonOptions.fillColor = color;
    this.drawingManager.set('polygonOptions', polygonOptions);
  }

  setSelectedShapeColor(color) {
    if (this.selectedShape) {
      if (this.selectedShape.type === google.maps.drawing.OverlayType.POLYLINE) {
        this.selectedShape.set('strokeColor', color);
      } else {
        this.selectedShape.set('fillColor', color);
      }
    }
  }

  makeColorButton(color) {
    const button = document.createElement('span');
    button.className = 'color-button';
    button.style.backgroundColor = color;
    google.maps.event.addDomListener(button, 'click', () => {
      this.selectColor(color);
      this.setSelectedShapeColor(color);
    });

    return button;
  }

  buildColorPalette() {
    const colorPalette = document.getElementById('color-palette');
    for (let i = 0; i < this.colors.length; ++i) {
      const currColor = this.colors[i];
      const colorButton = this.makeColorButton(currColor);
      colorPalette.appendChild(colorButton);
      this.colorButtons[currColor] = colorButton;
    }
    this.selectColor(this.colors[0]);
  }

  initialize() {

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(33.5362475, -111.9267386),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: false,
      zoomControl: true
    });

    const polyOptions = {
      strokeWeight: 0,
      fillOpacity: 0.45,
      editable: true
    };
    this.drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.POLYGON
        ]
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


    google.maps.event.addListener(this.drawingManager, 'overlaycomplete', (e) => {
      this.drawingManager.setDrawingMode(null);

      // Add an event listener that selects the newly-drawn shape when the user
      // mouses down on it.
      if (e.type !== google.maps.drawing.OverlayType.MARKER) {
        // Switch back to non-drawing mode after drawing a shape.
        const newShape = e.overlay;
        newShape.type = e.type;
        google.maps.event.addListener(newShape, 'click', () => {
          this.setSelection(newShape);
        });
        this.setSelection(newShape);
      }
    });

    const triangleCoords = [
      new google.maps.LatLng(33.5362475, -111.9267386),
      new google.maps.LatLng(33.5104882, -111.9627875),
      new google.maps.LatLng(33.5004686, -111.9027061)
    ];
    // Styling & Controls
    this.myPolygon = new google.maps.Polygon({
      paths: triangleCoords,
      draggable: true, // turn off if it gets annoying
      editable: true,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35
    });

    this.myPolygon.setMap(map);

    // Clear the current selection when the drawing mode is changed, or when the
    // map is clicked.
    google.maps.event.addListener(this.drawingManager, 'drawingmode_changed', this.clearSelection);
    google.maps.event.addListener(map, 'click', this.clearSelection);

    google.maps.event.addDomListener(document.getElementById('delete-button'), 'click', this.deleteSelectedShape());
    google.maps.event.addDomListener(document.getElementById('get-coods-button'), 'click', this.getCoodinates());

    this.buildColorPalette();
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
      google.maps.event.addDomListener(window, 'load', this.initialize());
    }
  }




}


