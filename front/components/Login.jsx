import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

export default ({
  handleChange,
  handleSubmit,
  alertNull,
  alertPass,
  checkboxLogin
}) => {
  const formStyle = {
    width: "18rem",
    height: "110%",
    padding: "3rem",
    borderRadius: "0px",
    boxShadow: "8px 8px 15px -10px rgba(0,0,0,0.39)"
  };

  const divFormStyle = {
    display: "flex",
    justifyContent: "center",
    marginBlockEnd: "5rem",
    marginBlockStart: "5rem"
  };

  return (
    <div style={divFormStyle}>
      <Card style={formStyle} className="login-container">
        <h3
          className="d-flex justify-content-center"
          style={{ marginBlockEnd: "1rem" }}
        >
          Iniciá sesión
        </h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Iniciá sesión con tu email
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">

            <Form.Check
              style={{ display: "inline-block" }}
              type="switch"
              id="custom-switch"
              name="switch"
              onChange={checkboxLogin}
              label="Recordar Usuario"

            />
          </Form.Group>
          {alertNull ? (
            <Alert variant="warning">Por favor completá los campos.</Alert>
          ) : null}
          {alertPass ? (
            <Alert variant="warning">Usuario o contraseña incorrectos.</Alert>
          ) : null}
          <Button
            className="boton-solido"
            type="submit"
            style={{ marginBlockStart: "0.5rem", marginBlockEnd: "1rem" }}
            onClick={handleSubmit}
          >
            Iniciar Sesión
          </Button>
          <Link to="/register">
            <Form.Text className="text-muted">Aún no tienes cuenta?</Form.Text>
            <Form.Text className="text-muted-alt">Registrate.</Form.Text>
          </Link>
        </Form>
        <Container
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end"
          }}
        ></Container>
      </Card>
    </div>
  );
};
