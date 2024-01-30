function contactList({ contact }) {
	console.log(contact);
	return (
		<div>
			<h3>Contact List</h3>
			<ul>
				{contact.map((contact) => (
					<li key={contact.id}>{contact.name}</li>
				))}
			</ul>
		</div>
	);
}

export default contactList;
