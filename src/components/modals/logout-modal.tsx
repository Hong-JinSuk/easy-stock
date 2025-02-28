import { languageATom } from '@/store/atom';
import { ModalProps } from '@/types/types';
import { useAtomValue } from 'jotai';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog';

const text = {
  title_KO: '',
  title_ENG: 'Are you absolutely sure?',
  description_KO: '로그아웃 하시겠습니까?',
  description_ENG: 'Are you sure to logout?',
  cancel_KO: '취소',
  cancel_ENG: 'Cancel',
  action_KO: '로그아웃',
  action_ENG: 'Logout',
};

export default function LogoutModal({ isOpen, data, onClose }: ModalProps) {
  if (!isOpen) return null;

  const language = useAtomValue(languageATom);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{`${
            text[`title_${language}` as keyof typeof text]
          }`}</AlertDialogTitle>
          <AlertDialogDescription>
            {`${text[`description_${language}` as keyof typeof text]}`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>
            {`${text[`cancel_${language}` as keyof typeof text]}`}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onClose}>
            {`${text[`action_${language}` as keyof typeof text]}`}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
