import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MatedialogComponent } from './matedialog/matedialog.component';
import { BackendFooterComponent } from './backend-footer/backend-footer.component';
import { BackendSidebarComponent } from './backend-sidebar/backend-sidebar.component';
import { BackendHeaderComponent } from './backend-header/backend-header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BackendHeaderComponent,
    BackendSidebarComponent,
    BackendFooterComponent,
    MatedialogComponent,
  ],

  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
