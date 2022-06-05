import { Apartment, ApartmentInput } from "../../models/apartment.model";
import api, { addToken } from "../../utils/api";

const getAll = (): Promise<Apartment[]> => {
  return api("GET", "/apartment");
};

const create = (payload: ApartmentInput): Promise<Apartment> => {
  return api<ApartmentInput>(
    "POST",
    "/apartment",
    Object.assign(payload, addToken())
  );
};

const service = {
  getAll,
  create,
};

export default service;
