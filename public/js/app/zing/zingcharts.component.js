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
            template: "<div id=\"{{chart.id}}\"></div>"
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], ZingCharts);
    return ZingCharts;
}());
exports.ZingCharts = ZingCharts;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppbmcvemluZ2NoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUE0RCxlQUFlLENBQUMsQ0FBQTtBQVM1RTtJQUdDLG9CQUFxQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFFdEMsb0NBQWUsR0FBZjtRQUFBLGlCQUVDO1FBREEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZ0NBQVcsR0FBWDtRQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWhCRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDakIsUUFBUSxFQUFFLGlDQUErQjtTQUN6QyxDQUFDOztrQkFBQTtJQWFGLGlCQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxrQkFBVSxhQVl0QixDQUFBIiwiZmlsZSI6InppbmcvemluZ2NoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgTmdab25lLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2hhcnQgfSBmcm9tIFwiLi9jaGFydC5tb2RlbFwiO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3ppbmdjaGFydCcsXG5cdGlucHV0czogWydjaGFydCddLFxuXHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJ7e2NoYXJ0LmlkfX1cIj48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFppbmdDaGFydHMgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXHRjaGFydDogQ2hhcnRcblxuXHRjb25zdHJ1Y3RvciAocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHsgfVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCAoKSB7XG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHppbmdjaGFydC5yZW5kZXIodGhpcy5jaGFydCkpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3kgKCkge1xuXHRcdHppbmdjaGFydC5leGVjKHRoaXMuY2hhcnQuaWQsICdkZXN0cm95Jyk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
