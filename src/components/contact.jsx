import { useState } from "react";

import ContactList from "./contactList";

function Contact() {
	const [contacts, setContacts] = useState([]);
	const [contact, setContact] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
	});

	const changeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setContact((contact) => ({ ...contact, [name]: value }));
	};

	const addHandler = () => {
		setContacts((contacts) => [...contacts, contact]);
		setContact({ name: "", lastName: "", email: "", phone: "" });
	};

	return (
		<div>
			<div>
				<input
					type="text"
					name="name"
					placeholder="Name"
					onChange={changeHandler}
					value={contact.name}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					onChange={changeHandler}
					value={contact.lastName}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					onChange={changeHandler}
					value={contact.email}
				/>
				<input
					type="number"
					name="phone"
					placeholder="Phone number"
					onChange={changeHandler}
					value={contact.phone}
				/>
				<button onClick={addHandler}>Add Contact</button>
			</div>
            <ContactList contact={contacts}/>
		</div>
	);
}

export default Contact;