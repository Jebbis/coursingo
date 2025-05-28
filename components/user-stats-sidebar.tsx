"use client";

import { LuAward } from "react-icons/lu";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export const UserStatsSidebar = () => {
  return (
    <div className="bg-surfacegreen2 rounded-xl flex flex-col gap-2">
      <div className=" flex flex-col p-3 gap-4">
        <div className="flex flex-row items-center gap-2 ">
          <LuAward size={20} />
          <p className="font-bold">Your quest progress</p>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-xs pl-0.5">2/10 daily quests</p>
          <Progress value={20} color="#27a156" className="w-full" />
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-xs pl-0.5 ">8/20 Monthly quests</p>
          <Progress value={40} color="#27a156" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center hover:bg-surfacegreen3/90 hover:rounded-b-xl border-t border-surfacegreen3/90 p-2 hover:text-selected">
        <Link href="/learn" className="font-bold w-full h-full text-center">
          View
        </Link>
      </div>
    </div>
  );
};
