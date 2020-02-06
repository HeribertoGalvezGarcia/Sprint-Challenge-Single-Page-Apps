import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

function LoginForm({errors, touched, isSubmitting}) {
  return (
    <Form>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="text" name="name" placeholder="Name" />
      </div>
      <div>
        {touched.species && errors.species && <p>{errors.species}</p>}
        <Field type="text" name="species" placeholder="Species" />
      </div>
      <div>
        {touched.type && errors.type && <p>{errors.type}</p>}
        <Field type="text" name="type" placeholder="Type" />
      </div>
      <Field component="select" name="status">
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </Field>
      <Field component="select" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </Field>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, species, type, status, gender }) {
    return {
      name: name || "",
      species: species || "",
      type: type || "",
      status: status || "alive",
      gender: gender || "male"
    };
  },
  handleSubmit(values, { resetForm, setSubmitting, props: {setCharacters} }) {
    axios
      .get("https://rickandmortyapi.com/api/character/", {params: values})
      .then(res => {
        setCharacters(res.data.results);
        resetForm();
        setSubmitting(false);
      })
      .catch(() => {
        alert("No characters found!");
        setSubmitting(false);
      });
  }
})(LoginForm);

export default FormikLoginForm;