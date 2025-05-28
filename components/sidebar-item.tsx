"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  label: string;
  icon: React.ReactNode;
  href: string;
};

export const SidebarItem = ({ label, icon, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? "sidebar_selected" : "sidebar"}
      className="justify-start h-[52px] "
      asChild
    >
      <Link href={href}>
        <span className="mr-5">{icon}</span>
        {label}
      </Link>
    </Button>
  );
};
