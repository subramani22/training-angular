import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FbgComponent } from './fbg/fbg.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'fbg',
    pathMatch:'full'
  },
  {
    path:'fbg',
    component:FbgComponent
  },
  {
    path:'landingpage',
    component:LandingpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
