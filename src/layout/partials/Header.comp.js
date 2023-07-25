import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import logo from "../../assets/img/Sail CRM3.png";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";

export const Header = () => {

    const history = useHistory();

    const logMeOut = () => {
        history.push("/");
    }

    return ( <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
        <Navbar.Brand>
            <img src={logo} alt="logo" width="60px"  />
        </Navbar.Brand>
        <Navbar.Toggle
        aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <LinkContainer to="/dashboard"><Nav.Link >Dashboard</Nav.Link></LinkContainer>
                <LinkContainer to="/tickets"><Nav.Link>Tickets</Nav.Link></LinkContainer>
                
                <Nav.Link onClick={logMeOut}>Logout</Nav.Link> 
            </Nav>
        </Navbar.Collapse>

    </Navbar>
    );
};