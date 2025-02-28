export type Modal = {
  isOpen: boolean;
  type: 'login' | 'logout' | 'subscribe' | null;
  data: {} | any | null;
};

export type ModalProps = {
  isOpen: boolean;
  data?: any;
  onClose: () => void;
};

export type UserInfo = {
  userId: string;
  userNm: string;
  password: string;
  emailAddr: string | null;
  picture: string;
  class: '1' | '2' | '3' | '4' | '5' | null;
};

export type SidebarMenu = {
  menuNm_ENG: string;
  menuNm_KO: string;
  link: string;
  children?: SidebarMenu[];
};

export type Language = {
  label: string;
  value: LanguageType;
  flag: string;
};

export type LanguageType = 'KO' | 'ENG';
