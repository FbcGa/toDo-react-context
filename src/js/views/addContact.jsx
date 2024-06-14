import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await actions.addContact(contact);
        if (result) {
            navigate("/");
        }
    }
    return (
        <div className="vh-50 d-flex justify-content-center align-items-center">
            <div className='card w-75'>
                <div className="card-header text-center">
                    <h1>Agregar un contacto</h1>
                </div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div>
                        <label>Nombres</label>
                        <input className="form-control"
                            name="name"
                            value={contact?.name}
                            type="text"
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input className="form-control"
                            name="email"
                            value={contact?.email}
                            type="text"
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label>Teléfono</label>
                        <input className="form-control"
                            name="phone"
                            value={contact?.phone}
                            type="text"
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <div>
                        <label>Direccion</label>
                        <input className="form-control"
                            name="address"
                            value={contact?.address}
                            type="text"
                            onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="d-flex flex-column mt-3" >
                        <button className="btn btn-success" type="submit" >Guardar</button>
                        <Link to="/">Contactos</Link>
                    </div>

                </form>
            </div>

        </div>
    )
}
