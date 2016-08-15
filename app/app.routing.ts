import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './page.component';

import {SignInComponent,SignUpComponent} from './parts/index';

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
{
  path:'sign-up',
  component:SignUpComponent
},
  { path: ':page', 
  component: PageComponent,
  pathMatch:'full' 
}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
