import React from 'react';
import { cn } from '../../utils/cn';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className={cn('fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50')}
         onClick={onClose}>
      <div className="bg-white rounded p-6 shadow-lg" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
