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
// import { MessageService } from "./messages/message.service";
// import { MessageComponent } from "./messages/message.component";
// import { MessageListComponent } from "./messages/message-list.component";
// import { MessageInputComponent } from "./messages/message-input.component";
// import { AuthenticationComponent } from "./auth/authentication.component";
// import { LogoutComponent } from "./auth/logout.component";
// import { SignupComponent } from "./auth/signup.component";
// import { SigninComponent } from "./auth/signin.component";
var header_component_1 = require("./header.component"); // NEED
var app_routing_1 = require("./app.routing"); // NEED
var forms_1 = require("@angular/forms"); // NEED
var charts_component_1 = require("./charts/charts.component"); // APP worked with this ?
var zingcharts_component_1 = require("./zingcharts.component");
var home_component_1 = require("./home/home.component");
// That thing with the empty service for AUTH....
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                // MessageComponent,
                // MessageListComponent,
                charts_component_1.ChartsComponent,
                zingcharts_component_1.ZingCharts,
                home_component_1.HomeComponent,
                // MessageInputComponent,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQSxDQUFDLE9BQU87QUFDakQsaUNBQThCLDJCQUEyQixDQUFDLENBQUEsQ0FBQyxPQUFPO0FBRWxFLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBLENBQUMsT0FBTztBQUN2RCwrREFBK0Q7QUFDL0QsbUVBQW1FO0FBQ25FLDRFQUE0RTtBQUM1RSw4RUFBOEU7QUFDOUUsNkVBQTZFO0FBQzdFLDZEQUE2RDtBQUM3RCw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBLENBQUMsT0FBTztBQUM3RCw0QkFBd0IsZUFBZSxDQUFDLENBQUEsQ0FBQyxPQUFPO0FBQ2hELHNCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBLENBQUMsT0FBTztBQUMxRSxpQ0FBZ0MsMkJBQTJCLENBQUMsQ0FBQSxDQUFBLHlCQUF5QjtBQUNyRixxQ0FBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCwrQkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCxpREFBaUQ7QUFvQmpEO0lBQUE7SUFFQSxDQUFDO0lBckJEO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLG9CQUFvQjtnQkFDcEIsd0JBQXdCO2dCQUN4QixrQ0FBZTtnQkFDZixpQ0FBVTtnQkFDViw4QkFBYTtnQkFDYix5QkFBeUI7Z0JBQ3pCLDJCQUEyQjtnQkFDM0IsbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLG1CQUFtQjtnQkFDbkIsa0NBQWUsQ0FBQyxPQUFPO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLENBQUMsZ0NBQWEsRUFBRSxxQkFBTyxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CLENBQUM7WUFDbkUsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUU1QixDQUFDOztpQkFBQTtJQUdGLGdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxpQkFBUyxZQUVyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7IC8vIE5FRURcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiOyAvLyBORUVEXG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjsgLy8gTkVFRFxuLy8gaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLnNlcnZpY2VcIjtcbi8vIGltcG9ydCB7IE1lc3NhZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgTWVzc2FnZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBNZXNzYWdlSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xuLy8gaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9sb2dvdXQuY29tcG9uZW50XCI7XG4vLyBpbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL3NpZ251cC5jb21wb25lbnRcIjtcbi8vIGltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiOyAvLyBORUVEXG5pbXBvcnQgeyBST1VUSU5HIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjsgLy8gTkVFRFxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjsgLy8gTkVFRFxuaW1wb3J0IHsgQ2hhcnRzQ29tcG9uZW50IH0gZnJvbSBcIi4vY2hhcnRzL2NoYXJ0cy5jb21wb25lbnRcIjsvLyBBUFAgd29ya2VkIHdpdGggdGhpcyA/XG5pbXBvcnQgeyBaaW5nQ2hhcnRzIH0gZnJvbSBcIi4vemluZ2NoYXJ0cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG4vLyBUaGF0IHRoaW5nIHdpdGggdGhlIGVtcHR5IHNlcnZpY2UgZm9yIEFVVEguLi4uXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsIC8vIE5FRURcbiAgICAgICAgLy8gTWVzc2FnZUNvbXBvbmVudCxcbiAgICAgICAgLy8gTWVzc2FnZUxpc3RDb21wb25lbnQsXG4gICAgICAgIENoYXJ0c0NvbXBvbmVudCwgLy8gYXBwIHdvcmtlZCB3aXRob3V0IHRoaXNcbiAgICAgICAgWmluZ0NoYXJ0cyxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgLy8gTWVzc2FnZUlucHV0Q29tcG9uZW50LFxuICAgICAgICAvLyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCxcbiAgICAgICAgLy8gTG9nb3V0Q29tcG9uZW50LFxuICAgICAgICAvLyBTaWdudXBDb21wb25lbnQsXG4gICAgICAgIC8vIFNpZ25pbkNvbXBvbmVudCxcbiAgICAgICAgSGVhZGVyQ29tcG9uZW50IC8vIE5FRURcbiAgICBdLFxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBST1VUSU5HLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICAvLyBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
