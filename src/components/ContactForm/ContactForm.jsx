import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const defaultValues = {
  name: "",
  tel: "",
};

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
  tel: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      tel: values.tel,
    };
    dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={handleSubmit}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <Field
          className={css.name}
          type="text"
          name="name"
          placeholder="name"
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <Field
          className={css.tel}
          type="tel"
          name="tel"
          placeholder="phone number"
        />
        <ErrorMessage className={css.error} name="tel" component="span" />

        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
