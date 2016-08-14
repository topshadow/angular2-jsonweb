import { Routes, RouterModule } from '@angular/router';
import {PageComponent} from './page.component';

const appRoutes: Routes = [
  {
    path:"",
    redirectTo:"sign-in",
    pathMatch:'full'

  },
  { path: '**', 
  component: PageComponent,
  pathMatch:'full' 

}

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
