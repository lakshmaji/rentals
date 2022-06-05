import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";
import { Apartment } from "../../models/apartment.model";
import { retrieveApartments } from "../../state/apartment/apartments.thunk";
import ApartmentCard from "./ApartmentCard";
import NewApartment from "./NewApartment";

const Apartments = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const { entities: apartments, loading } = useSelector(
    (state) => state.apartments
  );


  const initFetch = useCallback(() => {
    dispatch(retrieveApartments());
  }, [dispatch]);

  useEffect(() => {
    if (loading === "idle") {
      initFetch();
    }
  }, [initFetch, loading]);

  if (loading === "pending") {
    return <div>Loading...</div>;
  }

  let content = <>Welcome, we fetch some info</>;
  if (loading === "succeeded") {
    content = (
      <>
        <Container className="d-flex flex-wrap justify-content-center">
          {apartments.map((apartment: Apartment) => {
            return <ApartmentCard key={apartment.id} apartment={apartment} />;
          })}
        </Container>
      </>
    );
  }
  return (
    <div>
      <NewApartment />
      {content}
    </div>
  );
};

export default Apartments;
