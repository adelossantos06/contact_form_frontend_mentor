import React from "react";
import { Formik } from "formik";


function App() {
    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        query_type: "",
        message: "",
    }


    return (
        <div>
            <h1>Contact Us</h1>
            <Formik
                initialValues={initialValues}
            >
                {() => (
                    <div>
                        <label>First Name:</label>
                        <Field type="text" id="name" first_name="first_name" />
                    </div>
                )}
            </Formik>
        </div>
    );
}
export default App;