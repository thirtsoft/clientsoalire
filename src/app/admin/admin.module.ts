import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ListClientComponent } from './list-client/list-client.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { ListNoteArticleComponent } from './list-note-article/list-note-article.component';
import { ListLigneCommandeComponent } from './list-ligne-commande/list-ligne-commande.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { CreateScategoryComponent } from './scategory/create-scategory/create-scategory.component';
import { ListScategoryComponent } from './scategory/list-scategory/list-scategory.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { ListAddressClientComponent } from './list-address-client/list-address-client.component';
import { ListAddressLivraisonComponent } from './list-address-livraison/list-address-livraison.component';

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
    AddFournisseurComponent,
    AddUtilisateurComponent,
    ListUtilisateurComponent,
    ListClientComponent,
    ListCommandeComponent,
    ListLigneCommandeComponent,
    ListNoteArticleComponent
  ],

  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
