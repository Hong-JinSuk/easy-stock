'use client';
import useModal from '@/hooks/useModal';
import useToast from '@/hooks/useToast';
import { cn } from '@/lib/utils';
import { userAtom } from '@/store/atom';
import { useSetAtom } from 'jotai';
import {
  BookCheck,
  Keyboard,
  List,
  Lock,
  LogOut,
  LucideMessageCircleQuestion,
  ShieldCheck,
  SquareMenu,
  Star,
  User,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Fragment, JSX } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type Menu = {
  icon: JSX.Element;
  label: string;
  value: string;
  subMenus?: {
    icon: JSX.Element;
    label: string;
    value: string;
  }[];
  shortcut?: string;
  isDisabled?: boolean;
}[];

const ICON_CLASS = 'mr-1 size-4';

const getMenus = (isMac: boolean): Menu[] => [
  [
    {
      icon: <User className={ICON_CLASS} />,
      label: '프로필',
      value: 'profile',
      shortcut: isMac ? '⇧⌘P' : 'Ctrl+Shift+P',
    },
    {
      icon: <Keyboard className={ICON_CLASS} />,
      label: '단축키',
      value: 'hotkeys',
      shortcut: isMac ? '⌘K' : 'Ctrl+K',
    },
  ],
  [
    {
      icon: <SquareMenu className={ICON_CLASS} />,
      label: '마이 메뉴',
      value: 'myMenu',
      subMenus: [
        {
          icon: (
            <Star className={cn(ICON_CLASS, 'text-[#FEC802] fill-[#FEC802]')} />
          ),
          label: '즐겨찾기',
          value: 'bookmarks',
        },
        {
          icon: <BookCheck className={ICON_CLASS} />,
          label: '나의 분석과제',
          value: 'analysis-tasks',
        },
        {
          icon: <List className={ICON_CLASS} />,
          label: '최근조회 정형분석',
          value: 'latest-analysis',
        },
        {
          icon: <List className={ICON_CLASS} />,
          label: '최근조회 데이터셋',
          value: 'latest-dataset',
        },
      ],
    },
    {
      icon: <Lock className={ICON_CLASS} />,
      label: '비밀번호 변경',
      value: 'changePassword',
    },
    {
      icon: <ShieldCheck className={ICON_CLASS} />,
      label: '관리자 페이지',
      value: 'admin',
    },
  ],
  [
    {
      icon: <LucideMessageCircleQuestion className={ICON_CLASS} />,
      label: '도움말',
      value: 'support',
    },
    {
      icon: <LogOut className={ICON_CLASS} />,
      label: '로그아웃',
      value: 'logout',
    },
  ],
];

type Props = {
  align?: 'start' | 'center' | 'end';
};

export default function AvatarDropdown({ align = 'end' }: Props) {
  const { openLogoutModal } = useModal();
  const { toast } = useToast();
  const navigate = useRouter();
  const setUser = useSetAtom(userAtom);

  const menus = getMenus(false);

  const handleOnClick = (value: string) => {
    switch (value) {
      case 'profile':
        // openProfileModal();
        break;
      case 'hotkeys':
        // openHotkeysModal();
        break;
      case 'changePassword':
        // openChangePasswordModal();
        break;
      case 'logout':
        openLogoutModal({});
        break;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-56">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {menus.map((group, idx) => (
          <DropdownMenuGroup key={group[0].label}>
            {group.map(
              ({ icon, label, value, shortcut, isDisabled, subMenus }) => (
                <Fragment key={value}>
                  {subMenus ? (
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        {icon}
                        <span className="ml-2">{label}</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {subMenus.map(({ icon, label, value }) => (
                            <DropdownMenuItem
                              key={value}
                              onClick={() => {
                                console.log(value);
                                handleOnClick(value);
                              }}
                            >
                              {icon}
                              <span>{label}</span>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ) : (
                    <DropdownMenuItem
                      disabled={isDisabled}
                      onClick={() => {
                        console.log(value);
                        handleOnClick(value);
                      }}
                    >
                      {icon}
                      <span>{label}</span>
                      <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  )}
                </Fragment>
              )
            )}
            {(idx === 0 || idx === 1) && <DropdownMenuSeparator />}
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
