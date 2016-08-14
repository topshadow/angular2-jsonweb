import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './page.component';
import {SignInComponent} from './parts/sign/sign-in/sign-in';

const appRoutes: Routes = [
  {
    path:"",
    redirectTo:"/sign-in",
    pathMatch:'full'
  },
{
    path:"sign-in",
    component:SignInComponent
},

  { path: '**', 
  component: PageComponent,
  pathMatch:'full' 
}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
