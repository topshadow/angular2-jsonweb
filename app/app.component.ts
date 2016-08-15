import {Component, OnInit} from '@angular/core';
import {Base} from './base';

@Component({
    selector: 'my-app',
    template: `
    <my-nav *ngIf="isShowNav"></my-nav>
    <router-outlet></router-outlet>
    <my-foot *ngIf="isShowFoot"></my-foot>
    `
})
export class AppComponent extends Base implements OnInit {
    ngOnInit(){
    }
}