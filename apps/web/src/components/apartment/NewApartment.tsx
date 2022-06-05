import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import {
  Controller,
  NestedValue,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import TextInput from "../form/TextInput";
import TextAreaInput from "../form/TextAreaInput";
import NumberInput from "../form/NumberInput";
import useDispatch from "../../hooks/useDispatch";
import { createApartment } from "../../state/apartment/apartments.thunk";
import { ApartmentInput } from "../../models/apartment.model";
import { useAuth } from "../../auth/AuthProvider";

const defaultValues: ApartmentInput = {
  name: "Rolling Hills",
  description:
    "The enableCors() method takes an optional configuration object argument. The available properties of this object are described in the official CORS documentation. Another way is to pass a callback function that lets you define the configuration object asynchronously based on the request (on the fly).",
  size: 1200,
  rooms: "2BHK",
  address: "IIIT, 5th floor, T Hub, Gachibowli, Telangana 500032",
  monthlyRent: 12000,
  securityDeposit: 2000,
  lat: 13.6276524,
  lng: 79.4248008,
};

const NewApartment = () => {
  const { isAuthenticated } = useAuth();
  const { control, handleSubmit, reset } = useForm<ApartmentInput>({
    defaultValues,
  });

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit: SubmitHandler<ApartmentInput> = (data) => {
    dispatch(createApartment(data))
      .unwrap()
      .then((response) => {
        clearForm();
        handleClose();
      });
  };

  const clearForm = () => {
    reset({ ...defaultValues });
  };

  if (!isAuthenticated) {
    return null;
  }
  return (
    <Container className="d-flex justify-content-end mb-3">
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton className="border-0">
            <Modal.Title>Your Apartment Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextInput
              name="name"
              control={control}
              placeholder="Rolling Hills"
              label="Name"
            />
            <TextAreaInput
              name="description"
              control={control}
              placeholder="About this property ..."
              label="Description"
              rows={5}
            />
            <NumberInput
              name="size"
              control={control}
              placeholder="1200 (in sqft)"
              label="Size"
            />
            <TextInput
              name="rooms"
              control={control}
              placeholder="Rooms (2BHK, 3BHK etc)"
              label="Rooms (2BHK, 3BHK etc)"
            />
            <TextAreaInput
              name="address"
              control={control}
              placeholder="123 street, city, state"
              label="Property Address"
              rows={2}
            />
            <NumberInput
              name="monthlyRent"
              control={control}
              placeholder="12000"
              label="Monthly Rent"
            />
            <NumberInput
              name="securityDeposit"
              control={control}
              placeholder="2000"
              label="Security Deposit"
            />
            <NumberInput
              name="lat"
              control={control}
              placeholder="Latitude"
              label="Latitude"
            />
            <NumberInput
              name="lng"
              control={control}
              placeholder="Longitude"
              label="Longitude"
            />
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="secondary" onClick={handleClose} size="sm">
              Close
            </Button>
            <Button variant="primary" type="submit" size="sm">
              Publish
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Button
        variant="outline-primary"
        onClick={handleShow}
        size="sm"
        className="p-2 px-5"
      >
        New
      </Button>
    </Container>
  );
};

export default NewApartment;
