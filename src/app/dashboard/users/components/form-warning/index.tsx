import { Info } from "lucide-react";

export const FormWarning = () => {
  return (
    <div className="flex p-2.5 bg-[#F1F5F8] rounded gap-2 items-center">
      <Info className="h-4 w-4 text-blue-600" />
      <p className="text-sm">
        <span> ახალი მომხმარებლის დასამატებლად ყველა</span>
        <span className="text-red-600 font-bold"> * </span>
        <span className="text-sm">ველის შევსება სავალდებულოა.</span>
      </p>
    </div>
  );
};
