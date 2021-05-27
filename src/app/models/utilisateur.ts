export class Utilisateur {
  id: number;
  name: string;
  username: string;
  mobile: string;
  email: string;
  address: string;
  password: string;
  photo: string;
  activated: boolean = false;

}

export class UtilisateurDto {
  id: number;
  name: string;
  username: string;
  mobile: string;
  email: string;
  address: string;
  password: string;
  photo: string;
  activated: boolean = false;

}
