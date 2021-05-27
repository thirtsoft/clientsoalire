import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MatedialogComponent } from './matedialog/matedialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { BackendFooterComponent } from './backend-footer/backend-footer.component';
import { BackendSidebarComponent } from './backend-sidebar/backend-sidebar.component';
import { BackendHeaderComponent } from './backend-header/backend-header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendSidebarComponent,
    BackendFooterComponent,
    MatedialogComponent,
    NavbarComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendSidebarComponent,
    BackendFooterComponent,
    MatedialogComponent,
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
  ]
})
export class SharedModule { }
