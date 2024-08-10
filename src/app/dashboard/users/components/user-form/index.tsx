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
          <Label htmlFor="nameENG">სახელი (ENG)</Label>
          <Input
            id="nameENG"
            name="nameENG"
            className="w-full"
            placeholder="სახელი ENG"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="lastname">
            გვარი <span className="text-red-600">*</span>
          </Label>
          <Input id="lastname" name="lastname" placeholder="გვარი" required />
        </div>
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="lastnameENG">გვარი (ENG)</Label>
          <Input
            id="lastnameENG"
            name="lastnameENG"
            placeholder="გვარი ENG"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="id">
            პირადი ნომერი <span className="text-red-600">*</span>
          </Label>
          <Input id="id" name="id" placeholder="12345678909" required />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="gender">სქესი</Label>
          <Select name="gender">
            <SelectTrigger className="  " id="gender">
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
        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="department">
            უწყება <span className="text-red-600">*</span>
          </Label>
          <Select name="department" required>
            <SelectTrigger id="department">
              <SelectValue placeholder="უწყება" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>უწყება</SelectLabel>
                <SelectItem value="male">მამრობითი</SelectItem>
                <SelectItem value="female">მდედრობითი</SelectItem>
                <SelectItem value="other">სხვა</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <Label htmlFor="role">
            როლი <span className="text-red-600">*</span>
          </Label>
          <Select name="role" required>
            <SelectTrigger id="role">
              <SelectValue placeholder="როლი" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>როლი</SelectLabel>

                <SelectItem value="male">მამრობითი</SelectItem>
                <SelectItem value="female">მდედრობითი</SelectItem>
                <SelectItem value="other">სხვა</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
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
          <Label htmlFor="positionENG">თანამდებობა (ENG)</Label>
          <Input
            id="positionENG"
            name="positionENG"
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
