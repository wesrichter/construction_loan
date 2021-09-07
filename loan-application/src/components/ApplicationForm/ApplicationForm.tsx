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

const ApplicationForm = () => (
    <Formik
        validationSchema={ApplicationSchema}
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500);
    }}
    >
        <Form>
            <div className="fieldInput">
                <Field
                    id="firstName" 
                    name="firstName" 
                    placeholder="First Name" 
                />
                <ErrorMessage name="firstName">{msg => <div>{msg}</div>}</ErrorMessage>
            </div>

            <div className="fieldInput">
                <Field
                    id="lastName" 
                    name="lastName" 
                    placeholder="Last Name" 
                />
                <ErrorMessage name="lastName">{msg => <div>{msg}</div>}</ErrorMessage>
            </div>

            <div className="fieldInput">
                <Field
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
                <ErrorMessage name="email">{msg => <div>{msg}</div>}</ErrorMessage>
            </div>

            <div className="fieldInput">
                <Field
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    type="text"
                />
                <ErrorMessage name="phone">{msg => <div>{msg}</div>}</ErrorMessage>
            </div>

            <Field as="select" name="zoning">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
            </Field>

            <Field as="select" name="loanType">
                <option value="residential">Construction-To-Permanent</option>
                <option value="construction">Construction-Only</option>
                <option value="renovation">Renovation</option>
                <option value="ownerBuilder">Owner-Builder</option>
                <option value="end">End</option>
            </Field>

            <button type="submit">Submit</button>
        </Form>
    </Formik>
);



export default ApplicationForm