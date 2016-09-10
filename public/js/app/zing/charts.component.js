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
                            "values": [0],
                            "background-color": "#488003",
                            "text": "Fat \n Goal: 10%"
                        },
                        {
                            "values": [0],
                            "background-color": "#ecec13",
                            "text": "Protein Goal: 10%"
                        },
                        {
                            "values": [0],
                            "background-color": "#a3001b",
                            "text": "MCT Oil Goal: 60%"
                        },
                        {
                            "values": [0],
                            "background-color": "orange",
                            "text": "Carbs Goal: 20%"
                        }
                    ]
                } // end of data div
            },
        ]; // end of charts array
    } // constructor
    // MACRO METHODS ============================================
    ChartsComponent.prototype.updateCarbs = function (event) {
        //event: any
        if (event.target.value > 0) {
            //let dude = event.target.value;
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
            template: "\n    <div>\n      \n        <div class=\"container\">\n\n         <!-- Page Heading -->\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <h1 class=\"page-header2\">Epilepsy Diet Tracker\n                      <small>-MCT Oil Diet Plan-</small>\n                  </h1>\n              </div>\n          </div>\n          <!-- /.row -->\n        </div>\n\n        <div class=\"row mainChart\">\n          <zingchart *ngFor=\"let chart of charts\" [chart]=\"chart\"></zingchart>\n        </div>\n<div class=\"row text-center\">\n\n<form>\n    Carbs:\n<button type=\"button\" class=\"btn btn-default\" (click)=\"updateCarbs($event)\">Add Meal</button>\n      <input class=\"macrosText\" type=\"text\" (keyup)=\"updateCarbs($event)\">\n    Protein:\n      <input class=\"macrosText\" type=\"text\" (keyup)=\"updateProtein($event)\">\n    Fat:\n      <input class=\"macrosText\" type=\"text\" (keyup)=\"updateFat($event)\">\n    MCT Oil:\n      <input class=\"macrosText\" type=\"text\" (keyup)=\"updateMCT($event)\">\n\n</form>\n\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"update()\">Add Meal</button>\n\n\n\n</div>\n\n<macrosForm></macrosForm>\n\n\n        <div class=\"push\"></div>\n        <hr>\n\n        <hr>\n        \n          <!-- Footer -->\n        <footer>\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <p>Copyright &copy; Brian C. Burnside</p>\n              </div>\n          </div>\n          <!-- /.row -->\n        </footer>\n      \n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;

//# sourceMappingURL=data:application/json;base64,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LGdCQUFTLENBQUMsaUNBQVUsQ0FBQzs7a0RBQUE7SUFuRXRCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBQyx1aURBMkRSO1NBQ0osQ0FBQzs7dUJBQUE7SUEwSkYsc0JBQUM7QUFBRCxDQXpKQSxBQXlKQyxJQUFBO0FBekpZLHVCQUFlLGtCQXlKM0IsQ0FBQSIsImZpbGUiOiJ6aW5nL2NoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCIuL2NoYXJ0Lm1vZGVsXCI7XG5pbXBvcnQgeyBaaW5nQ2hhcnRzIH0gZnJvbSBcIi4vemluZ2NoYXJ0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gXCIuL2NoYXJ0Zm9ybS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1jaGFydHMnLFxuICAgIHRlbXBsYXRlOmBcbiAgICA8ZGl2PlxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgPCEtLSBQYWdlIEhlYWRpbmcgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJwYWdlLWhlYWRlcjJcIj5FcGlsZXBzeSBEaWV0IFRyYWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+LU1DVCBPaWwgRGlldCBQbGFuLTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tIC8ucm93IC0tPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1haW5DaGFydFwiPlxuICAgICAgICAgIDx6aW5nY2hhcnQgKm5nRm9yPVwibGV0IGNoYXJ0IG9mIGNoYXJ0c1wiIFtjaGFydF09XCJjaGFydFwiPjwvemluZ2NoYXJ0PlxuICAgICAgICA8L2Rpdj5cbjxkaXYgY2xhc3M9XCJyb3cgdGV4dC1jZW50ZXJcIj5cblxuPGZvcm0+XG4gICAgQ2FyYnM6XG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJ1cGRhdGVDYXJicygkZXZlbnQpXCI+QWRkIE1lYWw8L2J1dHRvbj5cbiAgICAgIDxpbnB1dCBjbGFzcz1cIm1hY3Jvc1RleHRcIiB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCJ1cGRhdGVDYXJicygkZXZlbnQpXCI+XG4gICAgUHJvdGVpbjpcbiAgICAgIDxpbnB1dCBjbGFzcz1cIm1hY3Jvc1RleHRcIiB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCJ1cGRhdGVQcm90ZWluKCRldmVudClcIj5cbiAgICBGYXQ6XG4gICAgICA8aW5wdXQgY2xhc3M9XCJtYWNyb3NUZXh0XCIgdHlwZT1cInRleHRcIiAoa2V5dXApPVwidXBkYXRlRmF0KCRldmVudClcIj5cbiAgICBNQ1QgT2lsOlxuICAgICAgPGlucHV0IGNsYXNzPVwibWFjcm9zVGV4dFwiIHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cInVwZGF0ZU1DVCgkZXZlbnQpXCI+XG5cbjwvZm9ybT5cblxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cInVwZGF0ZSgpXCI+QWRkIE1lYWw8L2J1dHRvbj5cblxuXG5cbjwvZGl2PlxuXG48bWFjcm9zRm9ybT48L21hY3Jvc0Zvcm0+XG5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicHVzaFwiPjwvZGl2PlxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPGhyPlxuICAgICAgICBcbiAgICAgICAgICA8IS0tIEZvb3RlciAtLT5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxwPkNvcHlyaWdodCAmY29weTsgQnJpYW4gQy4gQnVybnNpZGU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gLy5yb3cgLS0+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydHNDb21wb25lbnQge1xuICAgIFxuICAgIGNoYXJ0czogQ2hhcnRbXTtcblxuQFZpZXdDaGlsZChaaW5nQ2hhcnRzKVxuICBjaGFydDogWmluZ0NoYXJ0cztcblxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgXG4gICAgICAgIHRoaXMuY2hhcnRzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnY2hhcnQtMScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjpcInBpZTNkXCIsICAvLyBjaGFydCB0eXBlXG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJNYWNyb3NcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtZmFtaWx5XCI6XCJHZW9yZ2lhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogMjIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LWNvbG9yXCI6IFwiIzFhMWExYVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcInN1YnRpdGxlXCI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJFbnRlciBZb3VyIERhaWx5IEFtb3VudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjpcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOlwic2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogMTgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtY29sb3JcIjogXCIjMWExYTFhXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImd1aVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ3YXRlcm1hcmtcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcInRsXCIgLy9iciAoZGVmYXVsdCksIGJsLCB0ciwgdGxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgICAgICBcInNjYWxlXCI6e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaXplLWZhY3RvclwiOiAwLjUgLy8gbm90IHN1cmUgdGhlIGRpZmYuIGJldHdlZW4gc2l6ZS1mYWN0b3IgYW5kIHNldHRpbmcgdy9oXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGxvdFwiOntcbiAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci13aWR0aFwiOjEsXG4gICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjpcIiMyNjI2MjZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlLWJveFwiOntcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiJXRcXG4lbm9kZS1wZXJjZW50LXZhbHVlJSBcXG4gJW5vZGUtdmFsdWVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtY29sb3JcIjogXCIjMWExYTFhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiAxNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjpcIkx1Y2lkYSBHcmFuZGUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZXNcIjpbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVzXCI6IFwiMTAgPT09IDEwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LCAvLyBlbmQgb2YgXCJ2YWx1ZS1ib3hcIiBcbiAgICAgICAgICAgICAgICAgICAgICBcInRvb2x0aXBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiJXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOnRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIC8vIGVuZCBvZiBcInBsb3RcIlxuICAgICAgICAgICAgICAgICAgICBcInNlcmllc1wiOltcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOlswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiIzQ4ODAwM1wiLCAvLyBncmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJGYXQgXFxuIEdvYWw6IDEwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOlswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiI2VjZWMxM1wiLCAvLyB5ZWxsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiUHJvdGVpbiBHb2FsOiAxMCVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjpbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIiNhMzAwMWJcIiwgLy8gcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIk1DVCBPaWwgR29hbDogNjAlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6WzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCJvcmFuZ2VcIiwgLy8gXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIkNhcmJzIEdvYWw6IDIwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSAvLyBlbmQgb2YgZGF0YSBkaXZcbiAgICAgICAgICAgIH0sIC8vIGVuZCBvZiBjaGFydFxuXG4gICAgICAgIF0gLy8gZW5kIG9mIGNoYXJ0cyBhcnJheVxuICAgIH0gLy8gY29uc3RydWN0b3JcblxuLy8gTUFDUk8gTUVUSE9EUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgXG51cGRhdGVDYXJicyhldmVudDogYW55KXtcbiAgICAgIC8vZXZlbnQ6IGFueVxuICAgICAgXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID4gMCkge1xuICAgICAgICAvL2xldCBkdWRlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgY2FyYk51bSA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAvL2xldCBkdWRlID0gMTE7XG4gICAgICAgIHRoaXMuY2hhcnRzWzBdLmRhdGEuc2VyaWVzWzNdLnZhbHVlcyA9IFtjYXJiTnVtXTtcbiAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0gXG4gICB9XG5cbiAgIHVwZGF0ZVByb3RlaW4oZXZlbnQ6IGFueSl7XG4gICAgICAvL2V2ZW50OiBhbnlcbiAgICAgIFxuICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA+IDApIHtcbiAgICAgICAgLy9sZXQgZHVkZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IHByb051bSA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAvL2xldCBkdWRlID0gMTE7XG4gICAgICAgIHRoaXMuY2hhcnRzWzBdLmRhdGEuc2VyaWVzWzFdLnZhbHVlcyA9IFtwcm9OdW1dO1xuICAgICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO1xuICAgICAgfSBlbHNleyAvLyBsZXQgZHVkZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAvLyAgIGFsZXJ0KHlvKTtcbiAgICBsZXQgcHJvTnVtID0gMDtcbiAgICB0aGlzLmNoYXJ0c1swXS5kYXRhLnNlcmllc1sxXS52YWx1ZXMgPSBbcHJvTnVtXTtcbiAgICB0aGlzLmNoYXJ0LnVwZGF0ZSgpO31cbiAgIH1cblxuICAgdXBkYXRlRmF0KGV2ZW50OiBhbnkpe1xuICAgICAgLy9ldmVudDogYW55XG4gICAgICBcbiAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPiAwKSB7XG4gICAgICAgIC8vbGV0IGR1ZGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIGxldCBmYXROdW0gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgLy9sZXQgZHVkZSA9IDExO1xuICAgICAgICB0aGlzLmNoYXJ0c1swXS5kYXRhLnNlcmllc1swXS52YWx1ZXMgPSBbZmF0TnVtXTtcbiAgICAgICAgdGhpcy5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0gZWxzZXsgLy8gbGV0IGR1ZGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgLy8gICBhbGVydCh5byk7XG4gICAgbGV0IGZhdE51bSA9IDA7XG4gICAgdGhpcy5jaGFydHNbMF0uZGF0YS5zZXJpZXNbMF0udmFsdWVzID0gW2ZhdE51bV07XG4gICAgdGhpcy5jaGFydC51cGRhdGUoKTt9XG4gICB9XG5cbiAgIHVwZGF0ZU1DVChldmVudDogYW55KXtcbiAgICAgIC8vZXZlbnQ6IGFueVxuICAgICAgXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID4gMCkge1xuICAgICAgICAvL2xldCBkdWRlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBsZXQgbWN0TnVtID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIC8vbGV0IGR1ZGUgPSAxMTtcbiAgICAgICAgdGhpcy5jaGFydHNbMF0uZGF0YS5zZXJpZXNbMl0udmFsdWVzID0gW21jdE51bV07XG4gICAgICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7XG4gICAgICB9IGVsc2V7IC8vIGxldCBkdWRlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIC8vICAgYWxlcnQoeW8pO1xuICAgIGxldCBtY3ROdW0gPSAwO1xuICAgIHRoaXMuY2hhcnRzWzBdLmRhdGEuc2VyaWVzWzJdLnZhbHVlcyA9IFttY3ROdW1dO1xuICAgIHRoaXMuY2hhcnQudXBkYXRlKCk7fVxuICAgfVxuICAgIFxuXG4gICAgXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
