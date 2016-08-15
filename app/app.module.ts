import {NgModule,RenderComponentType} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'; 

import {AppComponent} from './app.component';
import {appRoutingProviders,routing} from './app.routing';
import {
    SignInComponent,MyNavComponent,SignUpComponent,
    BannerComponent,ShowCaseComponent,DynamicComponent,MyFootComponent,ImageArticleComponent,LocationCompoennt,ProductListComponent,
    ListComponent,
    TwoLayoutComponent,
    CustomComponent
} from './parts/index';
import {PageComponent} from './page.component';

@NgModule({
    imports:[CommonModule,BrowserModule,FormsModule,routing],
    declarations:[
        AppComponent,SignInComponent,MyNavComponent,PageComponent,SignUpComponent,
    BannerComponent,ShowCaseComponent,DynamicComponent,MyFootComponent,ImageArticleComponent,
    LocationCompoennt,ProductListComponent,ListComponent,
    TwoLayoutComponent,
    CustomComponent
    ],    
    bootstrap:[AppComponent]
})
export class AppModule{}