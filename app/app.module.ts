import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {appRoutingProviders,routing} from './app.routing';
import {SignInComponent,MyNavComponent} from './parts/index';

@NgModule({
    imports:[CommonModule,BrowserModule,FormsModule,routing],
    declarations:[AppComponent,SignInComponent,MyNavComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}