import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from 'src/services/authservice.service';
import { LoginComponent } from 'src/components/login/login.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { AuthGuardGuard } from 'src/services/auth-guard.guard';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { RestrictedComponent } from 'src/components/restricted/restricted.component';
import { NewProductComponent } from 'src/components/new-product/new-product.component';
import { CategoryService } from 'src/services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    NewProductComponent,
    ContactComponent,
    RestrictedComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    
  ],
  providers: [AuthserviceService,
              AuthGuardGuard,
              CategoryService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
