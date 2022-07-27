import {Navbar} from "flowbite-react";
import React from "react";
import ToggleButton from "./toggleButton";
import CurrentDate from "./currentDate";

export default function TopNavbar() {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Optimal Homepage
    </span>
            </Navbar.Brand>
            <CurrentDate></CurrentDate>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/">
                    About
                </Navbar.Link>
                <Navbar.Link href="/">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}