import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AuthGuard } from './account/shared/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }from './views/home/home.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { RecordsComponent } from './views/records/records.component';
import { RegisterUserComponent } from './views/register-user/register-user.component';
import { RegisterComponent } from './views/register/register.component';
const routes: Routes = [
{
  path: "",
  component: HomeComponent,
  children:[
    {
      path: "",
      component: HomepageComponent
    },
    {
      path:"dashboard",
      component: DashboardComponent
    },
    {
      path:"records",
      component: RecordsComponent
    },
    {
      path:"register",
      component: RegisterComponent
    },
    {
      path:"register-user",
      component: RegisterUserComponent
    }
  ]
  ,
  canActivate: [AuthGuard]
}
,
{
  path:"",
  component: AuthenticationComponent,
  children:[
    {
      path:"",
      redirectTo:'login',
      pathMatch:'full'
    },
    { 
      path:"login",
      component: LoginComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
