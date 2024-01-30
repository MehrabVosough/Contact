import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css"

function contactList({ contact,  setContacts }) {
	console.log(contact);
	return (
		<div className={styles.container}>
			<h3>Contact List</h3>
			{contact.length ? (
				<ul className={styles.contacts}>
					{contact.map((contact) => (
						<ContactItem key={contact.id} data={contact} deleteItem={setContacts}/>
					))}
				</ul>
			) : (
				<p className={styles.message}>No Contact Yet...</p>
			)}
		</div>
	);
}

export default contactList;
