import ContactItem from "./ContactItem";

function contactList({ contact }) {
	console.log(contact);
	return (
		<div>
			<h3>Contact List</h3>
			{contact.length ? (
				<ul>
					{contact.map((contact) => (
						<ContactItem key={contact.id} data={contact}/>
					))}
				</ul>
			) : (
				<p>No Contact Yet...</p>
			)}
		</div>
	);
}

export default contactList;
