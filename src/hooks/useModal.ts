import { modalAtom } from '@/store/atom';
import { Modal } from '@/types/types';
import { useSetAtom } from 'jotai';

export default function useModal() {
  const setModal = useSetAtom(modalAtom);

  const openLoginModal = (data?: Modal['data']) => {
    setModal({
      isOpen: true,
      type: 'login',
      data,
    });
  };

  const openLogoutModal = (data: Modal['data']) => {
    setModal({
      isOpen: true,
      type: 'logout',
      data,
    });
  };

  return {
    openLoginModal,
    openLogoutModal,
  };
}
