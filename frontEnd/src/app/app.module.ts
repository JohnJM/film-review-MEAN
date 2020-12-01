import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEditorModule  } from 'ngx-editor';
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';




import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { Routes, RouterModule } from '@angular/router';

// import services manuaally
import {AuthLoginService} from './service/auth-login.service';
import {AuthRegisterService} from './service/auth-register.service';
import {AlertService} from './service/alert.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import {AppRouting} from './app.routing';
import { AuthGuard } from './guard/auth.guard';
import { AlertComponent } from './directives/alert/alert.component'
import {ErrorInterceptorProvider} from './service/helper/error.interceptor';
import {JwtInterceptorProvider} from './service/helper/jwt.interceptor';
import { MenuComponent } from './menu/menu.component';
import {ReviewService} from "./service/review.service";
import { ManageUserService } from "./service/manageuser.service";


//imoports for material
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatMenuModule, MatCommonModule, MatCardModule, MatToolbarModule, MatIconModule,
  MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatSidenavModule,
  MatAutocompleteModule, MatCheckboxModule, MatGridListModule, MatDialogModule, MatLineModule,
  MatChipsModule, MatExpansionModule, MatProgressBarModule, MatRadioModule, MatSelectModule, MatNativeDateModule
} from '@angular/material';

import { CreateReviewComponent } from './create-review/create-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { UserManagementComponent } from './user-management/user-management.component'
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhereWeAreComponent } from './where-we-are/where-we-are.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { OnereviewComponent } from './onereview/onereview.component';
import { InputCommentComponent } from './input-comment/input-comment.component';
import { ViewCommentsComponent } from './view-comments/view-comments.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    MenuComponent,
    CreateReviewComponent,
    EditReviewComponent,
    OnereviewComponent,
    EditUserProfileComponent,
    CreateAdminComponent,
    UserManagementComponent,
    AboutUsComponent,
    ContactUsComponent,
    WhereWeAreComponent,
    ViewReviewsComponent,
    OnereviewComponent,
    InputCommentComponent,
    ViewCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatMenuModule,
    MatCommonModule, MatCardModule, MatToolbarModule, MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDialogModule,
    MatLineModule,
    MatChipsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule, MatNativeDateModule,
    BrowserAnimationsModule,
    NgxEditorModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule


  ],
  providers: [
    AuthRegisterService,
    AuthLoginService,
    AuthGuard,
    AlertService,
    JwtInterceptorProvider,
    ErrorInterceptorProvider,
    ReviewService,
    ManageUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
