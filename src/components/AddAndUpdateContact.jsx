import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from"yup";

const contactSchemeValidation=Yup.object().shape({
  name:Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),

})

const AddAndUpdateContact = ({ isOpen, onClose , isUpdate ,contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose()
      toast.success("Contact added successully")

    } catch (error) {
      console.log(error);
    }
  };


  const UpdateContact = async (contact,id) => {
    try {
      const contactRef = doc(db, "contacts",id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact updated successully")

    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactSchemeValidation}
          initialValues={isUpdate
            ?
            {
              name: contact.name,
              email: contact.email,
            }
            :{
            name: "",
            email: "",
          }
        }
          onSubmit={(values) => {
            console.log(values);
            isUpdate? UpdateContact(values,contact.id): addContact(values);
          }}
        >
          <Form className=" flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="border h-10"></Field>
              <div className="text-red-500 text-xs">
                <ErrorMessage name="name"/>
  
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="border h-10"></Field>
              <div className="text-red-500 text-xs">
                <ErrorMessage name="email"/>
  
              </div>
            </div>
            <button className=" self-end bg-orange px-3 py-1.5 border">
              {isUpdate ? "Update ":"Add "}Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
