import React from "react";
import "./Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Container} from "react-bootstrap";
import "../../index.css";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {

  const[sticky,setSticky] = useState(false)

  useEffect(() =>{
    window.addEventListener("scroll", () =>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);




  return (
    <Container fluid className= {`background ${sticky ? `dark-nav`: ``} `}>
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
