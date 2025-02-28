import { languageATom, sidebarAtom } from '@/store/atom';
import { sidebarMenus } from '@/store/sidebar';
import { useAtom } from 'jotai';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ScrollArea } from '../ui/scroll-area';
import TriAccordion from '../ui/tri-accordion';

const Menus = sidebarMenus;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useAtom(sidebarAtom);
  const [language, setLanguage] = useAtom(languageATom);
  const navigate = useRouter();

  const onClickClose = () => {
    setIsOpen((prev) => !prev);
  };

  const navigation = (path: string) => {
    navigate.push(`${path}`);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed w-full h-full bg-black bg-opacity-70 z-50"
          onClick={onClickClose}
        ></div>
      )}
      <aside
        className={`absolute h-full w-72 flex flex-col bg-background transition-all duration-500 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ScrollArea>
          <div className="w-full h-[75px] px-4 flex items-center justify-between py-4 border-b bg-transparent">
            <div className="flex items-center gap-2">
              <Menu
                className="cursor-pointer hover:bg-accent hover:bg-green-100 rounded-lg p-1.5 size-8"
                onClick={onClickClose}
              />
              <div
                className="mobile-hidden gap-2 cursor-pointer"
                onClick={() => navigation('/')}
              >
                <span className="mobile-hidden font-bold text-blue-600">
                  Ea~~sy
                </span>
                <span className="mobile-hidden font-bold">Stock!</span>
              </div>
            </div>
            <X
              onClick={onClickClose}
              className="hover:bg-accent p-2 size-9 cursor-pointer rounded-xl"
            />
          </div>
          <TriAccordion menuList={Menus} className="font-bold" />
        </ScrollArea>
      </aside>
    </>
  );
}
