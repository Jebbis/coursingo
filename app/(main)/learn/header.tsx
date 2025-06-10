import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <div className="sticky top-0 bg-surface4 pb-2 pt-1 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 border-surface3 text-selected lg:z-50">
      <Link href={"/courses"}>
        <Button variant={"ghost"} size={"sm"}>
          <ArrowLeft className="h-5 w-5 stroke-2 text-textmain" />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <div />
    </div>
  );
};
