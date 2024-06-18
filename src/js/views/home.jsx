import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import Contact from "../component/Contact.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid d-flex flex-column gap-3">
			<h1 className="text-center">Agenda</h1>
			<button className="btn text-end"><Link to="/contacts" className="btn btn-danger">Agregar contacto</Link></button>
			{
				store.agenda.map((contact) => {
					return (
						<Contact key={contact.id}
							contact={contact}
						/>
					)
				})
			}
		</div>
	)
}
