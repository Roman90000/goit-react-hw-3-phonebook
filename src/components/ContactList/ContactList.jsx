export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(item => (
          <li
            key={item.id}
            onClick={() => {
              deleteContact(item.id);
            }}
          >
            <div>{`${item.name}: ${item.number}`}</div>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
