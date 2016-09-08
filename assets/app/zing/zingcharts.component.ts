
import { Component, NgZone, AfterViewInit, OnDestroy } from "@angular/core";
import { Chart } from "./chart.model";
import { ChartsComponent } from "./charts.component";


@Component({
	selector: 'zingchart',
	inputs: ['chart'],
	template: `<div id="{{chart.id}}"></div>

	`
})
export class ZingCharts implements AfterViewInit, OnDestroy {
	chart: Chart

	constructor (private zone: NgZone) { }
	
	ngAfterViewInit () {
		this.zone.runOutsideAngular(() => zingchart.render(this.chart));
	}

	ngOnDestroy () {
		zingchart.exec(this.chart.id, 'destroy');
	}
}
