import { Article, ArticleDto } from './article';
import { Utilisateur, UtilisateurDto } from './utilisateur';
export class Note {
  id: number;
  reference: string;
  nbreEtoile: string;
  observation: string;

  article: Article;

  utilisateur: Utilisateur;
}

export class NoteDto {
  id: number;
  reference: string;
  nbreEtoile: string;
  observation: string;

  articleDto: ArticleDto;

  utilisateurDto: UtilisateurDto;

}
