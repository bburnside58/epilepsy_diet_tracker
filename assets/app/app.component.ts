import { Component } from "@angular/core"; // NEED
import { Routes, ROUTER_DIRECTIVES } from "@angular/router"; // NEED

// import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component"; // NEED
// import { ChartsComponent } from "./charts/charts.component";
// import { ZingCharts } from "./charts/zingcharts.component";
import { Chart } from "./zing/chart.model";
import { HomeComponent } from "./home/home.component";



// may need to import each component here for the ZINGCHART !!


@Component({
    selector: 'my-app',
    template: ` 
    	
        <div class="">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
        
    `
})
export class AppComponent {
    
}