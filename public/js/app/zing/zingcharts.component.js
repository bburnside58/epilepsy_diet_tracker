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
        this.zone.runOutsideAngular(function () { return zingchart.render({
            id: _this.chart['id'],
            data: _this.chart['data']
        }); });
    };
    // lifecycle hook
    ZingCharts.prototype.ngOnDestroy = function () {
        zingchart.exec(this.chart.id, 'destroy');
    };
    ZingCharts.prototype.update = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            zingchart.exec(_this.chart['id'], 'setdata', {
                data: _this.chart['data']
            });
        });
    };
    ZingCharts = __decorate([
        core_1.Component({
            selector: 'zingchart',
            inputs: ['chart'],
            template: "<div id=\"{{chart.id}}\"></div>"
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], ZingCharts);
    return ZingCharts;
}());
exports.ZingCharts = ZingCharts;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppbmcvemluZ2NoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUF1RSxlQUFlLENBQUMsQ0FBQTtBQVd2RjtJQUdDLG9CQUFxQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFFdEMsb0NBQWUsR0FBZjtRQUFBLGlCQUtDO1FBSkEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN2QyxFQUFFLEVBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxFQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzVCLENBQUMsRUFId0IsQ0FHeEIsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELGlCQUFpQjtJQUNqQixnQ0FBVyxHQUFYO1FBQ0MsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBR0QsMkJBQU0sR0FBTjtRQUFBLGlCQVNFO1FBUkMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUUxQixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFO2dCQUMxQyxJQUFJLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7YUFDekIsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBaENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNqQixRQUFRLEVBQUUsaUNBQStCO1NBQ3pDLENBQUM7O2tCQUFBO0lBNkJGLGlCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxrQkFBVSxhQTJCdEIsQ0FBQSIsImZpbGUiOiJ6aW5nL3ppbmdjaGFydHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi9jaGFydC5tb2RlbFwiO1xuaW1wb3J0IHsgQ2hhcnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhcnRzLmNvbXBvbmVudFwiO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3ppbmdjaGFydCcsXG5cdGlucHV0czogWydjaGFydCddLFxuXHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJ7e2NoYXJ0LmlkfX1cIj48L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgWmluZ0NoYXJ0cyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cdGNoYXJ0OiBDaGFydFxuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cblx0bmdBZnRlclZpZXdJbml0ICgpIHtcblx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gemluZ2NoYXJ0LnJlbmRlcih7XG4gICAgICAgICAgICAgIGlkIDogdGhpcy5jaGFydFsnaWQnXSxcbiAgICAgICAgICAgICAgZGF0YSA6IHRoaXMuY2hhcnRbJ2RhdGEnXVxuICAgICAgICAgIH0pKTtcblx0fVxuXHQvLyBsaWZlY3ljbGUgaG9va1xuXHRuZ09uRGVzdHJveSAoKSB7XG5cdFx0emluZ2NoYXJ0LmV4ZWModGhpcy5jaGFydC5pZCwgJ2Rlc3Ryb3knKTtcblx0fVxuXG5cblx0dXBkYXRlKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgXHRcbiAgICAgIHppbmdjaGFydC5leGVjKHRoaXMuY2hhcnRbJ2lkJ10sICdzZXRkYXRhJywge1xuICAgICAgICBkYXRhOiB0aGlzLmNoYXJ0WydkYXRhJ11cbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
