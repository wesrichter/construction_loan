import React, { Component } from 'react'
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const ApplicationSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(50, 'Too Long')
      .required('Required'),
    lastName: Yup.string()
      .max(50, 'Too Long')
      .required('Required'),
    email: Yup.string()
      .email('Invalid Email')
      .required('Required'),
    phone: Yup.string()
      .length(10, 'Invalid 10 digit phone number')
  });

const ApplicationForm = () => {
    const fields = [
        {id: "firstName", name: "firstName", placeHolder: "First Name"},
        {id: "lastName", name: "lastName", placeHolder: "Last Name"},
        {id: "email", name: "email", placeHolder: "Email"},
        {id: "phone", name: "phone", placeHolder: "Phone"}
    ]

    const selects = [
        {id: "zoning", 
         name: "zoning", 
         options: [
             {value: "residential", display: "Residential"},
             {value: "commercial", display: "Commercial"}
        ]},
        {id: "loanType", 
         name: "loanType", 
         options: [
            {value: "permanent", display: "Construction-To-Permanent"},
            {value: "construction", display: "Construction-Only"},
            {value: "renovation", display: "Renovation"},
            {value: "ownerBuilder", display: "Owner-Builder"},
            {value: "end", display: "End"},
        ]},
    ]

    return (
    <Formik
        validationSchema={ApplicationSchema}
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
            localStorage.setItem("formFirstName", values.firstName);
            window.location.replace('/success')
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500);
    }}
    >
        <Form>
            {
                fields.map(field => {
                    return (
                        <div className="fieldInput">
                        <Field
                            id={field.id} 
                            name={field.name}
                            placeholder={field.placeHolder} 
                        />
                        <ErrorMessage name={field.name}>{msg => <div>{msg}</div>}</ErrorMessage>
                    </div>
                    )
                })
            }

            {
                selects.map(select => {
                    return (
                        <Field as="select" name={select.name}>
                           {select.options.map(drop => <option value={drop.value}>{drop.display}</option>)}
                        </Field>
                    )
                })
            }

            <button type="submit">Submit</button>
        </Form>
    </Formik>
)};



export default ApplicationForm