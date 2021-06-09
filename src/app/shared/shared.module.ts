import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { SharedRoutingModule } from './shared-routing.module';

import { MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { BackendFooterComponent } from './../shared/backend-footer/backend-footer.component';
import { BackendSidebarComponent } from './../shared/backend-sidebar/backend-sidebar.component';
import { BackendHeaderComponent } from './../shared/backend-header/backend-header.component';
import { FooterComponent } from './../shared/footer/footer.component';
import { SidebarComponent } from './../shared/sidebar/sidebar.component';
import { HeaderComponent } from './../shared/header/header.component';
import { MatdialogComponent } from './matdialog/matdialog.component';
import { NavbarComponent } from './../shared/navbar/navbar.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendSidebarComponent,
    BackendFooterComponent,
    MatdialogComponent,
    NavbarComponent,
    FooterBottomComponent,
    MainFooterComponent,
    NewsletterComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendSidebarComponent,
    BackendFooterComponent,
    MatdialogComponent,
    NavbarComponent,
    FooterBottomComponent,
    MainFooterComponent,
    NewsletterComponent,

  ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    DatePipe,
    {
      provide: MAT_DIALOG_DATA,
      useValue: {} ,
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },

  ],
})
export class SharedModule { }
