import React, { useContext } from 'react'
import { Context } from '../store/appContext';
import { Link, useNavigate } from 'react-router-dom';

function Contact({ contact }) {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const pageEdi = (id) => {
        navigate(`/edit/${id}`);
    }
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <img className="rounded-pill" src="https://preview.redd.it/tried-making-gigachad-in-starfield-and-got-mixed-results-v0-upxnmcfynqmb1.png?width=640&crop=smart&auto=webp&s=5ca38859fe39af3699f23d62167a17a1d5af3bea" alt={contact.name} style={{ width: "150px", height: "150px" }} />
                </div>
                <div className="col d-flex flex-column text-start">
                    <h1>{contact.name}</h1>
                    <span><i className="fas fa-map-marker-alt"></i> {contact.address}</span>
                    <span><i className="fas fa-phone"></i> {contact.phone}</span>
                    <span><i className="fas fa-envelope"></i> {contact.email}</span>
                </div>

                <div className="col">
                    <button className="btn" onClick={() => pageEdi(contact.id)} ><i className="fas fa-pencil-alt"></i></button>
                    <button className="btn" onClick={() => actions.deleteContact(contact.id)} ><i className="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Contact