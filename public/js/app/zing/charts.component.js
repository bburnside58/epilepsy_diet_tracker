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
var zingcharts_component_1 = require("./zingcharts.component");
var ChartsComponent = (function () {
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
    function ChartsComponent() {
        //let carbNum = 5;
        //let carbNum = this.charts[0].data.series[3].values;
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
                        "font-family": "sans-serif",
                        "font-size": 18,
                        "font-color": "#1a1a1a"
                    },
                    "gui": {
                        "watermark": {
                            "position": "tl" //br (default), bl, tr, tl
                        }
                    },
                    "scale": {
                        "size-factor": 0.5 // not sure the diff. between size-factor and setting w/h
                    },
                    "height": "100%",
                    "width": "100%",
                    "background-color": "transparent",
                    "plot": {
                        "border-width": 1,
                        "border-color": "#262626",
                        "value-box": {
                            "text": "%t\n%node-percent-value% \n %node-valueg",
                            "font-color": "#1a1a1a",
                            "font-size": 14,
                            "font-family": "Lucida Grande, Helvetica, Arial, sans-serif",
                            "rules": [
                                {
                                    "rules": "10 === 10",
                                    "text": "",
                                }
                            ]
                        },
                        "tooltip": {
                            "text": "%t",
                            "visible": true
                        }
                    },
                    "series": [
                        {
                            "values": [null],
                            "background-color": "#488003",
                            "text": "Fat \n Goal: 10%"
                        },
                        {
                            "values": [null],
                            "background-color": "#ecec13",
                            "text": "Protein Goal: 10%"
                        },
                        {
                            "values": [null],
                            "background-color": "#a3001b",
                            "text": "MCT Oil Goal: 60%"
                        },
                        {
                            "values": [null],
                            "background-color": "orange",
                            "text": "Carbs Goal: 20%"
                        }
                    ] // end of series
                } // end of data div
            },
        ]; // end of charts array
    } // constructor
    // MACRO METHODS ============================================
    ChartsComponent.prototype.updateCarbs = function (event) {
        //event: any
        if (event.target.value > 0) {
            //let dude = event.target.value;
            // lets try +=
            var carbNum = Number(event.target.value);
            //let dude = 11;
            this.charts[0].data.series[3].values = [carbNum];
            this.chart.update();
        }
    };
    ChartsComponent.prototype.updateProtein = function (event) {
        //event: any
        if (event.target.value > 0) {
            //let dude = event.target.value;
            var proNum = Number(event.target.value);
            //let dude = 11;
            this.charts[0].data.series[1].values = [proNum];
            this.chart.update();
        }
        else {
            //   alert(yo);
            var proNum = 0;
            this.charts[0].data.series[1].values = [proNum];
            this.chart.update();
        }
    };
    ChartsComponent.prototype.updateFat = function (event) {
        //event: any
        if (event.target.value > 0) {
            //let dude = event.target.value;
            var fatNum = Number(event.target.value);
            //let dude = 11;
            this.charts[0].data.series[0].values = [fatNum];
            this.chart.update();
        }
        else {
            //   alert(yo);
            var fatNum = 0;
            this.charts[0].data.series[0].values = [fatNum];
            this.chart.update();
        }
    };
    ChartsComponent.prototype.updateMCT = function (event) {
        //event: any
        if (event.target.value > 0) {
            //let dude = event.target.value;
            var mctNum = Number(event.target.value);
            //let dude = 11;
            this.charts[0].data.series[2].values = [mctNum];
            this.chart.update();
        }
        else {
            //   alert(yo);
            var mctNum = 0;
            this.charts[0].data.series[2].values = [mctNum];
            this.chart.update();
        }
    };
    __decorate([
        core_1.ViewChild(zingcharts_component_1.ZingCharts), 
        __metadata('design:type', zingcharts_component_1.ZingCharts)
    ], ChartsComponent.prototype, "chart", void 0);
    ChartsComponent = __decorate([
        core_1.Component({
            selector: 'my-charts',
            template: "\n    <div>\n      \n        <div class=\"container\">\n\n         <!-- Page Heading -->\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <h1 class=\"page-header2\">Epilepsy Diet Tracker\n                      <small>-MCT Oil Diet Plan-</small>\n                  </h1>\n              </div>\n          </div>\n          <!-- /.row -->\n        </div>\n\n        <div class=\"row mainChart\">\n          <zingchart *ngFor=\"let chart of charts\" [chart]=\"chart\"></zingchart>\n        </div>\n<div class=\"row text-center\">\n\n<form>\n    Carbs:\n      <input class=\"macrosText\" type=\"text\" (keyup.enter)=\"updateCarbs($event)\">\n    Protein:\n      <input class=\"macrosText\" type=\"text\" (keyup.enter)=\"updateProtein($event)\">\n    Fat:\n      <input class=\"macrosText\" type=\"text\" (keyup.enter)=\"updateFat($event)\">\n    MCT Oil:\n      <input class=\"macrosText\" type=\"text\" (keyup.enter)=\"updateMCT($event)\">\n\n</form>\n\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"update()\">Add Meal</button>\n\n\n\n</div>\n\n\n\n        <div class=\"push\"></div>\n        <hr>\n\n        <hr>\n        \n          <!-- Footer -->\n        <footer>\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <p>Copyright &copy; Brian C. Burnside</p>\n              </div>\n          </div>\n          <!-- /.row -->\n        </footer>\n      \n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;

//# sourceMappingURL=data:application/json;base64,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QUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFBQSxDQUFDO0lBQ3RCLENBQUM7SUE5SkE7UUFBQyxnQkFBUyxDQUFDLGlDQUFVLENBQUM7O2tEQUFBO0lBbkUxQjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUMsKzdDQXlEUjtTQUNKLENBQUM7O3VCQUFBO0lBdUtGLHNCQUFDO0FBQUQsQ0F0S0EsQUFzS0MsSUFBQTtBQXRLWSx1QkFBZSxrQkFzSzNCLENBQUEiLCJmaWxlIjoiemluZy9jaGFydHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi9jaGFydC5tb2RlbFwiO1xuaW1wb3J0IHsgWmluZ0NoYXJ0cyB9IGZyb20gXCIuL3ppbmdjaGFydHMuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY2hhcnRzJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgPGRpdj5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgIDwhLS0gUGFnZSBIZWFkaW5nIC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwicGFnZS1oZWFkZXIyXCI+RXBpbGVwc3kgRGlldCBUcmFja2VyXG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPi1NQ1QgT2lsIERpZXQgUGxhbi08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSAvLnJvdyAtLT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYWluQ2hhcnRcIj5cbiAgICAgICAgICA8emluZ2NoYXJ0ICpuZ0Zvcj1cImxldCBjaGFydCBvZiBjaGFydHNcIiBbY2hhcnRdPVwiY2hhcnRcIj48L3ppbmdjaGFydD5cbiAgICAgICAgPC9kaXY+XG48ZGl2IGNsYXNzPVwicm93IHRleHQtY2VudGVyXCI+XG5cbjxmb3JtPlxuICAgIENhcmJzOlxuICAgICAgPGlucHV0IGNsYXNzPVwibWFjcm9zVGV4dFwiIHR5cGU9XCJ0ZXh0XCIgKGtleXVwLmVudGVyKT1cInVwZGF0ZUNhcmJzKCRldmVudClcIj5cbiAgICBQcm90ZWluOlxuICAgICAgPGlucHV0IGNsYXNzPVwibWFjcm9zVGV4dFwiIHR5cGU9XCJ0ZXh0XCIgKGtleXVwLmVudGVyKT1cInVwZGF0ZVByb3RlaW4oJGV2ZW50KVwiPlxuICAgIEZhdDpcbiAgICAgIDxpbnB1dCBjbGFzcz1cIm1hY3Jvc1RleHRcIiB0eXBlPVwidGV4dFwiIChrZXl1cC5lbnRlcik9XCJ1cGRhdGVGYXQoJGV2ZW50KVwiPlxuICAgIE1DVCBPaWw6XG4gICAgICA8aW5wdXQgY2xhc3M9XCJtYWNyb3NUZXh0XCIgdHlwZT1cInRleHRcIiAoa2V5dXAuZW50ZXIpPVwidXBkYXRlTUNUKCRldmVudClcIj5cblxuPC9mb3JtPlxuXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiAoY2xpY2spPVwidXBkYXRlKClcIj5BZGQgTWVhbDwvYnV0dG9uPlxuXG5cblxuPC9kaXY+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwdXNoXCI+PC9kaXY+XG4gICAgICAgIDxocj5cblxuICAgICAgICA8aHI+XG4gICAgICAgIFxuICAgICAgICAgIDwhLS0gRm9vdGVyIC0tPlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyBCcmlhbiBDLiBCdXJuc2lkZTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLSAvLnJvdyAtLT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0c0NvbXBvbmVudCB7XG5cbiAgICAvL2hhcyBhIGNoYXJ0cyBwcm9wZXJ0eSB0aGF0IHJldHVybnMgYW4gYXJyYXkgb2YgY2hhcnQgdGhhdCBpdCBhY3F1aXJlcyBmcm9tIGEgc2VydmljZSBcbiAgICBjaGFydHM6IENoYXJ0W107XG5cblxuICAgIEBWaWV3Q2hpbGQoWmluZ0NoYXJ0cylcbiAgICAgIGNoYXJ0OiBaaW5nQ2hhcnRzO1xuLy8gICBzb21ldGhpbmcgPSB7XG4vLyAgICAgdmFsdWU6IDAsXG4vLyAgICAgYWRkKGdyYW1zKSB7XG4vLyAgICAgICB0aGlzLnZhbHVlICs9IGdyYW1zO1xuLy8gICAgIH1cbi8vIH07XG4vLyB5b3UgY2FuIGFkZCBtZXRob2RzIGludG8gdGhpcyBjb25zdHJ1Y3Rvci4uLi5taWdodCBiZSBoZWxwZnVsXG4vLyBjYWxsIHRoZSBtZXRob2Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvclxuLy8gbmVlZCB0byBjaGFuZ2UgdGhlIGlucHV0cyBmcm9tIGtleXVwXG4gLy8gY2FyYm9oeWRyYXRlID0gNTtcbiAvLyB0aGlzLmNoYXJ0c1swXS5kYXRhLnNlcmllc1szXS52YWx1ZXMgPSBbY2FyYm9oeWRyYXRlXTtcbi8vY2FyYk51bSA9IDU7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgXG4gICAgICAvL2xldCBjYXJiTnVtID0gNTtcbiAgICAgICAgLy9sZXQgY2FyYk51bSA9IHRoaXMuY2hhcnRzWzBdLmRhdGEuc2VyaWVzWzNdLnZhbHVlcztcbiAgICAgICAgdGhpcy5jaGFydHMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdjaGFydC0xJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOlwicGllM2RcIiwgIC8vIGNoYXJ0IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOntcbiAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIk1hY3Jvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjpcIkdlb3JnaWFcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAyMixcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtY29sb3JcIjogXCIjMWExYTFhXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwic3VidGl0bGVcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIkVudGVyIFlvdXIgRGFpbHkgQW1vdW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOlwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI6XCJzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1jb2xvclwiOiBcIiMxYTFhMWFcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcIndhdGVybWFya1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwidGxcIiAvL2JyIChkZWZhdWx0KSwgYmwsIHRyLCB0bFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAgICAgICAgIFwic2NhbGVcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNpemUtZmFjdG9yXCI6IDAuNSAvLyBub3Qgc3VyZSB0aGUgZGlmZi4gYmV0d2VlbiBzaXplLWZhY3RvciBhbmQgc2V0dGluZyB3L2hcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbG90XCI6e1xuICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXdpZHRoXCI6MSxcbiAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOlwiIzI2MjYyNlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWUtYm94XCI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCIldFxcbiVub2RlLXBlcmNlbnQtdmFsdWUlIFxcbiAlbm9kZS12YWx1ZWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1jb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IDE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOlwiTHVjaWRhIEdyYW5kZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlc1wiOltcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZXNcIjogXCIxMCA9PT0gMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sIC8vIGVuZCBvZiBcInZhbHVlLWJveFwiIFxuICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgLy8gZW5kIG9mIFwicGxvdFwiXG4gICAgICAgICAgICAgICAgICAgIFwic2VyaWVzXCI6W1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6W251bGxdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjNDg4MDAzXCIsIC8vIGdyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIkZhdCBcXG4gR29hbDogMTAlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6W251bGxdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjZWNlYzEzXCIsIC8vIHllbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJQcm90ZWluIEdvYWw6IDEwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOltudWxsXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiI2EzMDAxYlwiLCAvLyByZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiTUNUIE9pbCBHb2FsOiA2MCVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjpbbnVsbF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIm9yYW5nZVwiLCAvLyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiQ2FyYnMgR29hbDogMjAlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0vLyBlbmQgb2Ygc2VyaWVzXG4gICAgICAgICAgICAgICAgfSAvLyBlbmQgb2YgZGF0YSBkaXZcbiAgICAgICAgICAgIH0sIC8vIGVuZCBvZiBjaGFydFxuICAgICAgICBdIC8vIGVuZCBvZiBjaGFydHMgYXJyYXlcbiAgICB9IC8vIGNvbnN0cnVjdG9yXG5cbi8vIE1BQ1JPIE1FVEhPRFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIFxudXBkYXRlQ2FyYnMoZXZlbnQ6IGFueSl7XG4gICAgICAvL2V2ZW50OiBhbnlcbiAgICAgIFxuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA+IDApIHtcbiAgICAgICAgLy9sZXQgZHVkZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgLy8gbGV0cyB0cnkgKz1cbiAgICAgICAgbGV0IGNhcmJOdW0gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgLy9sZXQgZHVkZSA9IDExO1xuICAgICAgICB0aGlzLmNoYXJ0c1swXS5kYXRhLnNlcmllc1szXS52YWx1ZXMgPSBbY2FyYk51bV07XG4gICAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgICB9IFxuICAgfVxuXG4gIHVwZGF0ZVByb3RlaW4oZXZlbnQ6IGFueSl7XG4gICAgLy9ldmVudDogYW55XG4gICAgXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA+IDApIHtcbiAgICAgIC8vbGV0IGR1ZGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBsZXQgcHJvTnVtID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAvL2xldCBkdWRlID0gMTE7XG4gICAgICB0aGlzLmNoYXJ0c1swXS5kYXRhLnNlcmllc1sxXS52YWx1ZXMgPSBbcHJvTnVtXTtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgfSBcbiAgICBlbHNlIHsgLy8gbGV0IGR1ZGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAvLyAgIGFsZXJ0KHlvKTtcbiAgICAgIGxldCBwcm9OdW0gPSAwO1xuICAgICAgdGhpcy5jaGFydHNbMF0uZGF0YS5zZXJpZXNbMV0udmFsdWVzID0gW3Byb051bV07XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gICB1cGRhdGVGYXQoZXZlbnQ6IGFueSl7XG4gICAgICAvL2V2ZW50OiBhbnlcbiAgICAgIFxuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA+IDApIHtcbiAgICAgICAgLy9sZXQgZHVkZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IGZhdE51bSA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAvL2xldCBkdWRlID0gMTE7XG4gICAgICAgIHRoaXMuY2hhcnRzWzBdLmRhdGEuc2VyaWVzWzBdLnZhbHVlcyA9IFtmYXROdW1dO1xuICAgICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgICAgfSBlbHNleyAvLyBsZXQgZHVkZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAvLyAgIGFsZXJ0KHlvKTtcbiAgICBsZXQgZmF0TnVtID0gMDtcbiAgICB0aGlzLmNoYXJ0c1swXS5kYXRhLnNlcmllc1swXS52YWx1ZXMgPSBbZmF0TnVtXTtcbiAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO31cbiAgIH1cblxuICAgdXBkYXRlTUNUKGV2ZW50OiBhbnkpe1xuICAgICAgLy9ldmVudDogYW55XG4gICAgICBcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPiAwKSB7XG4gICAgICAgIC8vbGV0IGR1ZGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBtY3ROdW0gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgLy9sZXQgZHVkZSA9IDExO1xuICAgICAgICB0aGlzLmNoYXJ0c1swXS5kYXRhLnNlcmllc1syXS52YWx1ZXMgPSBbbWN0TnVtXTtcbiAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0gZWxzZXsgLy8gbGV0IGR1ZGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgLy8gICBhbGVydCh5byk7XG4gICAgbGV0IG1jdE51bSA9IDA7XG4gICAgdGhpcy5jaGFydHNbMF0uZGF0YS5zZXJpZXNbMl0udmFsdWVzID0gW21jdE51bV07XG4gICAgdGhpcy5jaGFydC51cGRhdGUoKTt9XG4gICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
