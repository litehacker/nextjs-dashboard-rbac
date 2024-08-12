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

export const AgencySelect = async () => {
  try {
    const response = await fetch(`http://localhost:3001/agency`);
    const agencies: { id: number; name: string }[] = await response.json();
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor="agency">
          უწყება <span className="text-red-600">*</span>
        </Label>
        <Select name="agency" required>
          <SelectTrigger id="agency">
            <SelectValue placeholder="უწყება" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>უწყება</SelectLabel>
              {agencies.map((agency) => (
                <SelectItem key={agency.id} value={String(agency.id)}>
                  {agency.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    );
  } catch (error) {
    return null;
  }
};
