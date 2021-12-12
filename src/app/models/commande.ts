import { LigneCommande } from './ligne-commande';
import { AddressDto } from './address';
import { Utilisateur, UtilisateurDto } from './utilisateur';
import { StatusCommande } from './status-commande';
import { Client, ClientDto } from './client';
export class Commande {
  id: number;
  reference: string;
  totalQuantity: number;
  numeroCommande: string;
  totalCommande: number;
  total: number;
  dateCommande: Date;
  userId: number;
  username: string;

  statusCommande: StatusCommande;

  client: Client;

  utilisateur: Utilisateur;
}

export class CommandeDto {
  id: number;
  reference: string;
  numeroCommande: string;
  totalQuantity: number;
  total: number;
  dateCommande: Date;

  statusCommande: StatusCommande;

  status: string;

  clientDto: ClientDto;

  utilisateurDto: UtilisateurDto;

  billingAddressDto: AddressDto;

  shippingAddressDto: AddressDto;

  lcomms :Array<LigneCommande>=[];


}
