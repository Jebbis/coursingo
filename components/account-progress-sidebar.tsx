import { Progress } from "@/components/ui/progress";
import { IoIosFlame } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

export const AccountProgressSidebar = () => {
  return (
    <div className="relative bg-surfacegreen2 rounded-xl flex flex-col gap-4 p-3 pt-6">
      {/* Account picture and name */}
      <p className="absolute right-4 bg-surfacegreen3 rounded-2xl px-4 py-1 text-sm font-bold text-selected ">
        open
      </p>
      <div className="flex flex-col gap-y-1 items-center">
        <Image src={"/profile-pic.png"} alt="profile" width={64} height={64} />
        <p>Zen Quinn</p>
        <p className="bg-surfacegreen3 rounded-2xl px-4 text-sm font-bold text-selected">
          zenquinn
        </p>
      </div>
      {/* Level */}
      <div className="flex flex-row gap-x-2 items-center">
        <p className="text-sm">Level 6</p>
        <Progress value={40} color="#27a156" className="flex-1" />
      </div>
      {/* Stats */}
      <div className="flex flex-row gap-x-2 ">
        {/* Daily streak */}
        <div className="flex-1 relative bg-surfacegreen3 text-white rounded-2xl p-3 shadow-lg">
          <p className="text-textmain/90 text-sm font-light">Daily streak</p>
          <div className="flex flex-row items-center space-x-1">
            <IoIosFlame className="text-orange-600 text-base" size={23} />
            <p className="text-center mt-0.5">
              <span className="font-extrabold text-lg ">68</span> days
            </p>
          </div>
        </div>
        {/* Experience */}
        <div className="flex-1 relative bg-surfacegreen3 text-white rounded-2xl p-3 shadow-lg ">
          {/* Top-right badge */}
          <div className="absolute -top-1 -right-1 bg-rose-500 text-xs px-2 py-1 rounded-xl z-10 shadow-md">
            top 1%
          </div>
          {/* Main content */}
          <p className="text-sm  text-gray-300">Experience</p>
          <div className="flex flex-row items-center space-x-1">
            <FaStar className="text-green-600 text-base" size={23} />
            <p className="text-center mt-0.5">
              <span className="font-extrabold text-lg ">13826</span> XP
            </p>
          </div>
        </div>
      </div>
      {/* Account level */}
    </div>
  );
};
