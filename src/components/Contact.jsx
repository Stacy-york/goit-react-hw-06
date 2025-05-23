import css from './Contact.module.css';

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.contactItem}>
      <p className={css.text}>{contact.name}: {contact.number}</p>
      <button className={css.button} onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
}