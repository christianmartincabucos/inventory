import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@radix-ui/react-icons'
const SubMenu = ({ link, isOpen, toggleOpen }) => {
  return (
    <div>
      <Link
        href={link.href}
        className="flex items-center gap-3 rounded p-3 text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 aria-[current=page]:bg-emerald-50 aria-[current=page]:text-emerald-500"
        onClick={(e) => {
          if (link.submenu) {
            e.preventDefault();
            toggleOpen(link.href);
          }
        }}
      >
        <div className="flex items-center self-center">
          <span>{link.icon}</span>
        </div>
        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
          {link.label}
        </div>
        {link.submenu && <span><ChevronDownIcon/></span>}
      </Link>
      {isOpen && link.submenu && (
        <div className="ml-6 mt-2 space-y-2">
          {link.submenu.map((sublink) => (
            <Link
              key={sublink.href}
              href={sublink.href}
              className="flex items-center gap-3 rounded p-2 text-slate-600 transition-colors hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-100"
            >
              <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-sm">
                {sublink.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
