import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <my-nav></my-nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {
    ngOnInit(){

    }
}