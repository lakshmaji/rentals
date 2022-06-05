import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import useDispatch from "../../hooks/useDispatch";
import useSelector from "../../hooks/useSelector";
import { retrieveApartments } from "../../state/apartment/apartments.thunk";
import ApartmentCard from "./ApartmentCard";


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
          {apartments.map((apartment) => {
            return <ApartmentCard apartment={apartment} key={apartment.id} />;
          })}
        </Container>
      </>
    );
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default Apartments;
