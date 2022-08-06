import {Navbar} from "flowbite-react";
import React from "react";
import ToggleButton from "./toggleButton";
import BookmarksUploadModal from "./bookmarksUploadModal";

export default function TopNavbar() {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-5">
      Optimal Homepage
    </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <ToggleButton></ToggleButton>
                <BookmarksUploadModal></BookmarksUploadModal>
            </Navbar.Collapse>
        </Navbar>
    )
}