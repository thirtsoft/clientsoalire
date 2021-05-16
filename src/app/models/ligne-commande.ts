import { Commande } from './commande';
import { Article } from './article';
export class LigneCommande {
  id: number;
  numero: number;
  price: number;
  quantity: number;

  commande: Commande;

  article: Article;
}
