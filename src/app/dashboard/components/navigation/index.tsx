"use client";
import Link from "next/link";
import { DashboardHomeIcon } from "../icons/home";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Bookmark, Users, BriefcaseBusiness } from "lucide-react";
import { usePathname } from "next/navigation";
const navigation: {
  title: string;
  icon: ReactNode;
  href: string;
}[] = [
  {
    title: "ჩანართები",
    icon: <Bookmark className="h-6 w-[60px] my-3" />,
    href: "/dashboard/bookmarks",
  },
  {
    title: "მომხმარებლები",
    icon: <Users className="h-6 w-[60px] my-3" />,
    href: "/dashboard/users",
  },
  {
    title: "როლები",
    icon: <BriefcaseBusiness className="h-6 w-[60px] my-3" />,
    href: "/dashboard/roles",
  },
];
export const DashboardNavigation = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState(
    navigation.findIndex((item) => item.href === pathname)
  );
  return (
    <aside className="flex flex-col gap-16 bg-white max-w-[280px] m-[10px] rounded-xl group absolute h-full z-10 shadow">
      <div className="flex items-center justify-center gap-2 px-3 pt-[10px]">
        <figure className="w-[44px]">
          <DashboardHomeIcon />
        </figure>
        <span className="text-[8px] font-medium group-hover:inline hidden">
          პოლიტიკის დაგეგმვისა და კორდინაციის მართვის ელექტრონული სისტემა
        </span>
      </div>
      <nav className="flex flex-col gap-3">
        {navigation.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex items-center w-full text-gray-600 justify-center group-hover:justify-start",
              {
                "text-[#0A3998] border-l-2 border-[#2970FF] bg-[#F5F8FF]":
                  index === selected,
              }
            )}
            prefetch={false}
            onClick={() => setSelected(index)}
          >
            {item.icon}
            <span className="group-hover:inline hidden">{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
