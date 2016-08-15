import {Component,OnInit,OnChanges,OnDestroy,Renderer,ElementRef,RenderComponentType,ComponentMetadata} from '@angular/core';
import {Base} from '../../../base';

@Component({
    selector:'custom',
    templateUrl:'app/parts/vip/custom/custom.html',
    styleUrls:['app/parts/vip/custom/custom.css'],
    providers:[],
    viewProviders:[ComponentMetadata]
})
export class CustomComponent extends Base implements OnInit,OnChanges,OnDestroy{

    customHtml:string;
    customCss:string;

    constructor(private render:Renderer,private el:ElementRef,private renderType:RenderComponentType){super();}

    ngOnInit(){

    }

    ngOnChanges(){
        console.log('custom component is changing');
    }

    ngOnDestroy(){}

    submitCss(css:string){
        this.customCss=css;
    console.log(this.renderType.styles);
    }
}