
// import { Component, NgZone, AfterViewInit, OnDestroy } from "@angular/core";
// import { Chart } from "./homeCharts.model";


// @Component({
// 	selector: 'zingchart',
// 	inputs: ['chart'],
// 	template: `<div id="{{chart.id}}"></div>`
// })
// export class ZingCharts implements AfterViewInit, OnDestroy {
// 	chart: Chart

// 	constructor (private zone: NgZone) { }

// 	ngAfterViewInit () {
// 		this.zone.runOutsideAngular(() => zingchart.render(this.chart[1]));
// 	}

// 	ngOnDestroy () {
// 		zingchart.exec(this.chart.id, 'destroy');
// 	}
// }
