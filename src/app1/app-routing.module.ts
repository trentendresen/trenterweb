import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChirpPageComponent } from './pages/chirp-page/chirp-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component:HomePageComponent },
  { path: 'trents', component: LoginPageComponent ,canActivate: [AuthGuard]},
  { path: 'profile', component: ChirpPageComponent, canActivate: [AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
