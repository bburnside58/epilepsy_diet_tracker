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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppbmcvemluZ2NoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFO0FBQ3ZFLG9FQUFvRTtBQUNwRSw2Q0FBNkM7QUFFN0MsZUFBZTtBQUNmLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsb0NBQW9DO0FBQ3BDLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFDakIsb0NBQW9DO0FBQ3BDLGtEQUFrRDtBQUNsRCxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLDJCQUEyQjtBQUMzQixrQkFBa0I7QUFDbEIsUUFBUTtBQUNSLEtBQUs7QUFDTCxxQ0FBcUM7QUFDckMsaUJBQWlCO0FBQ2pCLHFDQUFxQztBQUNyQyxnQkFBZ0I7QUFDaEIseUJBQXlCO0FBQ3pCLGlDQUFpQztBQUNqQyx5QkFBeUI7QUFDekIsZ0NBQWdDO0FBQ2hDLFdBQVc7QUFDWCxxQkFBcUI7QUFDckIsNkNBQTZDO0FBQzdDLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakMsMkJBQTJCO0FBQzNCLGtDQUFrQztBQUNsQyxXQUFXO0FBQ1gsZUFBZTtBQUNmLHVCQUF1QjtBQUN2QixzREFBc0Q7QUFDdEQsVUFBVTtBQUNWLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsdUZBQXVGO0FBQ3ZGLFdBQVc7QUFDWCx3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHlDQUF5QztBQUN6QyxlQUFlO0FBQ2YsMEJBQTBCO0FBQzFCLGtDQUFrQztBQUNsQyxzQkFBc0I7QUFDdEIsNERBQTREO0FBQzVELG1DQUFtQztBQUNuQywyQkFBMkI7QUFDM0IsbUNBQW1DO0FBQ25DLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2Qsb0NBQW9DO0FBQ3BDLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsWUFBWTtBQUNaLGtDQUFrQztBQUNsQyxxQkFBcUI7QUFDckIsMkJBQTJCO0FBQzNCLDBCQUEwQjtBQUMxQixVQUFVO0FBQ1YsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQixVQUFVO0FBQ1YsMkJBQTJCO0FBQzNCLGlEQUFpRDtBQUNqRCx1QkFBdUI7QUFDdkIsV0FBVztBQUNYLFVBQVU7QUFDVix5QkFBeUI7QUFDekIsa0RBQWtEO0FBQ2xELDJCQUEyQjtBQUMzQixXQUFXO0FBQ1gsVUFBVTtBQUNWLHlCQUF5QjtBQUN6QiwrQ0FBK0M7QUFDL0MsMkJBQTJCO0FBQzNCLFdBQVc7QUFDWCxVQUFVO0FBQ1YseUJBQXlCO0FBQ3pCLGtEQUFrRDtBQUNsRCx5QkFBeUI7QUFDekIsVUFBVTtBQUNWLFFBQVE7QUFDUixPQUFPO0FBR1AsSUFBSSIsImZpbGUiOiJ6aW5nL3ppbmdjaGFydHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gYm9vdHN0cmFwIGNvbWluZyBmcm9tIGFwcC5tb2R1bGUgdGhyb3VnaCBhcHAuY29tcG9uZW50LCBJIGJlbGlldmVcbi8vIC8vIGltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWNcIjtcbi8vIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8vIEBDb21wb25lbnQoe1xuLy8gICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZXMnLFxuLy8gICAgIHRlbXBsYXRlOiBgXG4vLyAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuLy8gICAgICAgICAgICAgPG15LW1lc3NhZ2UtaW5wdXQ+PC9teS1tZXNzYWdlLWlucHV0PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBzcGFjaW5nXCI+XG4vLyAgICAgICAgICAgICA8bXktbWVzc2FnZS1saXN0PjwvbXktbWVzc2FnZS1saXN0PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgXHR7eyBjaGFydERhdGEgfX1cbi8vICAgICAgICAgPC9kaXY+IFxuLy8gICAgIGBcbi8vIH0pXG4vLyBleHBvcnQgY2xhc3MgWmluZ2NoYXJ0c0NvbXBvbmVudCB7XG4vLyBcdGNoYXJ0RGF0YSA9IHtcbi8vICAgICBcInR5cGVcIjpcInBpZTNkXCIsICAvLyBjaGFydCB0eXBlXG4vLyAgICAgXCJ0aXRsZVwiOntcbi8vICAgICAgIFwidGV4dFwiOlwiTWFjcm9zXCIsXG4vLyAgICAgICBcImZvbnQtZmFtaWx5XCI6XCJHZW9yZ2lhXCIsXG4vLyAgICAgICBcImZvbnQtc2l6ZVwiOiAyMixcbi8vICAgICAgIFwiZm9udC1jb2xvclwiOiBcIiMxYTFhMWFcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIFwic3VidGl0bGVcIjp7XG4vLyAgICAgICAgIFwidGV4dFwiOlwiRW50ZXIgWW91ciBEYWlseSBBbW91bnRzXCIsXG4vLyAgICAgICAgIFwiZm9udC13ZWlnaHRcIjpcIm5vcm1hbFwiLFxuLy8gICAgICAgICBcImZvbnQtZmFtaWx5XCI6XCJzZXJpZlwiLFxuLy8gICAgICAgICBcImZvbnQtc2l6ZVwiOiAxOCxcbi8vICAgICAgICAgXCJmb250LWNvbG9yXCI6IFwiIzFhMWExYVwiXG4vLyAgICAgICB9LFxuLy8gICAgIFwiZ3VpXCI6IHtcbi8vICAgICAgIFwid2F0ZXJtYXJrXCI6IHtcbi8vICAgICAgICAgXCJwb3NpdGlvblwiOiBcInRsXCIgLy9iciAoZGVmYXVsdCksIGJsLCB0ciwgdGxcbi8vICAgICAgIH1cbi8vICAgICB9LCBcbi8vICAgICBcInNjYWxlXCI6e1xuLy8gICAgICAgICBcInNpemUtZmFjdG9yXCI6IDAuNiAvLyBub3Qgc3VyZSB0aGUgZGlmZi4gYmV0d2VlbiBzaXplLWZhY3RvciBhbmQgc2V0dGluZyB3L2hcbi8vICAgICAgIH0sXG4vLyAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4vLyAgICAgXCJ3aWR0aFwiOiBcIjUwJVwiLFxuLy8gICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInRyYW5zcGFyZW50XCIsXG4vLyAgICAgXCJwbG90XCI6e1xuLy8gICAgICAgXCJib3JkZXItd2lkdGhcIjoxLFxuLy8gICAgICAgXCJib3JkZXItY29sb3JcIjpcIiMyNjI2MjZcIixcbi8vICAgICAgIFwidmFsdWUtYm94XCI6e1xuLy8gICAgICAgICBcInRleHRcIjpcIiV0XFxuJW5vZGUtcGVyY2VudC12YWx1ZSUgLyAlbm9kZS12YWx1ZWdcIixcbi8vICAgICAgICAgXCJmb250LWNvbG9yXCI6IFwiIzFhMWExYVwiLFxuLy8gICAgICAgICBcImZvbnQtc2l6ZVwiOiAxNCxcbi8vICAgICAgICAgXCJmb250LWZhbWlseVwiOlwiR2VvcmdpYVwiLFxuLy8gICAgICAgICBcInJ1bGVzXCI6W1xuLy8gICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIFwicnVsZXNcIjogXCIxMCA9PT0gMTBcIixcbi8vICAgICAgICAgICAgIFwidGV4dFwiOiBcIlwiLFxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgXVxuLy8gICAgICAgfSwgLy8gZW5kIG9mIFwidmFsdWUtYm94XCIgXG4vLyAgICAgICBcInRvb2x0aXBcIjoge1xuLy8gICAgICAgICAvLyBcInRleHRcIjogXCIldFwiLFxuLy8gICAgICAgICBcInZpc2libGVcIjpmYWxzZVxuLy8gICAgICAgfVxuLy8gICAgIH0sIC8vIGVuZCBvZiBcInBsb3RcIlxuLy8gICAgIFwic2VyaWVzXCI6W1xuLy8gICAgICAge1xuLy8gICAgICAgICBcInZhbHVlc1wiOlt0ZXN0XSxcbi8vICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjNDg4MDAzXCIsIC8vIGdyZWVuXG4vLyAgICAgICAgIFwidGV4dFwiOlwiRmF0XCJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIFwidmFsdWVzXCI6WzIwXSxcbi8vICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjZWNlYzEzXCIsIC8vIHllbGxvd1xuLy8gICAgICAgICBcInRleHRcIjpcIlByb3RlaW5cIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgXCJ2YWx1ZXNcIjpbNTBdLFxuLy8gICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIiNhMzAwMWJcIiwgLy8gcmVkXG4vLyAgICAgICAgIFwidGV4dFwiOlwiTUNUIE9pbFwiXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBcInZhbHVlc1wiOlsyOF0sXG4vLyAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiI2VjZWMxM1wiLCAvLyB5ZWxsb3dcbi8vICAgICAgICAgXCJ0ZXh0XCI6XCJDYXJic1wiXG4vLyAgICAgICB9XG4vLyAgICAgXVxuLy8gICB9O1xuXG4gICAgXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
