import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import Link from "next/link";
import { FormWarning } from "../form-warning";
import { AgencySelect } from "./agency-select";
import { UserRoleSelect } from "./role-select/user-role-select";
export const UserForm = () => {
  return (
    <div className="p-6 flex  flex-col gap-4 overflow-y-auto max-h-[500px]">
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="name">
            სახელი <span className="text-red-600">*</span>
          </Label>
          <Input id="name" name="name" placeholder="სახელი" required />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="name_eng">სახელი (ENG)</Label>
          <Input
            id="name_eng"
            name="name_eng"
            className="w-full"
            placeholder="სახელი ENG"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="lastName">
            გვარი <span className="text-red-600">*</span>
          </Label>
          <Input id="lastName" name="lastName" placeholder="გვარი" required />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="lastName_eng">გვარი (ENG)</Label>
          <Input
            id="lastName_eng"
            name="lastName_eng"
            placeholder="გვარი ENG"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="pid">
            პირადი ნომერი <span className="text-red-600">*</span>
          </Label>
          <Input id="pid" name="pid" placeholder="12345678909" required />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="gender">სქესი</Label>
          <Select name="gender">
            <SelectTrigger id="gender">
              <SelectValue placeholder="სქესი" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>სქესი</SelectLabel>

                <SelectItem value="male">მამრობითი</SelectItem>
                <SelectItem value="female">მდედრობითი</SelectItem>
                <SelectItem value="other">სხვა</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-6">
        <AgencySelect />
        <UserRoleSelect />
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="position">
            თანამდებობა <span className="text-red-600">*</span>
          </Label>
          <Input
            id="position"
            name="position"
            placeholder="დეველოპერი"
            required
          />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="position_eng">თანამდებობა (ENG)</Label>
          <Input
            id="position_eng"
            name="position_eng"
            className="w-full"
            placeholder="თანამდებობა ENG"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="email">
            ელ-ფოსტა <span className="text-red-600">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="ელ-ფოსტა"
            type="email"
            required
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="mobile">
            მობილური <span className="text-red-600">*</span>
          </Label>
          <Input id="mobile" name="mobile" placeholder="555 555 555" required />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="phone">ტელეფონი</Label>
          <Input
            id="phone"
            name="phone"
            className="w-full"
            placeholder="+995 322 000 000"
          />
        </div>
      </div>
      <FormWarning />
    </div>
  );
};
