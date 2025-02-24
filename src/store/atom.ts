import { Modal, UserInfo } from '@/types/types';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const modalAtom = atom<Modal>({
  isOpen: false,
  type: null,
  data: null,
});

export const INITIAL_USER = {
  userId: '',
  userNm: '',
  emailAddr: null,
  orgId: '',
  orgNm: '',
  userGroups: [''],
  accountNonExpired: false,
  accountNonLocked: false,
  credentialsNonExpired: false,
  accountEnabled: false,
  loginFailCnt: 0,
  userGrpId: [''],
};

export const userAtom = atom<UserInfo>(INITIAL_USER);

const getInitSidebarState = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('sidebar');
    return value ? JSON.parse(value) : true;
  }
  return true;
};

export const sidebarAtom = atomWithStorage<boolean>(
  'sidebar',
  getInitSidebarState()
);

// const getInitThemeState = () => {
//   if (typeof window !== 'undefined') {
//     const storedValue = localStorage.getItem('theme');
//     return storedValue ? JSON.parse(storedValue) : 'light';
//   }
//   return 'dark';
// };

export const themeAtom = atomWithStorage<'light' | 'dark' | 'system'>(
  'theme',
  'system'
);
