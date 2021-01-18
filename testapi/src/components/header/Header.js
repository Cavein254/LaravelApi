import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
                    <Navbar.Brand>React Bootstrap Navbar</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}
