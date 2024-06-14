const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [],
			urlApi: "http://playground.4geeks.com/contact/agendas"
		},
		actions: {
			// Use getActions to call a function within a fuction
			createUser: async () => {
				const { urlApi } = getStore();
				try {
					const response = await fetch(`${urlApi}/fabricio`,
						{ method: "POST" }
					)
					if (!response.ok) {
						throw new Error("error creando el usuario");
					}
					const data = await response.json();

				} catch (error) {
					console.log(error);

				}
			},
			getContact: async () => {
				const { urlApi } = getStore();
				try {
					const response = await fetch(`${urlApi}/fabricio/contacts`,
						{ method: "GET" }
					)
					if (!response.ok) {
						throw new Error("error accediendo a los contactos");
					}
					const data = await response.json();

					setStore({ agenda: data.contacts });
				} catch (error) {
					console.log(error);

				}
			},
			addContact: async (contact) => {
				const { urlApi, agenda } = getStore();
				try {
					const response = await fetch(`${urlApi}/fabricio/contacts`,
						{
							method: "POST",
							body: JSON.stringify(contact),
							headers: { "Content-Type": "application/json" }
						}
					)
					if (!response.ok) {
						throw new Error("error creando contactos");
					}
					const data = await response.json();

					setStore({ agenda: [...agenda, data] });
					return true
				} catch (error) {
					alert(error)
				}
			},
			deleteContact: async (id) => {
				const { urlApi, agenda } = getStore();
				try {
					const response = await fetch(`${urlApi}/fabricio/contacts/${id}`,
						{
							method: "DELETE",
						}
					)
					if (!response.ok) {
						throw new Error("error eliminando el contacto");
					}

					setStore({ agenda: agenda.filter(contact => contact.id != id) });
				} catch (error) {
					alert(error)
				}

			},
			editContact: async () => { },
		}
	};
};

export default getState;
