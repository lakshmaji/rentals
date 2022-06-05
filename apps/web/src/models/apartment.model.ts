import { User } from "./user.model";

export interface Apartment {
  name: string;
  description: string;
  id: string;
  size: number;
  rooms: string;
  address: string;
  monthlyRent: number;
  securityDeposit: number;
  occupied: boolean;
  lat: number;
  lng: number;
  owner: User;
}

export interface ApartmentInput
  extends Pick<
    Apartment,
    | "name"
    | "description"
    | "size"
    | "rooms"
    | "address"
    | "monthlyRent"
    | "securityDeposit"
    | "lat"
    | "lng"
  > {
}
