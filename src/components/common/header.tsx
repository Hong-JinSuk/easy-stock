import useModal from '@/hooks/useModal';
import { languageATom, sidebarAtom } from '@/store/atom';
import { languageData } from '@/store/language';
import { sidebarMenus } from '@/store/sidebar';
import { useAtom } from 'jotai';
import { Bell, Menu, Search } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { MouseEvent, useState } from 'react';
import { SelectLanguage } from '../ui/select-language';
import AvatarDropdown from './avatar-dropdown';
import HeaderNavigationMenu from './header-navigation-menu';

const langData = languageData;
const Menus = sidebarMenus;

export default function Header() {
  const [sidebar, setSidebar] = useAtom(sidebarAtom);
  const [language, setLanguage] = useAtom(languageATom);
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedMenus, setSelectedMenus] = useState<string>('Finance');
  const navigate = useRouter();
  const { data: session } = useSession();
  const { openLoginModal } = useModal();

  const onClickSidebarMenu = () => {
    setSidebar((prev) => !prev);
  };

  const onClickMenu = (menu: MouseEvent<HTMLSpanElement>) => {
    const target = menu.currentTarget as HTMLSpanElement;
    setSelectedMenus(target.innerText);
  };

  const navigation = (path: string) => {
    navigate.push(`${path}`);
  };

  const onClickLogin = async (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    openLoginModal('');
  };

  return (
    <header
      className={`w-full flex flex-col items-center justify-center 2xl:mx-auto sticky top-0 bg-background min-h-[75px] max-h-[75px] border-b-2 border-blue-900 z-40 ${
        sidebarMenus.find(
          (menu) =>
            menu.children &&
            (selectedMenus === menu.menuNm_KO ||
              selectedMenus === menu.menuNm_ENG)
        ) && 'lg:max-h-[120px] lg:min-h-[120px]'
      }`}
    >
      <div className="w-full max-w-screen-2xl flex items-center justify-between px-4 gap-4 min-h-[75px] max-h-[75px]">
        <div className="flex items-center justify-center gap-2">
          <Menu
            className="cursor-pointer hover:bg-accent hover:bg-green-100 rounded-lg p-1.5 size-8 lg:hidden"
            onClick={onClickSidebarMenu}
          />
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => navigation('/')}
          >
            <span className="mobile-hidden font-bold text-blue-600">
              Ea~~sy
            </span>
            <span className="mobile-hidden font-bold">Stock!</span>
          </div>
        </div>
        <div className="flex flex-grow items-center justify-center border-2 rounded-xl group px-2 h-10">
          <input
            className="w-full h-9 px-2 truncate border-none focus:outline-none"
            value={searchValue}
            placeholder="Search your future"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Search />
        </div>
        {/* header menu */}
        {/* todo : Link to menu */}
        {Menus.map((menu, index) => (
          <section
            className="hidden items-center justify-center lg:flex"
            key={`header-${index}`}
          >
            <span
              className={`hover:text-green-700 cursor-pointer font-bold text-sm ${
                (selectedMenus === menu['menuNm_ENG'] ||
                  selectedMenus === menu['menuNm_KO']) &&
                'text-green-700'
              }`}
              onClick={(e) => {
                onClickMenu(e);
                navigation(menu.link);
              }}
            >{`${menu[`menuNm_${language}` as keyof typeof menu]}`}</span>
          </section>
        ))}
        <div className="flex items-center justify-center gap-2">
          <div className="flex flex-col items-center gap-3">
            <SelectLanguage
              data={langData}
              setLanguage={setLanguage}
              language={language}
            />
          </div>
          <Bell className="cursor-pointer hover:bg-accent hover:bg-green-100 rounded-lg p-1.5 size-8 md:size-9 xl:size-10" />
          {session ? (
            <AvatarDropdown />
          ) : (
            <div onClick={(e: MouseEvent<HTMLDivElement>) => onClickLogin(e)}>
              login
            </div>
          )}
          <AvatarDropdown />
        </div>
      </div>
      {/* subheader */}
      {Menus.map((menu, index) => (
        <React.Fragment key={index}>
          {menu.children && (
            <section
              className={`hidden w-full flex-grow items-center justify-center bg-slate-200 2xl:mx-auto  ${
                selectedMenus === menu.menuNm_ENG ||
                selectedMenus === menu.menuNm_KO
                  ? 'lg:flex min-h-[45px] max-h-[45px] border-b border-blue-900'
                  : `hidden`
              }`}
              key={`subheader-${index}`}
            >
              <div className="w-full h-full max-w-screen-2xl flex items-center justify-between px-4 gap-4">
                <HeaderNavigationMenu
                  menus={menu.children}
                  language={language}
                />
              </div>
            </section>
          )}
        </React.Fragment>
      ))}
    </header>
  );
}
