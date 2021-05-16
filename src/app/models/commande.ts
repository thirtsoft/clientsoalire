import { StatusCommande } from './status-commande';
import { Client } from './client';
export class Commande {
  id: number;
  reference: string;
  numeroCommande: string;
  total: number;
  dateCommande: Date;

  statusCommande: StatusCommande;

  clientDto: Client;
}
