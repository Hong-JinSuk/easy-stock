'use client';
import { languageATom } from '@/store/atom';
import { LanguageType, SidebarMenu } from '@/types/types';
import { useAtom } from 'jotai';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  menuList: SidebarMenu[];
  className?: string;
};

export default function TriAccordion({ menuList, className }: Props) {
  const [language, setLanguage] = useAtom(languageATom);

  return (
    <section className="w-full flex flex-col">
      {menuList.map((menu, index) => (
        <div className="mx-2 border-b" key={index}>
          {menu.children ? (
            <Item
              menu={menu}
              type="multiple"
              language={language}
              key={`multiple-${menu.menuNm_ENG}-${index}`}
              className={className}
            />
          ) : (
            <Item
              menu={menu}
              type="single"
              language={language}
              key={`single-${menu.menuNm_ENG}-${index}`}
              className={className}
            />
          )}
        </div>
      ))}
    </section>
  );
}

function Item({
  type,
  menu,
  language,
  className,
}: {
  type: 'single' | 'multiple'; // chilren ? 'multiple' : 'single'
  menu: SidebarMenu;
  language: LanguageType;
  className?: string;
}) {
  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRotaion = () => {
    setIsOpen(!isOpen);
  };

  const navigation = (path: string) => {
    navigate.push(`${path}`);
  };

  return (
    <div className={`flex flex-col py-1`}>
      {type === 'multiple' ? (
        <div className="w-full flex flex-1 flex-col">
          <div className="flex items-center justify-between">
            <div
              className={`text-lg font-bold cursor-pointer rounded-sm hover:underline hover:bg-green-100 flex-grow p-2 ${className}`}
              onClick={() => navigation(menu.link)}
            >{`${menu[`menuNm_${language}`]}`}</div>
            <ChevronDown
              className={`${
                isOpen && 'rotate-180 bg-accent'
              } size-10 p-2 cursor-pointer hover:bg-accent rounded-full transition-all duration-500`}
              onClick={toggleRotaion}
            />
          </div>
          {menu.children?.map((child, index) => (
            <div
              className={`ml-2 overflow-hidden ease-in-out transition-all duration-500 ${
                isOpen ? 'h-fit' : 'max-h-0 opacity-0'
              }`}
              key={index}
            >
              {child.children ? (
                <Item
                  menu={child}
                  type="multiple"
                  language={language}
                  key={`multiple-${child.menuNm_ENG}-${index}`}
                  className="text-sm font-semibold opacity-50"
                />
              ) : (
                <Item
                  menu={child}
                  type="single"
                  language={language}
                  key={`single-${child.menuNm_ENG}-${index}`}
                  className="text-sm font-semibold opacity-50"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div
          className={`w-full flex flex-1 items-center p-2 text-lg font-bold rounded-sm hover:underline hover:bg-green-100 ${className}`}
          onClick={() => navigation(menu.link)}
        >{`${menu[`menuNm_${language}`]}`}</div>
      )}
    </div>
  );
}
