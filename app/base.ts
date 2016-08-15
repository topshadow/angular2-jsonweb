export class Base{
    get isEdit(){
        return window['isEdit'];
    }
    
    

    set isShowNav(value:boolean){
        window['isShowNav']=value;
    }

    get isShowNav(){
        return window['isShowNav'];
    }

    set isShowFoot(value:boolean){
         window['isShowFoot']=value;
    }
    get isShowFoot():boolean{
        return window['isShowFoot'];
    }

    
}