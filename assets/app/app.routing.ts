import { Routes, RouterModule } from "@angular/router";

// import { AUTH_ROUTES } from "./auth/auth.routes"; // Will NEED 
import { ChartsComponent } from "./zing/charts.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

// import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
    { path: 'chart', component: ChartsComponent},
    // { path: 'auth', component: AuthenticationComponent, children: [
    //     ...AUTH_ROUTES
    // ] }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);