import React from 'react'
import { useState } from 'react';

const useDisclouse = () => {
  const [isOpen,setOpen]=useState(false);

  // react modal chakra ui
  const onOpen=()=>{
    setOpen(true);
  }

  const onClose=()=>{
    setOpen(false);
  }

  return {onClose,onOpen,isOpen};
    
};


export default useDisclouse
   