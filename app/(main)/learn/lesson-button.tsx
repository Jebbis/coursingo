"use client";
import Link from "next/link";
import { Check, Crown, Star } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "react-circular-progressbar/dist/styles.css";
import WavyLine from "./learning-wave";

type Props = {
  id: number;
  index: number;
  title: string;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({
  id,
  index,
  title,
  totalCount,
  locked,
  current,
  percentage,
}: Props) => {
  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted ? Check : isLast ? Crown : Star;

  const href = isCompleted ? `/lesson/${id}` : "/lesson";

  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div className="pl-20">
        {current ? (
          <div className="flex flex-row items-center justify-center relative w-[300px]">
            {/* Lesson title box */}
            <div className="flex flex-col w-auto absolute top-[50px] left-10 bg-[#1e1e1e] rounded-xl py-2 px-4 z-10 border border-muted-foreground/10 bg-opacity-95">
              <h3
                className={cn(
                  "font-bold",
                  locked ? "text-text2" : "text-[#4ade80]"
                )}
              >
                {title}
              </h3>
              <p className="text-muted-foreground">Introduction</p>
            </div>
            {/* Circle Progress Bar */}
            <div className="h-[75px] w-[75px] absolute -top-9 left-10">
              <CircularProgressbarWithChildren
                value={Number.isNaN(percentage) ? 0 : percentage}
                styles={{
                  path: {
                    stroke: "#4ade80",
                  },
                  trail: { stroke: locked ? "#737780" : "#e5e7eb" },
                }}
                strokeWidth={6}
                className="bg-black rounded-full flex items-center stroke-[6px]"
              >
                <Button
                  size={"rounded"}
                  variant={"locked_lesson"}
                  className="h-[65px] w-[65px] z-10"
                >
                  {/* {String(locked)} */}
                  <Icon
                    style={{ width: "24px", height: "24px" }}
                    className={cn(
                      "",
                      locked
                        ? "fill-[#737780] "
                        : "text-[#4ade80] fill-[#4ade80]",
                      isCompleted && "fill-none "
                    )}
                  />
                </Button>
              </CircularProgressbarWithChildren>
            </div>
            <WavyLine
              isCompleted={isCompleted}
              locked={locked}
              current={current}
            />
          </div>
        ) : (
          <div className="flex flex-row items-center justify-center relative w-[300px]">
            {/* Lesson title box */}
            <div className="flex flex-col w-auto absolute top-[50px] left-10 bg-[#1e1e1e] rounded-xl py-2 px-4 z-10 border border-muted-foreground/10 bg-opacity-95">
              <h3
                className={cn(
                  "font-bold",
                  locked ? "text-text2" : "text-[#4ade80]"
                )}
              >
                {title}
              </h3>
              <p className="text-muted-foreground">Introduction</p>
            </div>
            {/* Circle Progress Bar */}
            <div className="h-[75px] w-[75px] absolute -top-9 left-10">
              <CircularProgressbarWithChildren
                value={Number.isNaN(percentage) ? 0 : percentage}
                styles={{
                  path: {
                    stroke: "#4ade80",
                  },
                  trail: { stroke: locked ? "#737780" : "#e5e7eb" },
                }}
                strokeWidth={6}
                className="bg-black rounded-full flex items-center stroke-[6px]"
              >
                <Button
                  size={"rounded"}
                  variant={"locked_lesson"}
                  className="h-[65px] w-[65px] z-10"
                >
                  {/* {String(locked)} */}
                  <Icon
                    style={{ width: "24px", height: "24px" }}
                    className={cn(
                      "",
                      locked
                        ? "fill-[#737780] "
                        : "text-[#4ade80] fill-[#4ade80]",
                      isCompleted && "fill-none "
                    )}
                  />
                </Button>
              </CircularProgressbarWithChildren>
            </div>
            <WavyLine
              isCompleted={isCompleted}
              locked={locked}
              current={current}
            />
          </div>
        )}
      </div>
    </Link>
  );
};
