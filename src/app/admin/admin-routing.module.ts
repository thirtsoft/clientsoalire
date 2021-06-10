import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { ListScategoryComponent } from './scategory/list-scategory/list-scategory.component';
import { CreateScategoryComponent } from './scategory/create-scategory/create-scategory.component';
import { ListArticleComponent } from './article/list-article/list-article.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ListFournisseurComponent } from './fournisseur/list-fournisseur/list-fournisseur.component';
import { ListUtilisateurComponent } from './utilisateur/list-utilisateur/list-utilisateur.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { ListLigneCommandeComponent } from './list-ligne-commande/list-ligne-commande.component';
import { ListAddressClientComponent } from './list-address-client/list-address-client.component';
import { ListAddressLivraisonComponent } from './list-address-livraison/list-address-livraison.component';
import { ListNoteArticleComponent } from './list-note-article/list-note-article.component';
import { CreateUtilisateurComponent } from './utilisateur/create-utilisateur/create-utilisateur.component';
import { CreateFournisseurComponent } from './fournisseur/create-fournisseur/create-fournisseur.component';
import { DasboradComponent } from './dasborad/dasborad.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DasboradComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'categories',
    component: ListCategoryComponent
  },
  {
    path: 'categorie',
    component: CreateCategoryComponent
  },
   {
    path:'categorie/:id',
    component:CreateCategoryComponent
  },
  {
    path: 'scategories',
    component: ListScategoryComponent
  },
  {
    path: 'scategorie',
    component: CreateScategoryComponent
  },
  {
    path:'scategorie/:id',
    component: CreateScategoryComponent
  },
  {
    path: 'articles',
    component: ListArticleComponent
  },
  {
    path: 'article',
    component: CreateArticleComponent
  },
  {
    path:'article/:id',
    component: CreateArticleComponent
  },
  {
    path: 'fournisseurs',
    component: ListFournisseurComponent
  },
  {
    path: 'fournisseur',
    component: CreateFournisseurComponent
  },
  {
    path:'fournisseur/:id',
    component: CreateFournisseurComponent
  },
  {
    path: 'clients',
    component: ListClientComponent
  },
  {
    path: 'commandes',
    component: ListCommandeComponent
  },
  {
    path: 'detailsCommandes',
    component: ListLigneCommandeComponent
  },
  {
    path: 'addresses',
    component: ListAddressClientComponent
  },
  {
    path: 'livraisons',
    component: ListAddressLivraisonComponent
  },
  {
    path: 'notifications',
    component: ListNoteArticleComponent
  },
  {
    path: 'utilisateurs',
    component: ListUtilisateurComponent
  },
  {
    path: 'utilisateur',
    component: CreateUtilisateurComponent
  },
  {
    path:'utilisateur/:id',
    component: CreateUtilisateurComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
