"use client";

import { Formik, Form, FormikProps, Field } from "formik";
import { SnackbarProvider } from "notistack";
import Notification from "@/components/notification";

import { ILogin } from "@/interface/user.interface";
import { logInSchema } from "../schema";

import { loginService } from "@/service/auth.service";

export default function LogInForm() {
    return(
        <>
        <SnackbarProvider/>
        <Formik     
        initialValues={{
            email:"",
            password:""
        }}
        validationSchema={logInSchema}
        onSubmit={async (values)=> {
            try{
                await loginService(values);
                Notification("Login Success", "success");
            }catch(err){
                const error=err as any;
                Notification(error.message, "error");
            }
        }}
        >
        {(props:FormikProps<ILogin>)=>{
            const {errors, touched} = props;
            return(
                <Form>
                    <div>
                        <label>Email :</label>
                        <Field type="email" name="email"/>
                    {touched.email && errors.email ?(
                        <div className="text-red-500">{errors.email}</div>
                    ) :null}
                    </div>
                    <div>
                        <label>Password :</label>
                        <Field type="text" name="password"/>
                    {touched.password && errors.password ?(
                        <div className="text-red-500">{errors.password}</div>
                    ) :null}
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            );
        }}
        </Formik>
        </>
    );
    
}