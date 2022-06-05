import React, { useCallback, useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import useDispatch from "../hooks/useDispatch";
import { User } from "../models/user.model";
import { fetchUser } from "../state/user/user.thunk";

const Profile = () => {
  const [user, setUser] = useState<User>({} as User);
  const dispatch = useDispatch();

  const loadUserProfile = useCallback(async () => {
    dispatch(fetchUser())
      .unwrap()
      .then((response) => {
        setUser(response);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, [dispatch]);

  useEffect(() => {
    loadUserProfile();
  }, [loadUserProfile]);

  return (
    <Container className="d-flex flex-wrap justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body className="text-center">
          <Card.Title>My Profile</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{user.name}</Card.Subtitle>
          <Card.Text>{user.email}</Card.Text>
          <Card.Link to="/account" as={Link}>
            Account
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
