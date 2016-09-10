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
            template: "<div id=\"{{chart.id}}\"></div>\n\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], ZingCharts);
    return ZingCharts;
}());
exports.ZingCharts = ZingCharts;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInppbmcvemluZ2NoYXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFCQUF1RSxlQUFlLENBQUMsQ0FBQTtBQVl2RjtJQUdDLG9CQUFxQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtJQUFJLENBQUM7SUFFdEMsb0NBQWUsR0FBZjtRQUFBLGlCQUVDO1FBREEsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZ0NBQVcsR0FBWDtRQUNDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdELDJCQUFNLEdBQU47UUFBQSxpQkFTRTtRQVJDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7WUFFMUIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRTtnQkFDMUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2FBQ3pCLENBQUMsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQTlCSDtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDakIsUUFBUSxFQUFFLHVDQUVUO1NBQ0QsQ0FBQzs7a0JBQUE7SUF5QkYsaUJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLGtCQUFVLGFBd0J0QixDQUFBIiwiZmlsZSI6InppbmcvemluZ2NoYXJ0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgTmdab25lLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCIuL2NoYXJ0Lm1vZGVsXCI7XG5pbXBvcnQgeyBDaGFydHNDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFydHMuY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnemluZ2NoYXJ0Jyxcblx0aW5wdXRzOiBbJ2NoYXJ0J10sXG5cdHRlbXBsYXRlOiBgPGRpdiBpZD1cInt7Y2hhcnQuaWR9fVwiPjwvZGl2PlxuXG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgWmluZ0NoYXJ0cyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cdGNoYXJ0OiBDaGFydFxuXG5cdGNvbnN0cnVjdG9yIChwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cblx0bmdBZnRlclZpZXdJbml0ICgpIHtcblx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gemluZ2NoYXJ0LnJlbmRlcih0aGlzLmNoYXJ0KSk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSAoKSB7XG5cdFx0emluZ2NoYXJ0LmV4ZWModGhpcy5jaGFydC5pZCwgJ2Rlc3Ryb3knKTtcblx0fVxuXG5cblx0dXBkYXRlKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgXHRcbiAgICAgIHppbmdjaGFydC5leGVjKHRoaXMuY2hhcnRbJ2lkJ10sICdzZXRkYXRhJywge1xuICAgICAgICBkYXRhOiB0aGlzLmNoYXJ0WydkYXRhJ11cbiAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
