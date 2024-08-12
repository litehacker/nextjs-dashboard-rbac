"use server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getToken } from "@/lib/auth-check";
import { Tab } from "@/lib/types";
import Link from "next/link";
import { DocumentLevelInput } from "../document-level-input";

export const EditBookmarkForm = async ({
  action,
  id,
}: {
  action: (formData: FormData) => Promise<never>;
  id: string;
}) => {
  const token = await getToken();
  let tab: Tab | null = null;
  try {
    const response = await fetch(process.env.BASE_URL + "/api/v1/tabs/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (response.ok) {
      const internalResponseJSON = await response.json();
      if (internalResponseJSON.success) {
        const _tab = internalResponseJSON.data[0];
        console.log("Tab ", process.env.BASE_URL + "/api/v1/tabs/" + id, _tab);
        tab = _tab;
      }
    } else {
      console.error("Error fetching tabs", response.status);
    }
  } catch (e) {
    console.error("Error fetching tabs", e);
  }
  return (
    tab && (
      <div className="w-full flex justify-center">
        <form className="flex flex-col w-full" action={action}>
          <h1 className="p-4 flex justify-center border-b border-[#C9D0E1]">
            ჩანართის რედაქტირება
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
                defaultValue={tab?.name}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name_eng" className="block text-sm font-medium">
                დასახელება (ENG)
              </Label>
              <Input
                id="name_eng"
                name="name_eng"
                placeholder="ჩაწერეთ სახელი"
                defaultValue={tab?.name_eng}
              />
            </div>
            <DocumentLevelInput
              defaultValue={
                tab.document_level_id
                  ? String(tab.document_level_id)
                  : undefined
              }
            />
          </section>
          <div className="flex justify-end p-4 border-t border-[#C9D0E1] gap-3">
            <Link href="/dashboard/bookmarks" replace>
              <Button variant="ghost">გაუქმება</Button>
            </Link>
            <Button type="submit">შენახვა</Button>
          </div>
        </form>
      </div>
    )
  );
};
