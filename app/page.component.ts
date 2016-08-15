import {Component, OnInit, OnChanges,OnDestroy} from '@angular/core';
import {Base} from './base';
import {Router, ActivatedRoute} from '@angular/router';

interface Part {
    part: string;
}

interface Page {
    path: string;
    parts: Part[]
}

@Component({
    selector: 'page',
    template: `
    <ul>
    <li *ngFor="let part of page.parts">
    <div [ngSwitch]="part.part">
    <banner *ngSwitchCase="'banner'"></banner>
    <showcase *ngSwitchCase="'showcase'"></showcase>
    <dynamic *ngSwitchCase="'dynamic'"></dynamic>
    <image-article *ngSwitchCase="'image-article'"></image-article>
    <location *ngSwitchCase="'location'"></location>
    <product-list *ngSwitchCase="'product-list'"></product-list>
    <list *ngSwitchCase="'list'"></list>
    <two-layout *ngSwitchCase="'two-layout'"></two-layout>
    <custom *ngSwitchCase="'custom'"></custom>
    </div>
    </li>
    </ul>
    `
})
export class PageComponent extends Base implements OnInit, OnChanges,OnDestroy {
    path: string;
    page: Page;
    constructor(private router: Router, private route: ActivatedRoute) {
        super();
    }
    ngOnInit() {
        this.isShowNav = true;
        this.isShowFoot = true;
        this.route.params.subscribe(params => {
        this.path = params['page']; 
        console.log(this.path);
        this.page = window['pages'].find(page => page.path == this.path);
       console.log(this.page);
});
    }
    ngOnChanges() {


    }
    ngOnDestroy(){
        console.log('this page destory');
    }
}