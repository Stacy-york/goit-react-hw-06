import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required('Required'),
  number: Yup.string().min(3).max(50).required('Required'),
});

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        onAdd(newContact);
        actions.resetForm();
      }}
    >
      <Form className={css.container}>
        <div className={css.form}>
          <label className={css.label}>
            Name:
            <Field className={css.input} name="name" type="text" />
          </label>
          <ErrorMessage className={css.error} name="name" component="div" style={{ color: 'red' }} />
        </div>

        <div className={css.form}>
          <label className={css.label}>
            Number:
            <Field className={css.input} name="number" type="tel" />
          </label>
          <ErrorMessage className={css.error} name="number" component="div" style={{ color: 'red' }} />
        </div>

        <button className={css.button} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

