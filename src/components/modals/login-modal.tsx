import GithubImage from '@/assets/github.svg';
import GoogleImage from '@/assets/google.svg';
import KakaoImage from '@/assets/kakao.svg';
import NaverImage from '@/assets/naver.svg';
import { languageATom } from '@/store/atom';
import { ModalProps } from '@/types/types';
import { useAtomValue } from 'jotai';
import { X } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { MouseEvent } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const modalText = {
  title_KO: '회원 가입',
  title_ENG: 'Create an account',
  description_KO: '회원 가입을 원하시면 아래 항목을 작성해주세요.',
  description_ENG: 'Introduce your information to sign up',
  action_KO: '회원 가입',
  action_ENG: 'Create account',
};

const inputText = {
  userId_KO: '아이디를 입력해주세요.',
  userId_ENG: 'Please enter your ID.',
  validId_KO: '이미 사용중인 아이디입니다.',
  validId_ENG: 'This ID is already in use.',
  userNm_KO: '사용하실 닉네임을 입력해주세요.',
  userNm_ENG: 'Please enter a nickname.',
  validNm_KO: '이미 사용중인 닉네임입니다.',
  validNm_ENG: 'This nickname is already in use.',
  password_KO: '비밀번호를 입력해주세요.',
  password_ENG: 'Please enter your password.',
  passwordRe_KO: '다시 비밀번호를 입력해주세요.',
  passwordRe_ENG: 'Please enter your password again.',
  validPw_KO: '비밀번호가 일치하지 않습니다.',
  validPw_ENG: 'Passwords do not match.',
  emailAddr_KO: '이메일을 입력해주세요.',
  emailAddr_ENG: 'Please enter your email.',
  emailValidBtn_KO: '인증번호 전송',
  emailValidBtn_ENG: 'Send auth number',
  emailValid_KO: '인증번호를 입력해주세요',
  emailValid_ENG: 'Please enter your auth number ',
  validEm_KO: '이메일 인증을 실패하셨습니다.',
  validEm_ENG: 'Email verification failed.',
};

// todo : email 인증 백엔드랑 연동해야함. + disabled 조건 활성화

export default function LoginModal({ isOpen, data, onClose }: ModalProps) {
  if (!isOpen) return null;

  const language = useAtomValue(languageATom);
  const { data: session } = useSession();

  const onClickLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (session) {
      console.log('이미 로그인');
      return null;
    } else {
      await signIn();
    }
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="w-full h-full flex flex-col justify-between items-center md:h-[730px]">
        <AlertDialogHeader className="w-full flex justify-start text-left">
          <AlertDialogTitle className="flex justify-between">
            <span className="font-bold text-2xl">
              {`${modalText[`title_${language}` as keyof typeof modalText]}`}{' '}
            </span>
            <X
              onClick={onClose}
              className="p-1 size-8 hover:bg-accent rounded-lg cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            <span className="font-semibold text-base">
              {`${
                modalText[`description_${language}` as keyof typeof modalText]
              }`}
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="w-full flex flex-col grow pt-4">
          <div className="w-full flex justify-center space-x-10">
            <Button
              variant={'outline'}
              className="py-6 px-4"
              size={'sm'}
              onClick={(e: MouseEvent<HTMLButtonElement>) => onClickLogin(e)}
            >
              <Image src={GoogleImage} alt="" width={31} />
            </Button>
            <Button variant={'outline'} className="py-6" size={'sm'}>
              <Image src={NaverImage} alt="" width={40} />
            </Button>
            <Button variant={'outline'} className="py-6" size={'sm'}>
              <Image src={KakaoImage} alt="" width={40} />
            </Button>
            <Button variant={'outline'} className="py-6" size={'sm'}>
              <Image src={GithubImage} alt="" width={40} />
            </Button>
          </div>
          <div className="flex items-center my-4">
            {/* <Separator className="flex-grow" /> */}
            <div className="flex w-full items-center text-center my-4">
              <div className="w-full border-2 border-slate-200"></div>
              <span className="mx-2 font-semibold text-sm text-slate-400">
                {' '}
                OR{' '}
              </span>
              <div className="w-full border-2 border-slate-200"></div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            {/* ID */}
            <div className="flex flex-col gap-1">
              <Input placeholder={`${inputText[`userId_${language}`]}`} />
              <span className="text-red-400 ml-1">{`${
                inputText[`validId_${language}`]
              }`}</span>
            </div>
            {/* Name */}
            <div className="flex flex-col gap-1">
              <Input placeholder={`${inputText[`userNm_${language}`]}`} />
              <span className="text-red-400 ml-1">{`${
                inputText[`validNm_${language}`]
              }`}</span>
            </div>
            {/* Password */}
            <div className="flex flex-col gap-1">
              <Input placeholder={`${inputText[`password_${language}`]}`} />
            </div>
            <div className="flex flex-col gap-1">
              <Input placeholder={`${inputText[`passwordRe_${language}`]}`} />
              <span className="text-red-400 ml-1">{`${
                inputText[`validPw_${language}`]
              }`}</span>
            </div>
            {/* email */}
            <div className="flex flex-col gap-1">
              <div className="flex space-x-4">
                <Input placeholder={`${inputText[`emailAddr_${language}`]}`} />
                <Button size={'sm'}>
                  <span>{`${inputText[`emailValidBtn_${language}`]}`}</span>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Input placeholder={`${inputText[`emailValid_${language}`]}`} />
              <span className="text-red-400 ml-1">{`${
                inputText[`validEm_${language}`]
              }`}</span>
            </div>
          </div>
        </div>
        <AlertDialogFooter className="w-full flex flex-col sm:justify-center bg-sky-200 justify-center">
          <AlertDialogAction
            // disabled={true}
            onClick={(e: MouseEvent<HTMLButtonElement>) => onClickLogin(e)}
            className="w-full"
          >
            {`${modalText[`action_${language}` as keyof typeof modalText]}`}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
