import { ModalProps } from '@/types/types';

export default function LoginModal({ isOpen, data, onClose }: ModalProps) {
  if (!isOpen) return null;
  return (
    <>
      <div>login modal</div>
    </>
  );
}
