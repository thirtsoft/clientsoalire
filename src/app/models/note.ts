import { Article } from './article';
import { Utilisateur } from './utilisateur';
export class Note {
  id: number;
  reference: string;
  nbreEtoile: string;
  observation: string;

  article: Article;

  utilisateur: Utilisateur;
}
