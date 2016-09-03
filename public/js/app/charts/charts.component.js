"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// import { ZingCharts } from "./zingcharts.component";
var ChartsComponent = (function () {
    function ChartsComponent() {
        this.charts = [
            {
                id: 'chart-1',
                data: {
                    "type": "pie3d",
                    "title": {
                        "text": "Macros",
                        "font-family": "Georgia",
                        "font-size": 22,
                        "font-color": "#1a1a1a"
                    },
                    "subtitle": {
                        "text": "Enter Your Daily Amounts",
                        "font-weight": "normal",
                        "font-family": "serif",
                        "font-size": 18,
                        "font-color": "#1a1a1a"
                    },
                    "gui": {
                        "watermark": {
                            "position": "tl" //br (default), bl, tr, tl
                        }
                    },
                    "scale": {
                        "size-factor": 0.6 // not sure the diff. between size-factor and setting w/h
                    },
                    "height": "100%",
                    "width": "50%",
                    "background-color": "transparent",
                    "plot": {
                        "border-width": 1,
                        "border-color": "#262626",
                        "value-box": {
                            "text": "%t\n%node-percent-value% / %node-valueg",
                            "font-color": "#1a1a1a",
                            "font-size": 14,
                            "font-family": "Georgia",
                            "rules": [
                                {
                                    "rules": "10 === 10",
                                    "text": "",
                                }
                            ]
                        },
                        "tooltip": {
                            "text": "%t",
                            "visible": false
                        }
                    },
                    "series": [
                        {
                            "values": [25],
                            "background-color": "#488003",
                            "text": "Fat"
                        },
                        {
                            "values": [20],
                            "background-color": "#ecec13",
                            "text": "Protein"
                        },
                        {
                            "values": [50],
                            "background-color": "#a3001b",
                            "text": "MCT Oil"
                        },
                        {
                            "values": [28],
                            "background-color": "#ecec13",
                            "text": "Carbs"
                        }
                    ]
                } // end of data div
            }
        ];
    }
    ChartsComponent = __decorate([
        core_1.Component({
            selector: 'my-charts',
            template: '<zingchart *ngFor="let chart of charts" [chart]="chart"></zingchart>'
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy9jaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFFMUMsdURBQXVEO0FBTXZEO0lBR0k7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1Y7Z0JBQ0ksRUFBRSxFQUFFLFNBQVM7Z0JBQ2IsSUFBSSxFQUFFO29CQUNGLE1BQU0sRUFBQyxPQUFPO29CQUNkLE9BQU8sRUFBQzt3QkFDTixNQUFNLEVBQUMsUUFBUTt3QkFDZixhQUFhLEVBQUMsU0FBUzt3QkFDdkIsV0FBVyxFQUFFLEVBQUU7d0JBQ2YsWUFBWSxFQUFFLFNBQVM7cUJBQ3RCO29CQUNELFVBQVUsRUFBQzt3QkFDVCxNQUFNLEVBQUMsMEJBQTBCO3dCQUNqQyxhQUFhLEVBQUMsUUFBUTt3QkFDdEIsYUFBYSxFQUFDLE9BQU87d0JBQ3JCLFdBQVcsRUFBRSxFQUFFO3dCQUNmLFlBQVksRUFBRSxTQUFTO3FCQUN4QjtvQkFDSCxLQUFLLEVBQUU7d0JBQ0wsV0FBVyxFQUFFOzRCQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsMEJBQTBCO3lCQUM1QztxQkFDRjtvQkFDRCxPQUFPLEVBQUM7d0JBQ0osYUFBYSxFQUFFLEdBQUcsQ0FBQyx5REFBeUQ7cUJBQzdFO29CQUNILFFBQVEsRUFBRSxNQUFNO29CQUNoQixPQUFPLEVBQUUsS0FBSztvQkFDZCxrQkFBa0IsRUFBRSxhQUFhO29CQUNqQyxNQUFNLEVBQUM7d0JBQ0wsY0FBYyxFQUFDLENBQUM7d0JBQ2hCLGNBQWMsRUFBQyxTQUFTO3dCQUN4QixXQUFXLEVBQUM7NEJBQ1YsTUFBTSxFQUFDLHlDQUF5Qzs0QkFDaEQsWUFBWSxFQUFFLFNBQVM7NEJBQ3ZCLFdBQVcsRUFBRSxFQUFFOzRCQUNmLGFBQWEsRUFBQyxTQUFTOzRCQUN2QixPQUFPLEVBQUM7Z0NBQ047b0NBQ0UsT0FBTyxFQUFFLFdBQVc7b0NBQ3BCLE1BQU0sRUFBRSxFQUFFO2lDQUNYOzZCQUNGO3lCQUNGO3dCQUNELFNBQVMsRUFBRTs0QkFDVCxNQUFNLEVBQUUsSUFBSTs0QkFDWixTQUFTLEVBQUMsS0FBSzt5QkFDaEI7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFDO3dCQUNQOzRCQUNFLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDYixrQkFBa0IsRUFBQyxTQUFTOzRCQUM1QixNQUFNLEVBQUMsS0FBSzt5QkFDYjt3QkFDRDs0QkFDRSxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7NEJBQ2Isa0JBQWtCLEVBQUMsU0FBUzs0QkFDNUIsTUFBTSxFQUFDLFNBQVM7eUJBQ2pCO3dCQUNEOzRCQUNFLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDYixrQkFBa0IsRUFBQyxTQUFTOzRCQUM1QixNQUFNLEVBQUMsU0FBUzt5QkFDakI7d0JBQ0Q7NEJBQ0UsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDOzRCQUNiLGtCQUFrQixFQUFDLFNBQVM7NEJBQzVCLE1BQU0sRUFBQyxPQUFPO3lCQUNmO3FCQUNGO2lCQUNKLENBQUMsa0JBQWtCO2FBQ3ZCO1NBQ0osQ0FBQTtJQUNMLENBQUM7SUFsRkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFDLHNFQUFzRTtTQUNsRixDQUFDOzt1QkFBQTtJQWdGRixzQkFBQztBQUFELENBL0VBLEFBK0VDLElBQUE7QUEvRVksdUJBQWUsa0JBK0UzQixDQUFBIiwiZmlsZSI6ImNoYXJ0cy9jaGFydHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4uL2NoYXJ0Lm1vZGVsXCI7XG4vLyBpbXBvcnQgeyBaaW5nQ2hhcnRzIH0gZnJvbSBcIi4vemluZ2NoYXJ0cy5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1jaGFydHMnLFxuICAgIHRlbXBsYXRlOic8emluZ2NoYXJ0ICpuZ0Zvcj1cImxldCBjaGFydCBvZiBjaGFydHNcIiBbY2hhcnRdPVwiY2hhcnRcIj48L3ppbmdjaGFydD4nXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0c0NvbXBvbmVudCB7XG4gICAgY2hhcnRzOiBDaGFydFtdO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmNoYXJ0cyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2NoYXJ0LTEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJwaWUzZFwiLCAgLy8gY2hhcnQgdHlwZVxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6e1xuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiTWFjcm9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOlwiR2VvcmdpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IDIyLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1jb2xvclwiOiBcIiMxYTFhMWFcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOntcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiRW50ZXIgWW91ciBEYWlseSBBbW91bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6XCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjpcInNlcmlmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1jb2xvclwiOiBcIiMxYTFhMWFcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcIndhdGVybWFya1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwidGxcIiAvL2JyIChkZWZhdWx0KSwgYmwsIHRyLCB0bFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgIFwic2NhbGVcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemUtZmFjdG9yXCI6IDAuNiAvLyBub3Qgc3VyZSB0aGUgZGlmZi4gYmV0d2VlbiBzaXplLWZhY3RvciBhbmQgc2V0dGluZyB3L2hcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsb3RcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItd2lkdGhcIjoxLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6XCIjMjYyNjI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS1ib3hcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIiV0XFxuJW5vZGUtcGVyY2VudC12YWx1ZSUgLyAlbm9kZS12YWx1ZWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1jb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IDE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOlwiR2VvcmdpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlc1wiOltcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZXNcIjogXCIxMCA9PT0gMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sIC8vIGVuZCBvZiBcInZhbHVlLWJveFwiIFxuICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIC8vIGVuZCBvZiBcInBsb3RcIlxuICAgICAgICAgICAgICAgICAgICBcInNlcmllc1wiOltcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOlsyNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIiM0ODgwMDNcIiwgLy8gZ3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiRmF0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6WzIwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiI2VjZWMxM1wiLCAvLyB5ZWxsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiUHJvdGVpblwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOls1MF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIiNhMzAwMWJcIiwgLy8gcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIk1DVCBPaWxcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjpbMjhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjZWNlYzEzXCIsIC8vIHllbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJDYXJic1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSAvLyBlbmQgb2YgZGF0YSBkaXZcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
