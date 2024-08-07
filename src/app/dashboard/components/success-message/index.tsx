"use server";
import { Button } from "@/components/ui/button";
import { SuccessSVG } from "../icons/success-mark.svg";
import Link from "next/link";

export const SuccessMessage = async ({
  redirectToPath,
}: {
  redirectToPath: string;
}) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="p-4">
        <div className="p-8 gap-6 flex flex-col items-center">
          <SuccessSVG />
          <p className="text-green-700 font-bold text-base">
            ოპერაცია წარმატები განხორციელდა
          </p>
        </div>
      </div>
      <div className="p-4 flex justify-center">
        <Link href={redirectToPath} replace>
          <Button variant="default">დასრულება</Button>
        </Link>
      </div>
    </section>
  );
};
