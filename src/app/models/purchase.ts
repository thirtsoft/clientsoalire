import { Utilisateur } from './utilisateur';
import { LigneCommande } from './ligne-commande';
import { Commande } from './commande';
import { Address } from './address';
import { Client } from './client';

export class Purchase {
  client: Client;
//  shippingAddress: Address;
  billingAddress: Address;
  commande: Commande;
  lcomms: LigneCommande[];
  utilisateur: Utilisateur
}
