"use server";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { DocumentLevelInput } from "../document-level-input";

export const CreateBookmarkForm = ({
  action,
}: {
  action: string | ((formData: FormData) => void) | undefined;
}) => {
  return (
    <div className="w-full flex justify-center">
      <form className="flex flex-col w-full" action={action}>
        <h1 className="p-4 flex justify-center border-b border-[#C9D0E1]">
          ჩანართის შექმნა
        </h1>
        <section className="flex flex-col gap-4 p-6">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name" className="">
              დასახელება (ქარ) *
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="ჩაწერეთ სახელი"
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name_eng" className="block text-sm font-medium">
              დასახელება (ENG)
            </Label>
            <Input id="name_eng" name="name_eng" placeholder="ჩაწერეთ სახელი" />
          </div>
          <DocumentLevelInput required />
        </section>
        <div className="flex justify-end p-4 border-t border-[#C9D0E1] gap-3">
          <Link href="/dashboard/bookmarks" replace>
            <Button variant="ghost">გაუქმება</Button>
          </Link>
          <Button type="submit">დამატება</Button>
        </div>
      </form>
    </div>
  );
};
