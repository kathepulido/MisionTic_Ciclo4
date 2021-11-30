
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import * as ReactBootStrap from "react-bootstrap";
import FormNewPet from './FormNewPet';
import * as Icon from 'react-bootstrap-icons';

const RegisterPet = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div>
          <ReactBootStrap.OverlayTrigger
        overlay={
          <ReactBootStrap.Tooltip >
            Registrar Nueva Mascota
          </ReactBootStrap.Tooltip>
        }
      >
        <ReactBootStrap.Button className="primary" onClick={handleShow}><Icon.PersonPlus size={22} /></ReactBootStrap.Button>
      </ReactBootStrap.OverlayTrigger>
            
      <Modal
      size="lg"
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Registro de Mascota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormNewPet />
        </Modal.Body>
      </Modal>

        </div>
    )
}

export default RegisterPet


  


