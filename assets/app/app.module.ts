import { NgModule } from "@angular/core"; // NEED
import { BrowserModule } from "@angular/platform-browser"; // NEED

import { AppComponent } from "./app.component"; // NEED
// import { AuthenticationComponent } from "./auth/authentication.component";
// import { LogoutComponent } from "./auth/logout.component";
// import { SignupComponent } from "./auth/signup.component";
// import { SigninComponent } from "./auth/signin.component";
import { HeaderComponent } from "./header.component"; // NEED
import { ROUTING } from "./app.routing"; // NEED
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // NEED
import { ChartsComponent } from "./zing/charts.component";// APP worked without this ?
import { ZingCharts } from "./zing/zingcharts.component";
import { HomeComponent } from "./home/home.component";
// That thing with the empty service for AUTH....
@NgModule({
    declarations: [
        AppComponent, // NEED
        ChartsComponent, // app worked without this
        ZingCharts,
        HomeComponent,
        // AuthenticationComponent,
        // LogoutComponent,
        // SignupComponent,
        // SigninComponent,
        HeaderComponent // NEED
    ],
    imports: [BrowserModule, ROUTING, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
    // providers: [xyzService]
})
export class AppModule {

}