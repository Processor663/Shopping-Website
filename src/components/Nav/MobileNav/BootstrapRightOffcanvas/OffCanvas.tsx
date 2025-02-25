import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiLock } from "react-icons/ci";


function OffCanvasExample ( {...props } ) {
    const [show, setShow] = useState( false );

    const handleClose = () => setShow( false );
    const handleShow = () => setShow( true );

    return (
        <>
            <Button variant="white" onClick={handleShow}>
                < CiLock fontSize={'28px'} />
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
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

export function BootstrapRightOffcanvas () {
    return (
        <>
            {[ 'end'].map( ( placement, idx ) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ) )}
        </>
    );
}
