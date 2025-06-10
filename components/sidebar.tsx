import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

/* icons */
import { FaChartSimple } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { UserQuestsSidebar } from "./user-quests-sidebar";
import Image from "next/image";
import { AccountProgressSidebar } from "./account-progress-sidebar";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    /* lg:w-[256px] */
    <div
      className={cn(
        "flex flex-col bg-surfacegreen1 h-full lg:w-[356px] lg:fixed left-0 top-0 px-4 border-r-2 gap-4",
        className
      )}
    >
      <Link href={"/learn"}>
        <div className="pt-8 pl-4 flex items-center gap-x-3">
          <Image
            src={"/coursingov2_logo.png"}
            alt="Coursingo"
            width={150}
            height={48}
          />
        </div>
      </Link>
      <AccountProgressSidebar />
      {/* Sidebar links */}
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="Learn"
          href="/learn"
          icon={<FaBook size={"32"} />}
        />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          icon={<FaChartSimple size={"32"} />}
        />
        <SidebarItem
          label="Quests"
          href="/quests"
          icon={<BiTask size={"32"} />}
        />
        <SidebarItem
          label="Shop"
          href="/shop"
          icon={<FaCartShopping size={"32"} />}
        />
      </div>
      <UserQuestsSidebar />
      {/* Clerk profile */}
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
