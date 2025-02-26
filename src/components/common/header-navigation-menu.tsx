import { SidebarMenu } from '@/types/types';
import { useMemo, useState } from 'react';

type Props = {
  menus: SidebarMenu[];
  language: string;
  rowSize?: Number;
};

export default function HeaderNavigationMenu({
  menus,
  language,
  rowSize = 10,
}: Props) {
  const [selectedMenu, setMenu] = useState<string | null>(null);

  const colSize = useMemo(() => {
    const cols = menus
      .filter(
        (menu) =>
          `${menu[`menuNm_${language}` as keyof typeof menu]}` === selectedMenu
      )
      .map((menu) => menu.children?.length || 0);

    return cols.length > 0 ? Math.ceil(cols[0] / +rowSize) : 1;
  }, [selectedMenu, menus]);

  const onHandleMenu = (menu: React.MouseEvent<HTMLSpanElement> | null) => {
    const target = menu!.currentTarget as HTMLSpanElement;
    setMenu(target.innerText);
  };

  return (
    <div className="h-9 flex items-center justify-between space-x-6 border">
      {menus.map((menu, index) => (
        <div
          className="relative flex flex-col group hover:bg-green-100 rounded-lg p-1 px-3"
          key={`header-navigation-${index}`}
        >
          {/* trigger */}
          <div
            className="cursor-pointer"
            key={`${menu.menuNm_ENG}-${index}`}
            onMouseEnter={(e) => onHandleMenu(e)}
          >
            <span className="font-bold text-sm">{`${
              menu[`menuNm_${language}` as keyof typeof menu]
            }`}</span>
          </div>
          <div className="top-full h-4 w-full left-0 absolute hidden group-hover:block"></div>
          {/* content */}
          {menu.children && menu.children?.length > 0 && (
            <div
              className={`w-full max-h-[460px] group-hover:grid grid-cols-${colSize} grid-flow-col gap-2 p-2 absolute top-11 left-0 hidden shadow-md rounded-md`}
              style={{
                minWidth: `${+colSize * 160}px`,
                maxWidth: `${+colSize * 160}px`,
                gridTemplateRows: `repeat(${Math.min(
                  10,
                  menu.children.length
                )}, minmax(0,1fr))`,
              }}
            >
              {menu.children?.map((child, index_) => (
                <div
                  className="p-1 px-2 flex items-center hover:bg-green-100 rounded-lg max-w-36 min-w-36 h-8 cursor-pointer"
                  key={`index_-${index_}`}
                >
                  <span className="truncate text-sm font-bold">{`${
                    child[`menuNm_${language}` as keyof typeof child]
                  }`}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
