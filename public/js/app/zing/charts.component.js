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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppbmcvY2hhcnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHVEQUF1RDtBQU12RDtJQUdJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWO2dCQUNJLEVBQUUsRUFBRSxTQUFTO2dCQUNiLElBQUksRUFBRTtvQkFDRixNQUFNLEVBQUMsT0FBTztvQkFDZCxPQUFPLEVBQUM7d0JBQ04sTUFBTSxFQUFDLFFBQVE7d0JBQ2YsYUFBYSxFQUFDLFNBQVM7d0JBQ3ZCLFdBQVcsRUFBRSxFQUFFO3dCQUNmLFlBQVksRUFBRSxTQUFTO3FCQUN0QjtvQkFDRCxVQUFVLEVBQUM7d0JBQ1QsTUFBTSxFQUFDLDBCQUEwQjt3QkFDakMsYUFBYSxFQUFDLFFBQVE7d0JBQ3RCLGFBQWEsRUFBQyxPQUFPO3dCQUNyQixXQUFXLEVBQUUsRUFBRTt3QkFDZixZQUFZLEVBQUUsU0FBUztxQkFDeEI7b0JBQ0gsS0FBSyxFQUFFO3dCQUNMLFdBQVcsRUFBRTs0QkFDWCxVQUFVLEVBQUUsSUFBSSxDQUFDLDBCQUEwQjt5QkFDNUM7cUJBQ0Y7b0JBQ0QsT0FBTyxFQUFDO3dCQUNKLGFBQWEsRUFBRSxHQUFHLENBQUMseURBQXlEO3FCQUM3RTtvQkFDSCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsT0FBTyxFQUFFLEtBQUs7b0JBQ2Qsa0JBQWtCLEVBQUUsYUFBYTtvQkFDakMsTUFBTSxFQUFDO3dCQUNMLGNBQWMsRUFBQyxDQUFDO3dCQUNoQixjQUFjLEVBQUMsU0FBUzt3QkFDeEIsV0FBVyxFQUFDOzRCQUNWLE1BQU0sRUFBQyx5Q0FBeUM7NEJBQ2hELFlBQVksRUFBRSxTQUFTOzRCQUN2QixXQUFXLEVBQUUsRUFBRTs0QkFDZixhQUFhLEVBQUMsU0FBUzs0QkFDdkIsT0FBTyxFQUFDO2dDQUNOO29DQUNFLE9BQU8sRUFBRSxXQUFXO29DQUNwQixNQUFNLEVBQUUsRUFBRTtpQ0FDWDs2QkFDRjt5QkFDRjt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QsTUFBTSxFQUFFLElBQUk7NEJBQ1osU0FBUyxFQUFDLEtBQUs7eUJBQ2hCO3FCQUNGO29CQUNELFFBQVEsRUFBQzt3QkFDUDs0QkFDRSxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7NEJBQ2Isa0JBQWtCLEVBQUMsU0FBUzs0QkFDNUIsTUFBTSxFQUFDLEtBQUs7eUJBQ2I7d0JBQ0Q7NEJBQ0UsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDOzRCQUNiLGtCQUFrQixFQUFDLFNBQVM7NEJBQzVCLE1BQU0sRUFBQyxTQUFTO3lCQUNqQjt3QkFDRDs0QkFDRSxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7NEJBQ2Isa0JBQWtCLEVBQUMsU0FBUzs0QkFDNUIsTUFBTSxFQUFDLFNBQVM7eUJBQ2pCO3dCQUNEOzRCQUNFLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDYixrQkFBa0IsRUFBQyxTQUFTOzRCQUM1QixNQUFNLEVBQUMsT0FBTzt5QkFDZjtxQkFDRjtpQkFDSixDQUFDLGtCQUFrQjthQUN2QjtTQUNKLENBQUE7SUFDTCxDQUFDO0lBbEZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBQyxzRUFBc0U7U0FDbEYsQ0FBQzs7dUJBQUE7SUFnRkYsc0JBQUM7QUFBRCxDQS9FQSxBQStFQyxJQUFBO0FBL0VZLHVCQUFlLGtCQStFM0IsQ0FBQSIsImZpbGUiOiJ6aW5nL2NoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi9jaGFydC5tb2RlbFwiO1xuLy8gaW1wb3J0IHsgWmluZ0NoYXJ0cyB9IGZyb20gXCIuL3ppbmdjaGFydHMuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY2hhcnRzJyxcbiAgICB0ZW1wbGF0ZTonPHppbmdjaGFydCAqbmdGb3I9XCJsZXQgY2hhcnQgb2YgY2hhcnRzXCIgW2NoYXJ0XT1cImNoYXJ0XCI+PC96aW5nY2hhcnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydHNDb21wb25lbnQge1xuICAgIGNoYXJ0czogQ2hhcnRbXTtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jaGFydHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdjaGFydC0xJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOlwicGllM2RcIiwgIC8vIGNoYXJ0IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOntcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIk1hY3Jvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjpcIkdlb3JnaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAyMixcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtY29sb3JcIjogXCIjMWExYTFhXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIkVudGVyIFlvdXIgRGFpbHkgQW1vdW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOlwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI6XCJzZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtY29sb3JcIjogXCIjMWExYTFhXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImd1aVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ3YXRlcm1hcmtcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcInRsXCIgLy9iciAoZGVmYXVsdCksIGJsLCB0ciwgdGxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgICAgICBcInNjYWxlXCI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplLWZhY3RvclwiOiAwLjYgLy8gbm90IHN1cmUgdGhlIGRpZmYuIGJldHdlZW4gc2l6ZS1mYWN0b3IgYW5kIHNldHRpbmcgdy9oXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbG90XCI6e1xuICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXdpZHRoXCI6MSxcbiAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOlwiIzI2MjYyNlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWUtYm94XCI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCIldFxcbiVub2RlLXBlcmNlbnQtdmFsdWUlIC8gJW5vZGUtdmFsdWVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtY29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjpcIkdlb3JnaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZXNcIjpbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVzXCI6IFwiMTAgPT09IDEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LCAvLyBlbmQgb2YgXCJ2YWx1ZS1ib3hcIiBcbiAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiJXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOmZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAvLyBlbmQgb2YgXCJwbG90XCJcbiAgICAgICAgICAgICAgICAgICAgXCJzZXJpZXNcIjpbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjpbMjVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjNDg4MDAzXCIsIC8vIGdyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIkZhdFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOlsyMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIiNlY2VjMTNcIiwgLy8geWVsbG93XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIlByb3RlaW5cIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjpbNTBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjYTMwMDFiXCIsIC8vIHJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJNQ1QgT2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6WzI4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiI2VjZWMxM1wiLCAvLyB5ZWxsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiQ2FyYnNcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0gLy8gZW5kIG9mIGRhdGEgZGl2XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
