import { Component, OnInit } from '@angular/core';
declare const google: any;

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

    if (document.getElementById('piechart')) {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(this.drawPie)
    }
  }
  public drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['City', '2010 Population'],
      ['New York City, NY', 0],
      ['Los Angeles, CA', 50],
      ['Chicago, IL', 1],
      ['Houston, TX', 2],
      ['Philadelphia, PA', 3]
    ]);

    const options = {
      title: 'Population of Largest U.S. Cities',
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Total Population',
        minValue: 0,
        viewWindow: {
          min: 0
        }
      },
      vAxis: {
        title: 'City'
      }
    };

    const chart = new google.visualization.BarChart(document.getElementById('barchart_values'));

    chart.draw(data, options);
  }
  public drawPie() {

    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ]);

    const options = {
      title: 'My Daily Activities',
      chartArea: { width: 400, height: 400 }
    };

    const chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }

}
