import { BackScreen, CloseButton, ModalContent, ModalWrapper } from './styles';
import { useEffect } from 'react';

const Close = ({handleClick}) => {
  return (
    <CloseButton onClick={() => handleClick()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#dabbc9"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </CloseButton>
  );
};

const Modal = ({
  isOpen,
  handleClose,
  children,
  align = 'center',
}) => {
  useEffect(() => {
    if (isOpen) {
      addEventListener('keyup', function (e) {
        if (e.keyCode === 27) {
          return handleClose();
        }
      });

      const outsideDiv = document.getElementById('outside');
      outsideDiv &&
        outsideDiv.addEventListener('click', function (e) {
          e.stopPropagation();
          return handleClose();
        });
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <ModalWrapper align={align}>
        <BackScreen id="outside" />
        <ModalContent>
          {handleClose && <Close handleClick={handleClose} />}
          {children}
        </ModalContent>
      </ModalWrapper>
    );
  } else {
    return null;
  }
};

export default Modal;
