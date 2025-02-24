import { modalAtom } from '@/store/atom';
import { useAtom } from 'jotai';
import LoginModal from './login-modal';

export default function ModalProvider() {
  const [{ isOpen, type, data }, setModal] = useAtom(modalAtom);

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
    setTimeout(() => {
      setModal((prev) => ({
        ...prev,
        data: null,
      }));
    }, 300);
  };

  return (
    <>
      <LoginModal
        isOpen={isOpen && type === 'login'}
        data={data}
        onClose={closeModal}
      />
    </>
  );
}
