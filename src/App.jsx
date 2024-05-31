import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleFill } from "react-icons/ri";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";

const App = () => {

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

  // network call- useeffect
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // console.log(contactLists);

          
          setContacts(contactLists);
          

          return contactLists;
          


        });
        // console.log(contactSnapshot)
        // const contactLists=contactSnapshot.docs.map((doc)=>doc.data());
        // console.log(contactLists)

        

        // const contactlost=
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };
  
  

  return (
    <>
    <div className=" max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="w-full flex flex-grow gap-2">
        <div className="w-full flex relative items-center">
          <FiSearch className=" ml-1 absolute text-white text-3xl " />

          <input
          onChange={filterContacts}
            type="text"
            className=" w-full bg-transparent border text-white pl-9 border-white rounded h-10"
          />
        </div>

        <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white gap-2 cursor-pointer" />
      </div>

      <div className="mt-4 gap-3 flex flex-col">
        { contacts.length<=0? (<NotFoundContact/> ): contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact}/>
          

        ))}
      </div>

      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
       <ToastContainer position="bottom-center"/>
        </>
    
  );
};

export default App;
