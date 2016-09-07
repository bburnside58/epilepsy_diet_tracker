import { Component } from "@angular/core";
import { Chart } from "./chart.model";
// import { ZingCharts } from "./zingcharts.component";

@Component({
    selector: 'my-charts',
    template:`
    <div>
      
        <div class="container">

         <!-- Page Heading -->
          <div class="row">
              <div class="col-lg-12">
                  <h1 class="page-header2">Epilepsy Diet Tracker
                      <small>-MCT Oil Diet Plan-</small>
                  </h1>
              </div>
          </div>
          <!-- /.row -->
        </div>

        <div class="row mainChart">
          <zingchart *ngFor="let chart of charts" [chart]="chart"></zingchart>
        </div>
<div class="row text-center">
  <form>
    Quantity (between 1 and 5):
    <input type="number" name="quantity" min="1" max="5">
  </form>
</div>
        <div class="push"></div>
        <hr>

        <hr>
        
          <!-- Footer -->
        <footer>
          <div class="row">
              <div class="col-lg-12">
                  <p>Copyright &copy; Brian C. Burnside</p>
              </div>
          </div>
          <!-- /.row -->
        </footer>
      
    </div>
    `
})
export class ChartsComponent {
    charts: Chart[];

    constructor () {
      let yo = 25;
        this.charts = [
            {
                id: 'chart-1',
                data: {
                    "type":"pie3d",  // chart type
                    "title":{
                      "text":"Macros",
                      "font-family":"Georgia",
                      "font-size": 22,
                      "font-color": "#1a1a1a"
                      },
                      "subtitle":{
                        "text":"Enter Your Daily Amounts",
                        "font-weight":"normal",
                        "font-family":"sans-serif",
                        "font-size": 18,
                        "font-color": "#1a1a1a"
                      },
                    "gui": {
                      "watermark": {
                        "position": "tl" //br (default), bl, tr, tl
                      }
                    }, 
                    "scale":{
                        "size-factor": 0.5 // not sure the diff. between size-factor and setting w/h
                      },
                    "height": "100%",
                    "width": "100%",
                    "background-color": "transparent",
                    "plot":{
                      "border-width":1,
                      "border-color":"#262626",
                      "value-box":{
                        "text":"%t\n%node-percent-value% / %node-valueg",
                        "font-color": "#1a1a1a",
                        "font-size": 14,
                        "font-family":"Georgia",
                        "rules":[
                          {
                            "rules": "10 === 10",
                            "text": "",
                          }
                        ]
                      }, // end of "value-box" 
                      "tooltip": {
                        "text": "%t",
                        "visible":true
                      }
                    }, // end of "plot"
                    "series":[
                      {
                        "values":[yo],
                        "background-color":"#488003", // green
                        "text":"Fat"
                      },
                      {
                        "values":[20],
                        "background-color":"#ecec13", // yellow
                        "text":"Protein"
                      },
                      {
                        "values":[50],
                        "background-color":"#a3001b", // red
                        "text":"MCT Oil"
                      },
                      {
                        "values":[28],
                        "background-color":"#ecec13", // yellow
                        "text":"Carbs"
                      }
                    ]
                } // end of data div
            }, // end of chart

        ] // end of charts array
    }
}