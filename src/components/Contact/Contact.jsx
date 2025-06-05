import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";

export default function Contact({ contacts }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contacts.id));
  };

  return (
    <li className={css.item}>
      <span className={css.span}>
        <FaUserAlt />
        {contacts.name}
      </span>
      <span className={css.span}>
        <BsFillTelephoneFill />
        {contacts.tel}
      </span>
      <button onClick={handleDelete} className={css.deleteBtn}>
        Delete
      </button>
    </li>
  );
}
