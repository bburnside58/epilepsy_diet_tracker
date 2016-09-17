import { Component, ViewChild, Input } from "@angular/core";
import { FormBuilder, Validators } from '@angular/common';

import { Chart } from "./chart.model";
import { ZingCharts } from "./zingcharts.component";

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
    Carbs:
      <input class="macrosText" type="text" (keyup.enter)="updateCarbs($event)">
    Protein:
      <input class="macrosText" type="text" (keyup.enter)="updateProtein($event)">
    Fat:
      <input class="macrosText" type="text" (keyup.enter)="updateFat($event)">
    MCT Oil:
      <input class="macrosText" type="text" (keyup.enter)="updateMCT($event)">

</form>

    <button type="button" class="btn btn-default" (click)="update()">Add Meal</button>



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

    //has a charts property that returns an array of chart that it acquires from a service 
    charts: Chart[];


    @ViewChild(ZingCharts)
      chart: ZingCharts;
//   something = {
//     value: 0,
//     add(grams) {
//       this.value += grams;
//     }
// };
// you can add methods into this constructor....might be helpful
// call the method within the constructor
// need to change the inputs from keyup
 // carbohydrate = 5;
 // this.charts[0].data.series[3].values = [carbohydrate];
//carbNum = 5;
    constructor () {
      
      //let carbNum = 5;
        //let carbNum = this.charts[0].data.series[3].values;
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
                        "text":"%t\n%node-percent-value% \n %node-valueg",
                        "font-color": "#1a1a1a",
                        "font-size": 14,
                        "font-family":"Lucida Grande, Helvetica, Arial, sans-serif",
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
                        "values":[null],
                        "background-color":"#488003", // green
                        "text":"Fat \n Goal: 10%"
                      },
                      {
                        "values":[null],
                        "background-color":"#ecec13", // yellow
                        "text":"Protein Goal: 10%"
                      },
                      {
                        "values":[null],
                        "background-color":"#a3001b", // red
                        "text":"MCT Oil Goal: 60%"
                      },
                      {
                        "values":[null],
                        "background-color":"orange", // 
                        "text":"Carbs Goal: 20%"
                      }
                    ]// end of series
                } // end of data div
            }, // end of chart
        ] // end of charts array
    } // constructor

// MACRO METHODS ============================================

    
updateCarbs(event: any){
      //event: any
      
      if (event.target.value > 0) {
        //let dude = event.target.value;
        // lets try +=
        let carbNum = Number(event.target.value);
        //let dude = 11;
        this.charts[0].data.series[3].values = [carbNum];
        this.chart.update();
      } 
   }

  updateProtein(event: any){
    //event: any
    
    if (event.target.value > 0) {
      //let dude = event.target.value;
      let proNum = Number(event.target.value);
      //let dude = 11;
      this.charts[0].data.series[1].values = [proNum];
      this.chart.update();
    } 
    else { // let dude = event.target.value;
      //   alert(yo);
      let proNum = 0;
      this.charts[0].data.series[1].values = [proNum];
      this.chart.update();
    }
  }

   updateFat(event: any){
      //event: any
      
      if (event.target.value > 0) {
        //let dude = event.target.value;
        let fatNum = Number(event.target.value);
        //let dude = 11;
        this.charts[0].data.series[0].values = [fatNum];
        this.chart.update();
      } else{ // let dude = event.target.value;
    //   alert(yo);
    let fatNum = 0;
    this.charts[0].data.series[0].values = [fatNum];
    this.chart.update();}
   }

   updateMCT(event: any){
      //event: any
      
      if (event.target.value > 0) {
        //let dude = event.target.value;
        let mctNum = Number(event.target.value);
        //let dude = 11;
        this.charts[0].data.series[2].values = [mctNum];
        this.chart.update();
      } else{ // let dude = event.target.value;
    //   alert(yo);
    let mctNum = 0;
    this.charts[0].data.series[2].values = [mctNum];
    this.chart.update();}
   }

}