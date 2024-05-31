import React, { useState } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleFill } from 'react-icons/ri'
import {db} from "../config/firebase";
import { deleteDoc, doc } from 'firebase/firestore';
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';

const ContactCard = ({contact}) => {
  const [contacts, setContacts] = useState([]);
  // const [isOpen,setOpen]=useState(false);
  const {isOpen,onClose,onOpen}=useDisclouse();


  // react modal chakra ui
  
  // const onOpen=()=>{
  //   setOpen(true);
  // }

  // const onClose=()=>{
  //   setOpen(false);
  // }

  const deleteContact= async(id)=>{
    try{
      await deleteDoc(doc(db,'contacts',id))
      toast.success("Contact deleted successully")
    }catch(error){
      console.log(error)

    }
  }
  return (
        <div key={contact.id} className=" items-center bg-yellow flex justify-between rounded-lg">
          <div className="flex gap-1 p-2">
            <HiOutlineUserCircle className="text-orange text-4xl" />
            <div className=" ">
              <h2 className=" font-medium">{contact.name}</h2>
              <p className="text-sm">{contact.email}</p>
            </div>
          </div>
          <div className="flex text-3xl">
            <RiEditCircleFill onClick={onOpen} className='cursor-pointer' />
            <IoMdTrash onClick={()=>deleteContact(contact.id)} className="text-orange cursor-pointer"/>
          </div>
          <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
        </div>
        

  )
}

export default ContactCard
