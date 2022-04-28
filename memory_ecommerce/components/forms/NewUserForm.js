import { useRef } from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

import styles from "../../styles/NewUserForm.module.css";
import { toast } from "react-toastify";

const CustomButton = styled(Button)({
  width: "30%",
  marginBottom: "1rem",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 15,
  color: "#000",
  border: "1px solid",
  borderColor: "#000",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#000",
    borderColor: "#000",
    color: "#fff",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#000",
    borderColor: "#000",
    color: "#fff",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const NewUserForm = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    if (enteredPassword !== enteredConfirmPassword) {
      console.log("pass", passwordInputRef);
      console.log("conf", confirmPasswordInputRef);
      toast.error("Passwords do not match");
    }
    try {
      const userData = {
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        confirmPassword: enteredConfirmPassword,
      };

      props.onAddUser(userData);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <Container className={styles.formContainer}>
      <h1 className="my-3">Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" required ref={nameInputRef}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            ref={emailInputRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            ref={passwordInputRef}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            required
            ref={confirmPasswordInputRef}
          ></Form.Control>
        </Form.Group>
        <div className="mb-3">
          <CustomButton type="submit" variant="outlined">
            Sign up
          </CustomButton>
        </div>
        <div className="mb-3">
          Already have an account? <Link href="/">Sing-In</Link>
        </div>
      </Form>
    </Container>
  );
};

export default NewUserForm;
