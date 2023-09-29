import { useState } from 'react';

function useNotification() {
  // Initialize the isOpen state with false (modal is closed by default)
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const handleOpen = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setIsOpen(false);
  };

  return [
    isOpen,handleOpen,handleClose,
  ];
}

export default useNotification;
