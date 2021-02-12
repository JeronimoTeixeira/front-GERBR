import { AuthGuard } from './account/shared/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }from './views/home/home.component';
import { ProductCurdComponent }from './views/product-curd/product-curd.component';
import { HomepageComponent } from './views/homepage/homepage.component';
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
      path: "products",
      component: ProductCurdComponent
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
