import { Apartment, ApartmentInput } from "../../models/apartment.model";
import api, { addToken } from "../../utils/api";

const getAll = async (): Promise<Apartment[]> => {
  return api<any, any>("GET", "/apartment");
};

const create = (token: string) => (payload: ApartmentInput): Promise<Apartment> => {
  return api<any, ApartmentInput>(
    "POST",
    "/apartment",
    Object.assign(payload, addToken(token))
  );
};

const service = {
  getAll,
  create,
};

export default service;
