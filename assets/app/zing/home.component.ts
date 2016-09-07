// import { Component } from "@angular/core";
// import { Chart } from "../chart.model";
// // import { ZingCharts } from "./zingcharts.component";


// // Lets use an external html file for this me thinks.
// @Component({
//     selector: 'my-home',
//     template: `
    
// <div>

//     <!-- Page Content -->
//     <div class="container">

//         <!-- Page Heading -->
//         <div class="row">
//             <div class="col-lg-12">
//                 <h1 class="page-header2">Diet Variants
//                     <small>Secondary Text</small>
//                 </h1>
//             </div>
//         </div>
//         <!-- /.row -->

//         <!-- Project One -->
//         <div class="row">
//             <div class="col-md-7">
//                         <zingchart *ngFor="let chart of charts" [chart]="chart"></zingchart>

//             </div>
//             <div class="col-md-5">
//                 <h3>Typical American Diet/Starting Keto</h3>
//                 <h4>-No affects on seizure activity</h4>
//                 <p>The ketogenic diet is calculated by a dietitian for each child. 
//                 Age, weight, activity levels, culture and food preferences all affect 
//                 the meal plan. First, the energy requirements are set at 80–90% of the 
//                 recommended daily amounts (RDA) for the child's age (the high-fat diet 
//                 requires less energy to process than a typical high-carbohydrate diet).</p>
//             </div>
//         </div>
//         <!-- /.row -->

//         <hr>

//         <!-- Project Two -->
//         <div class="row">
//             <div class="col-md-7">
//                 <a href="#">
//                     <img class="img-responsive" src="http://placehold.it/700x300" alt="">
//                 </a>
//             </div>
//             <div class="col-md-5">
//                 <h3>Akins Induction Phase</h3>
//                 <h4>Subheading</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
//             </div>
//         </div>
//         <!-- /.row -->

//         <hr>

//         <!-- Project Three -->
//         <div class="row">
//             <div class="col-md-7">
//                 <a href="#">
//                     <img class="img-responsive" src="http://placehold.it/700x300" alt="">
//                 </a>
//             </div>
//             <div class="col-md-5">
//                 <h3>Classic Ketogenic</h3>
//                 <h4>Subheading</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!</p>
//             </div>
//         </div>
//         <!-- /.row -->

//         <hr>

//         <!-- Project Four -->
//         <div class="row">

//             <div class="col-md-7">
//                 <a href="#">
//                     <img class="img-responsive" src="http://placehold.it/700x300" alt="">
//                 </a>
//             </div>
//             <div class="col-md-5">
//                 <h3>MCT Oil Ketogenic</h3>
//                 <h4>Subheading</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quidem, consectetur, officia rem officiis illum aliquam perspiciatis aspernatur quod modi hic nemo qui soluta aut eius fugit quam in suscipit?</p>
//             </div>
//         </div>
//         <!-- /.row -->

//         <hr>

//         <hr>

//         <!-- Footer -->
//         <footer>
//             <div class="row">
//                 <div class="col-lg-12">
//                     <p>Copyright &copy; Brian C. Burnside</p>
//                 </div>
//             </div>
//             <!-- /.row -->
//         </footer>

//     </div>
//     <!-- /.container -->



// </div>

// `
// })
// export class HomeComponent {
//         charts: Chart[];
// constructor () {
//         this.charts = [
//             {
//                 id: 'chart-1',
//                 data: {
//                     "type":"pie3d",  // chart type
//                     "title":{
//                       "text":"Macros",
//                       "font-family":"Georgia",
//                       "font-size": 22,
//                       "font-color": "#1a1a1a"
//                       },
//                       "subtitle":{
//                         "text":"Enter Your Daily Amounts",
//                         "font-weight":"normal",
//                         "font-family":"serif",
//                         "font-size": 18,
//                         "font-color": "#1a1a1a"
//                       },
//                     "gui": {
//                       "watermark": {
//                         "position": "tl" //br (default), bl, tr, tl
//                       }
//                     }, 
//                     "scale":{
//                         "size-factor": 0.6 // not sure the diff. between size-factor and setting w/h
//                       },
//                     "height": "100%",
//                     "width": "50%",
//                     "background-color": "transparent",
//                     "plot":{
//                       "border-width":1,
//                       "border-color":"#262626",
//                       "value-box":{
//                         "text":"%t\n%node-percent-value% / %node-valueg",
//                         "font-color": "#1a1a1a",
//                         "font-size": 14,
//                         "font-family":"Georgia",
//                         "rules":[
//                           {
//                             "rules": "10 === 10",
//                             "text": "",
//                           }
//                         ]
//                       }, // end of "value-box" 
//                       "tooltip": {
//                         "text": "%t",
//                         "visible":false
//                       }
//                     }, // end of "plot"
//                     "series":[
//                       {
//                         "values":[25],
//                         "background-color":"#488003", // green
//                         "text":"Fat"
//                       },
//                       {
//                         "values":[20],
//                         "background-color":"#ecec13", // yellow
//                         "text":"Protein"
//                       },
//                       {
//                         "values":[50],
//                         "background-color":"#a3001b", // red
//                         "text":"MCT Oil"
//                       },
//                       {
//                         "values":[28],
//                         "background-color":"#ecec13", // yellow
//                         "text":"Carbs"
//                       }
//                     ]
//                 } // end of data div
//             }, // end of chart

//         ] // end of charts array
//     }
// }