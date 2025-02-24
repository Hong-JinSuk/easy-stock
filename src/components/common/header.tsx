import { sidebarAtom } from '@/store/atom';
import { sidebarMenus } from '@/store/sidebar';
import { useAtom } from 'jotai';
import { Bell, Menu, Search } from 'lucide-react';
import { useState } from 'react';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import AvatarDropdown from './avatar-dropdown';

export default function Header() {
  const [sidebar, setSidebar] = useAtom(sidebarAtom);
  const [searchValue, setSearchValue] = useState<string>('');

  const onClickSidebarMenu = () => {
    setSidebar((prev) => !prev);
  };

  const Menus = sidebarMenus;

  return (
    <header className="w-full flex items-center justify-center 2xl:mx-auto h-[75px] lg:h-[135px] sticky top-0 bg-background border-b-2 border-blue-900">
      <div className="w-full max-w-screen-2xl flex justify-between px-4 gap-4">
        <div className="flex items-center justify-center gap-2">
          <Menu
            className="cursor-pointer hover:bg-accent hover:bg-green-100 rounded-lg p-1.5 size-8"
            onClick={onClickSidebarMenu}
          />
          <span className="font-bold text-blue-600">Ea~~sy</span>
          <span className="font-bold">Stock!</span>
        </div>
        <div className="flex flex-grow items-center justify-center border-2 rounded-xl group px-2">
          <input
            className="w-full h-9 px-2 truncate border-none focus:outline-none"
            value={searchValue}
            placeholder="Search your future"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <Search />
        </div>
        {Menus.map((menu) => (
          <div className="hidden items-center justify-center lg:flex">
            {menu.menuNm_ENG}
          </div>
        ))}
        <div className="flex items-center justify-center gap-2 w- bg-slate-300">
          <div className="flex flex-col items-center gap-3">
            <Label htmlFor="airplane-mode">한/Eng</Label>
            <Switch id="airplane-mode" />
          </div>
          <Bell className="cursor-pointer hover:bg-accent hover:bg-green-100 rounded-lg p-1.5 size-8" />
          <AvatarDropdown />
        </div>
      </div>
    </header>
  );
}
