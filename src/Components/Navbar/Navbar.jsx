import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import logo from "../../assets/Logo.png";

export default function CustomNavbar() {

    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="lg"
            className="custom-navbar sticky-top"
            expanded={expanded}
            onToggle={setExpanded}
        >

            <Container>

                {/* Logo */}
                <Navbar.Brand
                    as={NavLink}
                    to="/"
                    className="brand"
                > 
                    <img
                        src={logo}
                        alt="عدسة"
                    />
                    <div className="brand-text">
                        <h3>عدسة</h3>
                        <p>عالم التصوير الفوتوغرافي</p>
                    </div>

                    
                </Navbar.Brand>


                {/* Hamburger / X */}
                <Navbar.Toggle
                    aria-controls="main-navbar"
                    className="custom-toggle"
                >
                    {expanded ? (
                        <i className="fa-solid fa-xmark"></i>
                    ) : (
                        <i className="fa-solid fa-bars"></i>
                    )}
                </Navbar.Toggle>


                {/* Menu */}
                <Navbar.Collapse id="main-navbar">

                    <Nav className="navbar-links">

                        <Nav.Link
                            as={NavLink}
                            to="/"
                            className="nav-item"
                            onClick={() => setExpanded(false)}
                        >
                            الرئيسية
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/Blog"
                            className="nav-item"
                            onClick={() => setExpanded(false)}
                        >
                            المدونة
                        </Nav.Link>

                        <Nav.Link
                            as={NavLink}
                            to="/Who"
                            className="nav-item"
                            onClick={() => setExpanded(false)}
                        >
                            من نحن
                        </Nav.Link>

                    </Nav>


                    {/* Button */}
                    <div className="navbar-actions">

                        <i className="fa-solid fa-magnifying-glass search-icon  d-lg-inline d-sm-none"></i>

                        <button className="start-btn">
                            <Navbar as={NavLink} to="/Blog" className="text-white  text-decoration-none text-center">
                            <p className="m-0 m-auto">ابدأ القراءة</p>
                            </Navbar>
                        </button>

                    </div>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}