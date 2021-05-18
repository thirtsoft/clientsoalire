import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination' ;

import { ListClientComponent } from './list-client/list-client.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { ListNoteArticleComponent } from './list-note-article/list-note-article.component';
import { ListLigneCommandeComponent } from './list-ligne-commande/list-ligne-commande.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { CreateScategoryComponent } from './scategory/create-scategory/create-scategory.component';
import { ListScategoryComponent } from './scategory/list-scategory/list-scategory.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { ListAddressClientComponent } from './list-address-client/list-address-client.component';
import { ListAddressLivraisonComponent } from './list-address-livraison/list-address-livraison.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreateUtilisateurComponent } from './utilisateur/create-utilisateur/create-utilisateur.component';
import { CreateFournisseurComponent } from './fournisseur/create-fournisseur/create-fournisseur.component';

@NgModule({
  declarations: [
    ListAddressLivraisonComponent,
    ListAddressClientComponent,
    ListArticleComponent,
    CreateArticleComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    ListScategoryComponent,
    CreateScategoryComponent,
    ListFournisseurComponent,
    CreateFournisseurComponent,
    CreateUtilisateurComponent,
    ListUtilisateurComponent,
    ListClientComponent,
    ListCommandeComponent,
    ListLigneCommandeComponent,
    ListNoteArticleComponent,
    AccueilComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatExpansionModule,

    MatPaginatorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ]
})
export class AdminModule { }
