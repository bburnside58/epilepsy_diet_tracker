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

//# sourceMappingURL=data:application/json;base64,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bURBQW1EO0FBQ25ELG9DQUFvQztBQUNwQyw4QkFBOEI7QUFDOUIsb0RBQW9EO0FBQ3BELDBDQUEwQztBQUMxQyw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBQzVCLGtEQUFrRDtBQUNsRCxxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDLDBDQUEwQztBQUMxQywwQkFBMEI7QUFDMUIsMENBQTBDO0FBQzFDLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUIseUNBQXlDO0FBQ3pDLGlFQUFpRTtBQUNqRSx1Q0FBdUM7QUFDdkMsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQix5Q0FBeUM7QUFDekMsa0VBQWtFO0FBQ2xFLDJDQUEyQztBQUMzQywyQkFBMkI7QUFDM0IsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywrREFBK0Q7QUFDL0QsMkNBQTJDO0FBQzNDLDJCQUEyQjtBQUMzQiwwQkFBMEI7QUFDMUIseUNBQXlDO0FBQ3pDLGtFQUFrRTtBQUNsRSx5Q0FBeUM7QUFDekMsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4Qix1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBRWpDLG1DQUFtQztBQUNuQyxRQUFRO0FBQ1IsSUFBSSIsImZpbGUiOiJ6aW5nL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8vIGltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4uL2NoYXJ0Lm1vZGVsXCI7XG4vLyAvLyBpbXBvcnQgeyBaaW5nQ2hhcnRzIH0gZnJvbSBcIi4vemluZ2NoYXJ0cy5jb21wb25lbnRcIjtcblxuXG4vLyAvLyBMZXRzIHVzZSBhbiBleHRlcm5hbCBodG1sIGZpbGUgZm9yIHRoaXMgbWUgdGhpbmtzLlxuLy8gQENvbXBvbmVudCh7XG4vLyAgICAgc2VsZWN0b3I6ICdteS1ob21lJyxcbi8vICAgICB0ZW1wbGF0ZTogYFxuICAgIFxuLy8gPGRpdj5cblxuLy8gICAgIDwhLS0gUGFnZSBDb250ZW50IC0tPlxuLy8gICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblxuLy8gICAgICAgICA8IS0tIFBhZ2UgSGVhZGluZyAtLT5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuLy8gICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInBhZ2UtaGVhZGVyMlwiPkRpZXQgVmFyaWFudHNcbi8vICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlNlY29uZGFyeSBUZXh0PC9zbWFsbD5cbi8vICAgICAgICAgICAgICAgICA8L2gxPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8IS0tIC8ucm93IC0tPlxuXG4vLyAgICAgICAgIDwhLS0gUHJvamVjdCBPbmUgLS0+XG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHppbmdjaGFydCAqbmdGb3I9XCJsZXQgY2hhcnQgb2YgY2hhcnRzXCIgW2NoYXJ0XT1cImNoYXJ0XCI+PC96aW5nY2hhcnQ+XG5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01XCI+XG4vLyAgICAgICAgICAgICAgICAgPGgzPlR5cGljYWwgQW1lcmljYW4gRGlldC9TdGFydGluZyBLZXRvPC9oMz5cbi8vICAgICAgICAgICAgICAgICA8aDQ+LU5vIGFmZmVjdHMgb24gc2VpenVyZSBhY3Rpdml0eTwvaDQ+XG4vLyAgICAgICAgICAgICAgICAgPHA+VGhlIGtldG9nZW5pYyBkaWV0IGlzIGNhbGN1bGF0ZWQgYnkgYSBkaWV0aXRpYW4gZm9yIGVhY2ggY2hpbGQuIFxuLy8gICAgICAgICAgICAgICAgIEFnZSwgd2VpZ2h0LCBhY3Rpdml0eSBsZXZlbHMsIGN1bHR1cmUgYW5kIGZvb2QgcHJlZmVyZW5jZXMgYWxsIGFmZmVjdCBcbi8vICAgICAgICAgICAgICAgICB0aGUgbWVhbCBwbGFuLiBGaXJzdCwgdGhlIGVuZXJneSByZXF1aXJlbWVudHMgYXJlIHNldCBhdCA4MOKAkzkwJSBvZiB0aGUgXG4vLyAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWQgZGFpbHkgYW1vdW50cyAoUkRBKSBmb3IgdGhlIGNoaWxkJ3MgYWdlICh0aGUgaGlnaC1mYXQgZGlldCBcbi8vICAgICAgICAgICAgICAgICByZXF1aXJlcyBsZXNzIGVuZXJneSB0byBwcm9jZXNzIHRoYW4gYSB0eXBpY2FsIGhpZ2gtY2FyYm9oeWRyYXRlIGRpZXQpLjwvcD5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPCEtLSAvLnJvdyAtLT5cblxuLy8gICAgICAgICA8aHI+XG5cbi8vICAgICAgICAgPCEtLSBQcm9qZWN0IFR3byAtLT5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4vLyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC83MDB4MzAwXCIgYWx0PVwiXCI+XG4vLyAgICAgICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cbi8vICAgICAgICAgICAgICAgICA8aDM+QWtpbnMgSW5kdWN0aW9uIFBoYXNlPC9oMz5cbi8vICAgICAgICAgICAgICAgICA8aDQ+U3ViaGVhZGluZzwvaDQ+XG4vLyAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFV0LCBvZGl0IHZlbGl0IGN1bXF1ZSB2ZXJvIGRvbG9yZW1xdWUgcmVwZWxsZW5kdXMgZGlzdGluY3RpbyBtYWlvcmVzIHJlbSBleHBlZGl0YSBhIG5hbSB2aXRhZSBtb2RpIHF1aWRlbSBzaW1pbGlxdWUgZHVjaW11cyEgVmVsaXQsIGVzc2UgdG90YW0gdGVtcG9yZS48L3A+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwhLS0gLy5yb3cgLS0+XG5cbi8vICAgICAgICAgPGhyPlxuXG4vLyAgICAgICAgIDwhLS0gUHJvamVjdCBUaHJlZSAtLT5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG4vLyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC83MDB4MzAwXCIgYWx0PVwiXCI+XG4vLyAgICAgICAgICAgICAgICAgPC9hPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cbi8vICAgICAgICAgICAgICAgICA8aDM+Q2xhc3NpYyBLZXRvZ2VuaWM8L2gzPlxuLy8gICAgICAgICAgICAgICAgIDxoND5TdWJoZWFkaW5nPC9oND5cbi8vICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gT21uaXMsIHRlbXBvcmlidXMsIGRvbG9yZXMsIGF0LCBwcmFlc2VudGl1bSB1dCB1bmRlIHJlcHVkaWFuZGFlIHZvbHVwdGF0dW0gc2l0IGFiIGRlYml0aXMgc3VzY2lwaXQgZnVnaWF0IG5hdHVzIHZlbGl0IGV4Y2VwdHVyaSBhbWV0IGNvbW1vZGkgZGVsZW5pdGkgYWxpYXMgcG9zc2ltdXMhPC9wPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8IS0tIC8ucm93IC0tPlxuXG4vLyAgICAgICAgIDxocj5cblxuLy8gICAgICAgICA8IS0tIFByb2plY3QgRm91ciAtLT5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbi8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJodHRwOi8vcGxhY2Vob2xkLml0LzcwMHgzMDBcIiBhbHQ9XCJcIj5cbi8vICAgICAgICAgICAgICAgICA8L2E+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNVwiPlxuLy8gICAgICAgICAgICAgICAgIDxoMz5NQ1QgT2lsIEtldG9nZW5pYzwvaDM+XG4vLyAgICAgICAgICAgICAgICAgPGg0PlN1YmhlYWRpbmc8L2g0PlxuLy8gICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFeHBsaWNhYm8sIHF1aWRlbSwgY29uc2VjdGV0dXIsIG9mZmljaWEgcmVtIG9mZmljaWlzIGlsbHVtIGFsaXF1YW0gcGVyc3BpY2lhdGlzIGFzcGVybmF0dXIgcXVvZCBtb2RpIGhpYyBuZW1vIHF1aSBzb2x1dGEgYXV0IGVpdXMgZnVnaXQgcXVhbSBpbiBzdXNjaXBpdD88L3A+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwhLS0gLy5yb3cgLS0+XG5cbi8vICAgICAgICAgPGhyPlxuXG4vLyAgICAgICAgIDxocj5cblxuLy8gICAgICAgICA8IS0tIEZvb3RlciAtLT5cbi8vICAgICAgICAgPGZvb3Rlcj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbi8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxwPkNvcHlyaWdodCAmY29weTsgQnJpYW4gQy4gQnVybnNpZGU8L3A+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDwhLS0gLy5yb3cgLS0+XG4vLyAgICAgICAgIDwvZm9vdGVyPlxuXG4vLyAgICAgPC9kaXY+XG4vLyAgICAgPCEtLSAvLmNvbnRhaW5lciAtLT5cblxuXG5cbi8vIDwvZGl2PlxuXG4vLyBgXG4vLyB9KVxuLy8gZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuLy8gICAgICAgICBjaGFydHM6IENoYXJ0W107XG4vLyBjb25zdHJ1Y3RvciAoKSB7XG4vLyAgICAgICAgIHRoaXMuY2hhcnRzID0gW1xuLy8gICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgIGlkOiAnY2hhcnQtMScsXG4vLyAgICAgICAgICAgICAgICAgZGF0YToge1xuLy8gICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjpcInBpZTNkXCIsICAvLyBjaGFydCB0eXBlXG4vLyAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjp7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJNYWNyb3NcIixcbi8vICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI6XCJHZW9yZ2lhXCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogMjIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWNvbG9yXCI6IFwiIzFhMWExYVwiXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICAgICAgICBcInN1YnRpdGxlXCI6e1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJFbnRlciBZb3VyIERhaWx5IEFtb3VudHNcIixcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjpcIm5vcm1hbFwiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOlwic2VyaWZcIixcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IDE4LFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWNvbG9yXCI6IFwiIzFhMWExYVwiXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICAgICAgXCJndWlcIjoge1xuLy8gICAgICAgICAgICAgICAgICAgICAgIFwid2F0ZXJtYXJrXCI6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJ0bFwiIC8vYnIgKGRlZmF1bHQpLCBibCwgdHIsIHRsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9LCBcbi8vICAgICAgICAgICAgICAgICAgICAgXCJzY2FsZVwiOntcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZS1mYWN0b3JcIjogMC42IC8vIG5vdCBzdXJlIHRoZSBkaWZmLiBiZXR3ZWVuIHNpemUtZmFjdG9yIGFuZCBzZXR0aW5nIHcvaFxuLy8gICAgICAgICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuLy8gICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiNTAlXCIsXG4vLyAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInRyYW5zcGFyZW50XCIsXG4vLyAgICAgICAgICAgICAgICAgICAgIFwicGxvdFwiOntcbi8vICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci13aWR0aFwiOjEsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjpcIiMyNjI2MjZcIixcbi8vICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLWJveFwiOntcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiJXRcXG4lbm9kZS1wZXJjZW50LXZhbHVlJSAvICVub2RlLXZhbHVlZ1wiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWNvbG9yXCI6IFwiIzFhMWExYVwiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogMTQsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI6XCJHZW9yZ2lhXCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVzXCI6W1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlc1wiOiBcIjEwID09PSAxMFwiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBdXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfSwgLy8gZW5kIG9mIFwidmFsdWUtYm94XCIgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgXCJ0b29sdGlwXCI6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIiV0XCIsXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjpmYWxzZVxuLy8gICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfSwgLy8gZW5kIG9mIFwicGxvdFwiXG4vLyAgICAgICAgICAgICAgICAgICAgIFwic2VyaWVzXCI6W1xuLy8gICAgICAgICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6WzI1XSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiIzQ4ODAwM1wiLCAvLyBncmVlblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJGYXRcIlxuLy8gICAgICAgICAgICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjpbMjBdLFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjZWNlYzEzXCIsIC8vIHllbGxvd1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJQcm90ZWluXCJcbi8vICAgICAgICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6WzUwXSxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiI2EzMDAxYlwiLCAvLyByZWRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiTUNUIE9pbFwiXG4vLyAgICAgICAgICAgICAgICAgICAgICAgfSxcbi8vICAgICAgICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOlsyOF0sXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIiNlY2VjMTNcIiwgLy8geWVsbG93XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIkNhcmJzXCJcbi8vICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIF1cbi8vICAgICAgICAgICAgICAgICB9IC8vIGVuZCBvZiBkYXRhIGRpdlxuLy8gICAgICAgICAgICAgfSwgLy8gZW5kIG9mIGNoYXJ0XG5cbi8vICAgICAgICAgXSAvLyBlbmQgb2YgY2hhcnRzIGFycmF5XG4vLyAgICAgfVxuLy8gfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
