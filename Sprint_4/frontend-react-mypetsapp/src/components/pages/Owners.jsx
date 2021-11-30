import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../NavBar';
import * as ReactBootStrap from "react-bootstrap";
import RegisterOwner from './RegisterOwner';





const Owners = () => {

    const [owners, setOwners] = useState({ documents: [] })

    useEffect(() => {
        const fetchOwnersList = async () => {
            const { data } = await axios(
                "http://localhost:8080/dueno"
            );
            setOwners({
                documents: data
            });
            console.log(data);
        };
        fetchOwnersList();
    }, [setOwners]);
    return (
        <div>
            <NavBar />
            <ReactBootStrap.Form>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col className="my-1 d-flex justify-content-start">
                    <RegisterOwner />
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto" className="my-1 d-md-flex justify-content-md-end">
                        <ReactBootStrap.Form.Control placeholder="Buscar..." />
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Form.Select>
                            <option className="active" value="0" disabled >Seleccion...</option>
                            <option value="1">Cedula</option>
                            <option value="2">Nombre</option>
                        </ReactBootStrap.Form.Select>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col xs="auto" className="my-1">
                        <ReactBootStrap.Button>Buscar</ReactBootStrap.Button>
                    </ReactBootStrap.Col>

                </ReactBootStrap.Row>
            </ReactBootStrap.Form>


            <table className="table table-hover">
                <thead>
                    <tr>
                        {/* <th scope="col">Id</th> */}
                        <th scope="col">Cedula</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Mascotas</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {owners.documents &&
                        owners.documents.map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.direccion}</td>
                                <td>{item.telefono}</td>
                                <td>{item.correo}</td>
                                <td>mascotas</td>
                                <td><button className="btn btn-primary" >Editar</button> {"   "}
                                    <button className="btn btn-danger">Eliminar</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Owners
