import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostComponent } from './shared/components/post/post.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/services/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostCardComponent,
    PostDashboardComponent,
    PostComponent,
    PostFormComponent,
    PageNotFoundComponent,
    ConfirmComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass :AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
