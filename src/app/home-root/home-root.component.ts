import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-home-root',
  templateUrl: './home-root.component.html',
  styleUrls: ['./home-root.component.css']
})
export class HomeRootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (document.getElementById('barchart_values')) {
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(this.drawChart);


    }
  }
  public drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['City', '2010 Population'],
      ['New York City, NY', 8175000],
      ['Los Angeles, CA', 3792000],
      ['Chicago, IL', 2695000],
      ['Houston, TX', 2099000],
      ['Philadelphia, PA', 1526000]
    ]);

    const options = {
      title: 'Population of Largest U.S. Cities',
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Total Population',
        minValue: 0
      },
      vAxis: {
        title: 'City'
      }
    };

    const chart = new google.visualization.BarChart(document.getElementById('barchart_values'));

    chart.draw(data, options);
  }

}
