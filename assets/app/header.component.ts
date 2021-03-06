import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="col-md-12">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['']">Home</a></li>
                    <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['chart']">Macros</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['auth']">Authentication</a></li>
                </ul>
            </nav>
        </header>
    `,
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        header {
            margin-bottom: 0px;
            background-color: ;
        }
    
        ul {
          text-align: center;  
        }
        
        li {
            float: none;
            display: inline-block;
            padding-left: 50px;
        }
        
        .router-link-active {
            background-color: #337ab7;
            color: white;
        }
    `]
})
export class HeaderComponent {
    
}