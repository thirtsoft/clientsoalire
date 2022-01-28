import { Commande, CommandeDto } from './commande';
export class Address {
  id: number;
  reference: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;

  commande: Commande;

}

export class AddressDto {
  id: number;
  reference: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;

  commandeDto: CommandeDto;

}


