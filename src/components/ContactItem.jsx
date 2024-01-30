function ContactItem({
	data: { id, name, lastName, email, phone },
	deleteItem,
}) {
	return (
		<li key={id}>
			<p>
				{name} {lastName}
			</p>
			<p>
				<span>📩</span>
				{email}
			</p>
			<p>
				<span>☎️</span>
				{phone}
			</p>
			<button onClick={() => deleteItem(id)}>🗑️</button>
		</li>
	);
}

export default ContactItem;
