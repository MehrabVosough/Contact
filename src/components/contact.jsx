import { useState } from "react";

import ContactList from "./contactList";
import inputs from "../constants/input";


function Contact() {
	const [contacts, setContacts] = useState([]);
	const [alert, setAlert] = useState("");
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
		if (
			!contact.name ||
			!contact.lastName ||
			!contact.email ||
			!contact.phone
		) {
			setAlert("Please Enter Valid Data!");
			return;
		}
		setAlert("");
		setContacts((contacts) => [...contacts, contact]);
		setContact({ name: "", lastName: "", email: "", phone: "" });
	};

	return (
		<div>
			<div>
				{inputs.map((input, index) => (
					<input
						key={index}
						type={input.type}
						placeholder={input.placeholder}
						name={input.name}
						value={contact[input.name]}
						onChange={changeHandler}
					/>
				))}
				<button onClick={addHandler}>Add Contact</button>
			</div>
			<div>{alert && <p>{alert}</p>}</div>
			<ContactList contact={contacts} />
		</div>
	);
}

export default Contact;
