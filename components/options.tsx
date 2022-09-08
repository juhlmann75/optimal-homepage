import {Button, Modal} from "flowbite-react";
import BookmarksUpload from "./bookmarksUpload";
import React, {useEffect, useState} from "react";
import FeatureFlags from "./featureFlags";
import ToggleButton from "./toggleButton";
import {IoMdSettings} from "react-icons/io";

export default function Options() {
    const [mounted, setMounted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="flex items-center justify-center m-4">
            <IoMdSettings onClick={() => setModalOpen(!modalOpen)}
                className="hover:cursor-pointer scale-200 hover:scale-175 duration-500 md:mr-4"
            />
            <Modal show={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
                <Modal.Header>
                    Options
                </Modal.Header>
                <Modal.Body>
                    <FeatureFlags/>
                </Modal.Body>
            </Modal>
        </div>

    )
}