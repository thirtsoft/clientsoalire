import { Article, ArticleDto } from './article';
export class Fournisseur {
  id: number;
  reference: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  telephone: string;
  city: string;
  town: string;
  rue: string;

  article: Article;
}

export class FournisseurDto {
  id: number;
  reference: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  telephone: string;
  city: string;
  town: string;
  rue: string;

  articleDto: ArticleDto;


}
