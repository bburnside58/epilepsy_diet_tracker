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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppbmdjaGFydHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBNEQsZUFBZSxDQUFDLENBQUE7QUFTNUU7SUFHQyxvQkFBcUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFBSSxDQUFDO0lBRXRDLG9DQUFlLEdBQWY7UUFBQSxpQkFFQztRQURBLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBTSxPQUFBLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELGdDQUFXLEdBQVg7UUFDQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFoQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFDckIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxpQ0FBK0I7U0FDekMsQ0FBQzs7a0JBQUE7SUFhRixpQkFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksa0JBQVUsYUFZdEIsQ0FBQSIsImZpbGUiOiJ6aW5nY2hhcnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCIuL2NoYXJ0Lm1vZGVsXCI7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnemluZ2NoYXJ0Jyxcblx0aW5wdXRzOiBbJ2NoYXJ0J10sXG5cdHRlbXBsYXRlOiBgPGRpdiBpZD1cInt7Y2hhcnQuaWR9fVwiPjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgWmluZ0NoYXJ0cyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cdGNoYXJ0OiBDaGFydFxuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cblx0bmdBZnRlclZpZXdJbml0ICgpIHtcblx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gemluZ2NoYXJ0LnJlbmRlcih0aGlzLmNoYXJ0KSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSAoKSB7XG5cdFx0emluZ2NoYXJ0LmV4ZWModGhpcy5jaGFydC5pZCwgJ2Rlc3Ryb3knKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
