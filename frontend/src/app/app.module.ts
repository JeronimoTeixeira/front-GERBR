import { httpInterceptorProviders } from './http-interceptors/';
import { DashboardService } from './service/dashboard/dashboard.service';
import { HeaderComponent } from './views/home/template/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './views/home/template/footer/footer.component';
import { NavComponent } from './views/home/template/nav/nav.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component'
import { MatCardModule }from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule }from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './views/authentication/authentication.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { NgSelect2Module } from 'ng-select2';
import { RecordsComponent } from './views/records/records.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AgmCoreModule } from '@agm/core';
import { RegisterUserComponent } from './views/register-user/register-user.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { RegisterComponent } from './views/register/register.component';
import { RegisterMeasurerComponent } from './views/register-measurer/register-measurer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AuthenticationComponent,
    HomepageComponent,
    DashboardComponent,
    RecordsComponent,
    RegisterUserComponent,
    RegisterComponent,
    RegisterMeasurerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgSelect2Module,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders,
    MatDatepickerModule,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
