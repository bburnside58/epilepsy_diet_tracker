
import { Component, NgZone, AfterViewInit, OnDestroy, ViewChild } from "@angular/core";
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


	update() {
    this.zone.runOutsideAngular(() => {
    	
      zingchart.exec(this.chart['id'], 'setdata', {
        data: this.chart['data']
      });

    });

  }
}
