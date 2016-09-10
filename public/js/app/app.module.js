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
var core_1 = require("@angular/core"); // NEED
var platform_browser_1 = require("@angular/platform-browser"); // NEED
var app_component_1 = require("./app.component"); // NEED
// import { AuthenticationComponent } from "./auth/authentication.component";
// import { LogoutComponent } from "./auth/logout.component";
// import { SignupComponent } from "./auth/signup.component";
// import { SigninComponent } from "./auth/signin.component";
var header_component_1 = require("./header.component"); // NEED
var app_routing_1 = require("./app.routing"); // NEED
var forms_1 = require("@angular/forms"); // NEED
var charts_component_1 = require("./zing/charts.component"); // APP worked without this ?
var zingcharts_component_1 = require("./zing/zingcharts.component");
var home_component_1 = require("./home/home.component");
var chartform_component_1 = require("./zing/chartform.component");
// That thing with the empty service for AUTH....
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                charts_component_1.ChartsComponent,
                zingcharts_component_1.ZingCharts,
                home_component_1.HomeComponent,
                chartform_component_1.LoginPage,
                // AuthenticationComponent,
                // LogoutComponent,
                // SignupComponent,
                // SigninComponent,
                header_component_1.HeaderComponent // NEED
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_1.ROUTING, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQSxDQUFDLE9BQU87QUFDakQsaUNBQThCLDJCQUEyQixDQUFDLENBQUEsQ0FBQyxPQUFPO0FBSWxFLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBLENBQUMsT0FBTztBQUN2RCw2RUFBNkU7QUFDN0UsNkRBQTZEO0FBQzdELDZEQUE2RDtBQUM3RCw2REFBNkQ7QUFDN0QsaUNBQWdDLG9CQUFvQixDQUFDLENBQUEsQ0FBQyxPQUFPO0FBQzdELDRCQUF3QixlQUFlLENBQUMsQ0FBQSxDQUFDLE9BQU87QUFDaEQsc0JBQWlELGdCQUFnQixDQUFDLENBQUEsQ0FBQyxPQUFPO0FBQzFFLGlDQUFnQyx5QkFBeUIsQ0FBQyxDQUFBLENBQUEsNEJBQTRCO0FBQ3RGLHFDQUEyQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3pELCtCQUE4Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RELG9DQUEwQiw0QkFBNEIsQ0FBQyxDQUFBO0FBQ3ZELGlEQUFpRDtBQWtCakQ7SUFBQTtJQUVBLENBQUM7SUFuQkQ7UUFBQyxlQUFRLENBQUM7WUFDTixZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2YsaUNBQVU7Z0JBQ1YsOEJBQWE7Z0JBQ2IsK0JBQVM7Z0JBQ1QsMkJBQTJCO2dCQUMzQixtQkFBbUI7Z0JBQ25CLG1CQUFtQjtnQkFDbkIsbUJBQW1CO2dCQUNuQixrQ0FBZSxDQUFDLE9BQU87YUFDMUI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLHFCQUFPLEVBQUUsbUJBQVcsRUFBRSwyQkFBbUIsQ0FBQztZQUNuRSxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBRTVCLENBQUM7O2lCQUFBO0lBR0YsZ0JBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGlCQUFTLFlBRXJCLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjsgLy8gTkVFRFxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCI7IC8vIE5FRURcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7IC8vIE5FRURcbi8vIGltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7IExvZ291dENvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvbG9nb3V0LmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9zaWdudXAuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBTaWduaW5Db21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gXCIuL2hlYWRlci5jb21wb25lbnRcIjsgLy8gTkVFRFxuaW1wb3J0IHsgUk9VVElORyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7IC8vIE5FRURcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7IC8vIE5FRURcbmltcG9ydCB7IENoYXJ0c0NvbXBvbmVudCB9IGZyb20gXCIuL3ppbmcvY2hhcnRzLmNvbXBvbmVudFwiOy8vIEFQUCB3b3JrZWQgd2l0aG91dCB0aGlzID9cbmltcG9ydCB7IFppbmdDaGFydHMgfSBmcm9tIFwiLi96aW5nL3ppbmdjaGFydHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9naW5QYWdlIH0gZnJvbSBcIi4vemluZy9jaGFydGZvcm0uY29tcG9uZW50XCI7XG4vLyBUaGF0IHRoaW5nIHdpdGggdGhlIGVtcHR5IHNlcnZpY2UgZm9yIEFVVEguLi4uXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsIC8vIE5FRURcbiAgICAgICAgQ2hhcnRzQ29tcG9uZW50LCAvLyBhcHAgd29ya2VkIHdpdGhvdXQgdGhpc1xuICAgICAgICBaaW5nQ2hhcnRzLFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBMb2dpblBhZ2UsXG4gICAgICAgIC8vIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LFxuICAgICAgICAvLyBMb2dvdXRDb21wb25lbnQsXG4gICAgICAgIC8vIFNpZ251cENvbXBvbmVudCxcbiAgICAgICAgLy8gU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBIZWFkZXJDb21wb25lbnQgLy8gTkVFRFxuICAgIF0sXG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJPVVRJTkcsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICAgIC8vIHByb3ZpZGVyczogW3h5elNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
