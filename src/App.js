import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Users should be able to:

// - Complete the form and see a success toast message upon successful submission
// - Receive form validation messages if:
//   - A required field has been missed
//   - The email address is not formatted correctly
// - Complete the form only using their keyboard
// - Have inputs, error messages, and the success message announced on their screen reader
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page

function App() {
    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        query_type: "",
        message: "",
    };

    const validationSchema = Yup.object({
        first_name: Yup.string().required("First name is required"),
        last_name: Yup.string().required("Last name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        query_type: Yup.string().required("Please select a query type"),
        message: Yup.string().required("Message is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        alert("Form submitted successfully!");
        resetForm();
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="first_name" >First Name</label>
                            <Field
                                id="first_name"
                                name="first_name"
                                type="text"
                            />
                            <ErrorMessage name="first_name" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="last_name" >Last Name</label>
                            <Field
                                id="last_name"
                                name="last_name"
                                type="text"
                            />
                            <ErrorMessage name="last_name" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="email" >Email</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                            />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default App;