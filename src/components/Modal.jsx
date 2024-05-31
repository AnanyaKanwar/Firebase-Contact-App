import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { DiVim } from 'react-icons/di'

const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>
    {isOpen && 
    (
    <>
      <div className=' m-auto z-50 relative p-4 min-h-[200px] max-w-[370px] bg-white'>

      <div className='flex justify-end'>
        <AiOutlineClose onClick={onClose} className='text-2xl '/>

      </div>
      {children}
    </div> 
    < div onClick={onClose}  className=' absolute top-0 z-40 h-screen w-screen backdrop-blur'/>
    </>
    )}
    {/* This is a conditional rendering statement. It checks if isOpen is true. If it is, it renders a <div> element containing the text "Modal". If isOpen is false, nothing is rendered. */}
    

    
    </>
  ,document.getElementById("modal-root"))
};

export default Modal
