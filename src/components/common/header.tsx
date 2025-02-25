import { languageATom, sidebarAtom } from '@/store/atom';
import { languageData } from '@/store/language';
import { sidebarMenus } from '@/store/sidebar';
import { useAtom } from 'jotai';
import { Bell, Menu, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SelectLanguage } from '../ui/select-language';
import AvatarDropdown from './avatar-dropdown';

export default function Header() {
  const [sidebar, setSidebar] = useAtom(sidebarAtom);
  const [language, setLanguage] = useAtom(languageATom);
  const [searchValue, setSearchValue] = useState<string>('');
  const langData = languageData;

  useEffect(() => {
    console.log(language);
  }, [language]);

  const onClickSidebarMenu = () => {
    setSidebar((prev) => !prev);
  };

  const Menus = sidebarMenus;

  return (
    <header className="w-full flex flex-col items-center justify-center 2xl:mx-auto md:min-h-[75px] lg:max-h-[135px] sticky top-0 bg-background border-b-2 border-blue-900">
      <div className="w-full max-w-screen-2xl flex items-center justify-between px-4 gap-4 min-h-[65px] max-h-[75px]">
        <div className="flex items-center justify-center gap-2">
          <Menu
            className="cursor-pointer hover:bg-accent hover:bg-green-100 rounded-lg p-1.5 size-8"
            onClick={onClickSidebarMenu}
          />
          <span className="mobile-hidden font-bold text-blue-600">Ea~~sy</span>
          <span className="mobile-hidden font-bold">Stock!</span>
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
        {Menus.map((menu, index) => (
          <div
            className="hidden items-center justify-center lg:flex"
            key={index}
          >
            {`${menu[`menuNm_${language}` as keyof typeof menu]}`}
          </div>
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
          <AvatarDropdown />
        </div>
      </div>
      <div className="w-full md:h-[70px] bg-slate-200">dsiofjoi</div>
    </header>
  );
}
