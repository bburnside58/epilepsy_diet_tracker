// // bootstrap coming from app.module through app.component, I believe
// // import { bootstrap } from "@angular/platform-browser-dynamic";
// import { Component } from "@angular/core";

// @Component({
//     selector: 'my-messages',
//     template: `
//         <div class="row spacing">
//             <my-message-input></my-message-input>
//         </div>
//         <div class="row spacing">
//             <my-message-list></my-message-list>
//         </div>
//         <div>
//         	{{ chartData }}
//         </div> 
//     `
// })
// export class ZingchartsComponent {
// 	chartData = {
//     "type":"pie3d",  // chart type
//     "title":{
//       "text":"Macros",
//       "font-family":"Georgia",
//       "font-size": 22,
//       "font-color": "#1a1a1a"
//       },
//       "subtitle":{
//         "text":"Enter Your Daily Amounts",
//         "font-weight":"normal",
//         "font-family":"serif",
//         "font-size": 18,
//         "font-color": "#1a1a1a"
//       },
//     "gui": {
//       "watermark": {
//         "position": "tl" //br (default), bl, tr, tl
//       }
//     }, 
//     "scale":{
//         "size-factor": 0.6 // not sure the diff. between size-factor and setting w/h
//       },
//     "height": "100%",
//     "width": "50%",
//     "background-color": "transparent",
//     "plot":{
//       "border-width":1,
//       "border-color":"#262626",
//       "value-box":{
//         "text":"%t\n%node-percent-value% / %node-valueg",
//         "font-color": "#1a1a1a",
//         "font-size": 14,
//         "font-family":"Georgia",
//         "rules":[
//           {
//             "rules": "10 === 10",
//             "text": "",
//           }
//         ]
//       }, // end of "value-box" 
//       "tooltip": {
//         // "text": "%t",
//         "visible":false
//       }
//     }, // end of "plot"
//     "series":[
//       {
//         "values":[test],
//         "background-color":"#488003", // green
//         "text":"Fat"
//       },
//       {
//         "values":[20],
//         "background-color":"#ecec13", // yellow
//         "text":"Protein"
//       },
//       {
//         "values":[50],
//         "background-color":"#a3001b", // red
//         "text":"MCT Oil"
//       },
//       {
//         "values":[28],
//         "background-color":"#ecec13", // yellow
//         "text":"Carbs"
//       }
//     ]
//   };

    
// }