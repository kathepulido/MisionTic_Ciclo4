import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../NavBar';
import * as ReactBootStrap from "react-bootstrap";
import RegisterPet from './RegisterPet';
import * as Icon from 'react-bootstrap-icons';
const General = () => {

  const [pets, setPets] = useState({ documents: [] })

  useEffect(() => {
    const fetchPetsList = async () => {
      const { data } = await axios(
        "http://localhost:8080/mascota"
      );
      setPets({
        documents: data
      });
      console.log(data);
    };
    fetchPetsList();
  }, [setPets]);

  return (
    <div>
      <NavBar />
      <ReactBootStrap.Form>
        <ReactBootStrap.Row>
          <ReactBootStrap.Col className="my-1 d-flex justify-content-start">
            <RegisterPet />
          </ReactBootStrap.Col>
          <ReactBootStrap.Col xs="auto" className="my-1 d-md-flex justify-content-md-end">
            <ReactBootStrap.Form.Control placeholder="Buscar..." />
          </ReactBootStrap.Col>
          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Form.Select>
              <option value=""  >Seleccion...</option>
              <option value="1">Nombre</option>
              <option value="2">Cedula Dueño</option>
            </ReactBootStrap.Form.Select>
          </ReactBootStrap.Col>

          <ReactBootStrap.Col xs="auto" className="my-1">
            <ReactBootStrap.Button><Icon.Search  /></ReactBootStrap.Button>
          </ReactBootStrap.Col>

        </ReactBootStrap.Row>
      </ReactBootStrap.Form>

      <table className="table table-hover">
        <thead>
          <tr>
            {/* <th scope="col">Id</th> */}
            <th scope="col">Nombre</th>
            <th scope="col">Raza</th>
            <th scope="col">Fecha Nacimiento</th>
            <th scope="col">1er Dosis</th>
            <th scope="col">2da Dosis</th>
            <th scope="col">3er Dosis</th>
            <th scope="col">4ta Dosis</th>
            <th scope="col">5ta Dosis</th>
            <th scope="col">Esquema</th>
            <th scope="col">Estado</th>
            <th scope="col">Dueño</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {pets.documents &&
            pets.documents.map((item) =>
              <tr key={item.id}>
                {/*  <td>{item.id}</td> */}
                <td>{item.nombre}</td>
                <td>{item.raza}</td>
                <td>{item.fecha_nacimiento}</td>
                <td>{item.fecha_vacuna1}</td>
                <td>{item.fecha_vacuna2}</td>
                <td>{item.fecha_vacuna3}</td>
                <td>{item.fecha_vacuna4}</td>
                <td>{item.fecha_vacuna5}</td>
                <td>{item.estado_vacunas}</td>
                <td>{item.estado_salud}</td>
                <td>dueño</td>
                <td>
                  <ReactBootStrap.OverlayTrigger
                    overlay={
                      <ReactBootStrap.Tooltip >
                        Editar Mascota
                      </ReactBootStrap.Tooltip>
                    }
                  >
                    <button className="btn btn-primary" ><Icon.PencilSquare /></button>
                  </ReactBootStrap.OverlayTrigger>
                  {"    "}
                  <ReactBootStrap.OverlayTrigger
                    overlay={
                      <ReactBootStrap.Tooltip >
                        Eliminar Mascota
                      </ReactBootStrap.Tooltip>
                    }
                  >
                    <button className="btn btn-danger"><Icon.Trash /></button>
                  </ReactBootStrap.OverlayTrigger>
                  </td>


              
              </tr>
            )
          }

        </tbody>
      </table>
    </div>
  )
}

export default General
