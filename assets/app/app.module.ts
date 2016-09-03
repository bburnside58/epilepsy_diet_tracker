import { NgModule } from "@angular/core"; // NEED
import { BrowserModule } from "@angular/platform-browser"; // NEED

import { AppComponent } from "./app.component"; // NEED
// import { MessageService } from "./messages/message.service";
// import { MessageComponent } from "./messages/message.component";
// import { MessageListComponent } from "./messages/message-list.component";
// import { MessageInputComponent } from "./messages/message-input.component";
// import { AuthenticationComponent } from "./auth/authentication.component";
// import { LogoutComponent } from "./auth/logout.component";
// import { SignupComponent } from "./auth/signup.component";
// import { SigninComponent } from "./auth/signin.component";
import { HeaderComponent } from "./header.component"; // NEED
import { ROUTING } from "./app.routing"; // NEED
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // NEED
import { ChartsComponent } from "./charts/charts.component";// APP worked with this ?
import { ZingCharts } from "./zingcharts.component";
import { HomeComponent } from "./home/home.component";
// That thing with the empty service for AUTH....
@NgModule({
    declarations: [
        AppComponent, // NEED
        // MessageComponent,
        // MessageListComponent,
        ChartsComponent, // app worked without this
        ZingCharts,
        HomeComponent,
        // MessageInputComponent,
        // AuthenticationComponent,
        // LogoutComponent,
        // SignupComponent,
        // SigninComponent,
        HeaderComponent // NEED
    ],
    imports: [BrowserModule, ROUTING, FormsModule, ReactiveFormsModule],
    bootstrap: [AppComponent],
    // providers: [MessageService]
})
export class AppModule {

}