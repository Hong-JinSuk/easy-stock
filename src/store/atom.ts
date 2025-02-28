import { LanguageType, Modal, UserInfo } from '@/types/types';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const modalAtom = atom<Modal>({
  isOpen: false,
  type: null,
  data: null,
});

export const INITIAL_USER: UserInfo = {
  userId: '',
  userNm: '',
  password: '',
  emailAddr: null,
  picture: '',
  class: null,
};

export const userAtom = atom<UserInfo>(INITIAL_USER);

export const sidebarAtom = atom<boolean>(false);

export const themeAtom = atomWithStorage<'light' | 'dark' | 'system'>(
  'theme',
  'system'
);

export const languageATom = atomWithStorage<LanguageType>('language', 'KO');
