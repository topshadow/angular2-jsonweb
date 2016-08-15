import {Component, OnInit, OnDestroy} from '@angular/core';
import {Base} from '../../../base';
@Component({
    selector: 'sign-in',
    templateUrl: 'app/parts/sign/sign-in/sign-in.html',
    styleUrls: ['app/parts/sign/sign-in/sign-in.css']
})
export class SignInComponent extends Base implements OnInit, OnDestroy {
    constructor() {
        super();
    }
    ngOnInit(){
        this.isShowNav=true;
    }

    ngOnDestroy(){
        this.isShowNav=true;
    }


}