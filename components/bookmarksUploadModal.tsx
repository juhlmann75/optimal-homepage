import React, {useEffect, useState} from "react";
import {Button, Modal} from "flowbite-react";
import BookmarksUpload from "./bookmarksUpload";

export default function BookmarksUploadModal() {
    const [mounted, setMounted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="flex items-center justify-center m-4">
            <Button onClick={() => setModalOpen(!modalOpen)}>
                Import New Bookmarks File
            </Button>
            <Modal show={modalOpen} onClose={() => setModalOpen(!modalOpen)}>
                <Modal.Header>
                    Import New Bookmarks File
                </Modal.Header>
                <Modal.Body>
                    <BookmarksUpload></BookmarksUpload>
                </Modal.Body>
            </Modal>
        </div>
    )
}