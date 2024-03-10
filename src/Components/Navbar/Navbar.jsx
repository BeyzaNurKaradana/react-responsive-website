import React from "react";
import "./Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Container} from "react-bootstrap";
import "../../index.css";

const Navbar = () => {
  return (
    <Container className="background" fluid>
      <nav className="container" >
        <img
          className="logo"
          src="https://greatstack.in/assets/logo-DUdXW4nF.png"
          alt="logo"
        />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About Us</li>
          <li>Campus</li>
          <li>Testimonials</li>
        </ul>
        <Button className="btn ms-0" variant="light">
          Contact Us
        </Button>
      </nav>
    </Container>
  );
};

export default Navbar;
