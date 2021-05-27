import { StatusCommande } from './status-commande';
import { Client, ClientDto } from './client';
export class Commande {
  id: number;
  reference: string;
  numeroCommande: string;
  total: number;
  dateCommande: Date;

  statusCommande: StatusCommande;

  client: Client;
}

export class CommandeDto {

  id: number;
  reference: string;
  numeroCommande: string;
  total: number;
  dateCommande: Date;

  statusCommande: StatusCommande;

  clientDto: ClientDto;

}
