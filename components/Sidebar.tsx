"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiBox, BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import Box from "./Box";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathName = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-2 bg-black h-full w-[300px] p-2">
        <Box>Sidebar Navigation</Box>
      </div>
    </div>
  );
};

export default Sidebar;
