import React, { Component } from 'react'
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
const { Texter, Emailer, Phoner, Numerer } = require('inputter');
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
        validate={ values => {
            const errors = {}

            const firstName = new Texter(values.firstName)
            firstName.Min(2).Max(50).Required().OnlyText()
            firstName.errorMessage ? errors['firstName'] = firstName.errorMessage : null

            const lastName = new Texter(values.lastName)
            lastName.Min(2).Max(50).Required().OnlyText()
            lastName.errorMessage ? errors['lastName'] = lastName.errorMessage : null

            const email = new Emailer(values.email)
            email.Validate().Required()
            email.errorMessage ? errors['email'] = email.errorMessage : null

            const phone = new Phoner(values.phone)
            phone.Validate().OnlyNumber().Required()
            phone.errorMessage ? errors['phone'] = phone.errorMessage : null

            return errors
            
        }}
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }}
        onSubmit={(values, { setSubmitting }) => {
            console.log('SUBMITTING')
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
                        <div key={field.id} className="fieldInput">
                        <Field
                            key={field.id} 
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
                        <Field key={select.id} as="select" name={select.name}>
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