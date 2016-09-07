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
var ZingCharts = (function () {
    function ZingCharts(zone) {
        this.zone = zone;
    }
    ZingCharts.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return zingchart.render(_this.chart); });
    };
    ZingCharts.prototype.ngOnDestroy = function () {
        zingchart.exec(this.chart.id, 'destroy');
    };
    ZingCharts = __decorate([
        core_1.Component({
            selector: 'zingchart',
            inputs: ['chart'],
            template: "<div id=\"{{chart.id}}\"></div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], ZingCharts);
    return ZingCharts;
}());
exports.ZingCharts = ZingCharts;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppbmcvemluZ2NoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUE0RCxlQUFlLENBQUMsQ0FBQTtBQVk1RTtJQUdDLG9CQUFxQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFFdEMsb0NBQWUsR0FBZjtRQUFBLGlCQUVDO1FBREEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZ0NBQVcsR0FBWDtRQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWxCRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDakIsUUFBUSxFQUFFLHVDQUVUO1NBQ0QsQ0FBQzs7a0JBQUE7SUFhRixpQkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksa0JBQVUsYUFZdEIsQ0FBQSIsImZpbGUiOiJ6aW5nL3ppbmdjaGFydHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENoYXJ0IH0gZnJvbSBcIi4vY2hhcnQubW9kZWxcIjtcbmltcG9ydCB7IENoYXJ0c0NvbXBvbmVudCB9IGZyb20gXCIuL2NoYXJ0cy5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd6aW5nY2hhcnQnLFxuXHRpbnB1dHM6IFsnY2hhcnQnXSxcblx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwie3tjaGFydC5pZH19XCI+PC9kaXY+XG5cblx0YFxufSlcbmV4cG9ydCBjbGFzcyBaaW5nQ2hhcnRzIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblx0Y2hhcnQ6IENoYXJ0XG5cblx0Y29uc3RydWN0b3IgKHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuXHRuZ0FmdGVyVmlld0luaXQgKCkge1xuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB6aW5nY2hhcnQucmVuZGVyKHRoaXMuY2hhcnQpKTtcblx0fVxuXG5cdG5nT25EZXN0cm95ICgpIHtcblx0XHR6aW5nY2hhcnQuZXhlYyh0aGlzLmNoYXJ0LmlkLCAnZGVzdHJveScpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
