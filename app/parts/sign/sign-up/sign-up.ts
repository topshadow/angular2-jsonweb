import {Component,OnInit,OnDestroy} from '@angular/core';
import {Base} from  '../../../base';

@Component({
    selector:'sign-up',
    templateUrl:'app/parts/sign/sign-up/sign-up.html'
})
export class SignUpComponent extends Base implements OnInit,OnDestroy{
    
    constructor(){
        super();
    }
    
    ngOnInit(){
        this.isShowNav=false;
    }

    ngOnDestroy(){
        this.isShowNav=true;
    }
}