import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { HiBars4 } from "react-icons/hi2";



function BootstrapOffcanvas () {
    const [show, setShow] = useState( false );

    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );

    
    return (
        <>
            <Button variant="white" onClick={handleShow}>
                <HiBars4 fontSize="25px" />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default BootstrapOffcanvas;



























































