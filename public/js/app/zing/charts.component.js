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
        var yo = 25;
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
                            "visible": true
                        }
                    },
                    "series": [
                        {
                            "values": [yo],
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
            },
        ]; // end of charts array
    }
    ChartsComponent = __decorate([
        core_1.Component({
            selector: 'my-charts',
            template: "\n    <div>\n      \n        <div class=\"container\">\n\n         <!-- Page Heading -->\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <h1 class=\"page-header2\">Epilepsy Diet Tracker\n                      <small>-MCT Oil Diet Plan-</small>\n                  </h1>\n              </div>\n          </div>\n          <!-- /.row -->\n        </div>\n\n        <div class=\"row mainChart\">\n          <zingchart *ngFor=\"let chart of charts\" [chart]=\"chart\"></zingchart>\n        </div>\n<div class=\"row text-center\">\n  <form>\n    Quantity (between 1 and 5):\n    <input type=\"number\" name=\"quantity\" min=\"1\" max=\"5\">\n  </form>\n</div>\n        <div class=\"push\"></div>\n        <hr>\n\n        <hr>\n        \n          <!-- Footer -->\n        <footer>\n          <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <p>Copyright &copy; Brian C. Burnside</p>\n              </div>\n          </div>\n          <!-- /.row -->\n        </footer>\n      \n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsComponent);
    return ChartsComponent;
}());
exports.ChartsComponent = ChartsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppbmcvY2hhcnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHVEQUF1RDtBQStDdkQ7SUFHSTtRQUNFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVjtnQkFDSSxFQUFFLEVBQUUsU0FBUztnQkFDYixJQUFJLEVBQUU7b0JBQ0YsTUFBTSxFQUFDLE9BQU87b0JBQ2QsT0FBTyxFQUFDO3dCQUNOLE1BQU0sRUFBQyxRQUFRO3dCQUNmLGFBQWEsRUFBQyxTQUFTO3dCQUN2QixXQUFXLEVBQUUsRUFBRTt3QkFDZixZQUFZLEVBQUUsU0FBUztxQkFDdEI7b0JBQ0QsVUFBVSxFQUFDO3dCQUNULE1BQU0sRUFBQywwQkFBMEI7d0JBQ2pDLGFBQWEsRUFBQyxRQUFRO3dCQUN0QixhQUFhLEVBQUMsWUFBWTt3QkFDMUIsV0FBVyxFQUFFLEVBQUU7d0JBQ2YsWUFBWSxFQUFFLFNBQVM7cUJBQ3hCO29CQUNILEtBQUssRUFBRTt3QkFDTCxXQUFXLEVBQUU7NEJBQ1gsVUFBVSxFQUFFLElBQUksQ0FBQywwQkFBMEI7eUJBQzVDO3FCQUNGO29CQUNELE9BQU8sRUFBQzt3QkFDSixhQUFhLEVBQUUsR0FBRyxDQUFDLHlEQUF5RDtxQkFDN0U7b0JBQ0gsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLE9BQU8sRUFBRSxNQUFNO29CQUNmLGtCQUFrQixFQUFFLGFBQWE7b0JBQ2pDLE1BQU0sRUFBQzt3QkFDTCxjQUFjLEVBQUMsQ0FBQzt3QkFDaEIsY0FBYyxFQUFDLFNBQVM7d0JBQ3hCLFdBQVcsRUFBQzs0QkFDVixNQUFNLEVBQUMseUNBQXlDOzRCQUNoRCxZQUFZLEVBQUUsU0FBUzs0QkFDdkIsV0FBVyxFQUFFLEVBQUU7NEJBQ2YsYUFBYSxFQUFDLFNBQVM7NEJBQ3ZCLE9BQU8sRUFBQztnQ0FDTjtvQ0FDRSxPQUFPLEVBQUUsV0FBVztvQ0FDcEIsTUFBTSxFQUFFLEVBQUU7aUNBQ1g7NkJBQ0Y7eUJBQ0Y7d0JBQ0QsU0FBUyxFQUFFOzRCQUNULE1BQU0sRUFBRSxJQUFJOzRCQUNaLFNBQVMsRUFBQyxJQUFJO3lCQUNmO3FCQUNGO29CQUNELFFBQVEsRUFBQzt3QkFDUDs0QkFDRSxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7NEJBQ2Isa0JBQWtCLEVBQUMsU0FBUzs0QkFDNUIsTUFBTSxFQUFDLEtBQUs7eUJBQ2I7d0JBQ0Q7NEJBQ0UsUUFBUSxFQUFDLENBQUMsRUFBRSxDQUFDOzRCQUNiLGtCQUFrQixFQUFDLFNBQVM7NEJBQzVCLE1BQU0sRUFBQyxTQUFTO3lCQUNqQjt3QkFDRDs0QkFDRSxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7NEJBQ2Isa0JBQWtCLEVBQUMsU0FBUzs0QkFDNUIsTUFBTSxFQUFDLFNBQVM7eUJBQ2pCO3dCQUNEOzRCQUNFLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDYixrQkFBa0IsRUFBQyxTQUFTOzRCQUM1QixNQUFNLEVBQUMsT0FBTzt5QkFDZjtxQkFDRjtpQkFDSixDQUFDLGtCQUFrQjthQUN2QjtTQUVKLENBQUEsQ0FBQyxzQkFBc0I7SUFDNUIsQ0FBQztJQTdITDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUMsdWlDQXlDUjtTQUNKLENBQUM7O3VCQUFBO0lBa0ZGLHNCQUFDO0FBQUQsQ0FqRkEsQUFpRkMsSUFBQTtBQWpGWSx1QkFBZSxrQkFpRjNCLENBQUEiLCJmaWxlIjoiemluZy9jaGFydHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4vY2hhcnQubW9kZWxcIjtcbi8vIGltcG9ydCB7IFppbmdDaGFydHMgfSBmcm9tIFwiLi96aW5nY2hhcnRzLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWNoYXJ0cycsXG4gICAgdGVtcGxhdGU6YFxuICAgIDxkaXY+XG4gICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgICA8IS0tIFBhZ2UgSGVhZGluZyAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInBhZ2UtaGVhZGVyMlwiPkVwaWxlcHN5IERpZXQgVHJhY2tlclxuICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4tTUNUIE9pbCBEaWV0IFBsYW4tPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gLy5yb3cgLS0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbWFpbkNoYXJ0XCI+XG4gICAgICAgICAgPHppbmdjaGFydCAqbmdGb3I9XCJsZXQgY2hhcnQgb2YgY2hhcnRzXCIgW2NoYXJ0XT1cImNoYXJ0XCI+PC96aW5nY2hhcnQ+XG4gICAgICAgIDwvZGl2PlxuPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxuICA8Zm9ybT5cbiAgICBRdWFudGl0eSAoYmV0d2VlbiAxIGFuZCA1KTpcbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJxdWFudGl0eVwiIG1pbj1cIjFcIiBtYXg9XCI1XCI+XG4gIDwvZm9ybT5cbjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHVzaFwiPjwvZGl2PlxuICAgICAgICA8aHI+XG5cbiAgICAgICAgPGhyPlxuICAgICAgICBcbiAgICAgICAgICA8IS0tIEZvb3RlciAtLT5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxwPkNvcHlyaWdodCAmY29weTsgQnJpYW4gQy4gQnVybnNpZGU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gLy5yb3cgLS0+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydHNDb21wb25lbnQge1xuICAgIGNoYXJ0czogQ2hhcnRbXTtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIGxldCB5byA9IDI1O1xuICAgICAgICB0aGlzLmNoYXJ0cyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2NoYXJ0LTEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6XCJwaWUzZFwiLCAgLy8gY2hhcnQgdHlwZVxuICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6e1xuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiTWFjcm9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOlwiR2VvcmdpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IDIyLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1jb2xvclwiOiBcIiMxYTFhMWFcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJzdWJ0aXRsZVwiOntcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiRW50ZXIgWW91ciBEYWlseSBBbW91bnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6XCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjpcInNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IDE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWNvbG9yXCI6IFwiIzFhMWExYVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJndWlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgIFwid2F0ZXJtYXJrXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJ0bFwiIC8vYnIgKGRlZmF1bHQpLCBibCwgdHIsIHRsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAgICAgXCJzY2FsZVwiOntcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2l6ZS1mYWN0b3JcIjogMC41IC8vIG5vdCBzdXJlIHRoZSBkaWZmLiBiZXR3ZWVuIHNpemUtZmFjdG9yIGFuZCBzZXR0aW5nIHcvaFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsb3RcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItd2lkdGhcIjoxLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6XCIjMjYyNjI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS1ib3hcIjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIiV0XFxuJW5vZGUtcGVyY2VudC12YWx1ZSUgLyAlbm9kZS12YWx1ZWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1jb2xvclwiOiBcIiMxYTFhMWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IDE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOlwiR2VvcmdpYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlc1wiOltcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZXNcIjogXCIxMCA9PT0gMTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sIC8vIGVuZCBvZiBcInZhbHVlLWJveFwiIFxuICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgLy8gZW5kIG9mIFwicGxvdFwiXG4gICAgICAgICAgICAgICAgICAgIFwic2VyaWVzXCI6W1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6W3lvXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiIzQ4ODAwM1wiLCAvLyBncmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJGYXRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjpbMjBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6XCIjZWNlYzEzXCIsIC8vIHllbGxvd1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6XCJQcm90ZWluXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6WzUwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOlwiI2EzMDAxYlwiLCAvLyByZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOlwiTUNUIE9pbFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOlsyOF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjpcIiNlY2VjMTNcIiwgLy8geWVsbG93XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjpcIkNhcmJzXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9IC8vIGVuZCBvZiBkYXRhIGRpdlxuICAgICAgICAgICAgfSwgLy8gZW5kIG9mIGNoYXJ0XG5cbiAgICAgICAgXSAvLyBlbmQgb2YgY2hhcnRzIGFycmF5XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
