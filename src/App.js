import React from "react";
import { Formik, Field, Form } from "formik";


function App() {



    return (
        <div>
            <h1>Contact Us</h1>
            <Formik
                initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    query_type: "",
                    message: "",
                }}
                onSubmit={(values) => {
                    console.log("form submitted")
                }}
            >
                <Form>
                    <label>First Name</label>
                    <Field type="text" ></Field>
                </Form>
            </Formik>

        </div>
    );
}
export default App;