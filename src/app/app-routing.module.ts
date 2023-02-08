import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from 'src/components/new-product/new-product.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { RestrictedComponent } from 'src/components/restricted/restricted.component';
import { AuthGuardGuard } from 'src/services/auth-guard.guard';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent    },
  {path:'register', component: RegisterComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuardGuard]},
  {path:'newproduct', component: NewProductComponent, canActivate:[AuthGuardGuard]},
  {path:'contact', component: ContactComponent, canActivate:[AuthGuardGuard]},
  {path:'restricted', component: RestrictedComponent, canActivate:[AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
