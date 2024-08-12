"use server";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DocumentLevelInput = async ({
  defaultValue,
  required,
}: {
  defaultValue?: string;
  required?: boolean;
}) => {
  const response = await fetch("http://localhost:3001/document_level");
  const doclevels = await response.json();
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="document_level_id" className="block text-sm font-medium">
        დოკუმენტის დონე *
      </Label>
      <Select
        name="document_level_id"
        required={required}
        defaultValue={defaultValue}
      >
        <SelectTrigger className="  ">
          <SelectValue placeholder="აირჩიეთ დოკუმენტის დონე" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>დონეები</SelectLabel>
            {doclevels.map((level: any) => (
              <SelectItem key={level.id} value={String(level.id)}>
                {level.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
