import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { OnereviewComponent } from './onereview/onereview.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { UserManagementComponent } from './user-management/user-management.component'
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { WhereWeAreComponent } from "./where-we-are/where-we-are.component";
//import { InputCommentComponent } from "./input-comment/input-comment.component";


import { AuthGuard } from './guard/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate:[AuthGuard]

  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Log In' }
  },
  {
    path: 'logout',
    component: LoginComponent,
    data: { title: 'logout' }
  },
  {path: 'register',
    component: RegisterComponent,
    data : {title : 'register'}

  },
  {path: 'createreview',
    component: CreateReviewComponent,
    data : {title : 'create Review'}

  },
  {path: 'editreview/:id',
    component: EditReviewComponent,
    data : {title : 'Edit Review'}

  },
  // {
  //   path: 'inputcomment/:id',
  //   component: InputCommentComponent,
  //   data: {title: 'Input comment Review'}
  // },
  {path: 'onereview/:id',
    component: OnereviewComponent,
    data : {title : 'one review'}

  },
  {path: 'myprofile',
    component: EditUserProfileComponent,
    data : {title : 'My Profile'}

  },
  {path: 'createadmin',
    component: CreateAdminComponent,
    data : {title : 'Create Administrator'}

  },
  {path: 'usermanager',
    component: UserManagementComponent,
    data : {title : 'User Management'}

  },
  {path: 'aboutus',
    component: AboutUsComponent,
    data : {title : 'About Us'}

  },
  {path: 'contactus',
    component: ContactUsComponent,
    data : {title : 'Contact Us'}

  },
  {path: 'wheretofindus',
    component: WhereWeAreComponent,
    data : {title : 'Where to find us'}

  }
];



export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
