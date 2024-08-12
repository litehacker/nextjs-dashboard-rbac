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
import { getToken } from "@/lib/auth-check";

export const UserRoleSelect = async () => {
  const roles = [];
  const token = await getToken();
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/v1/role`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const internalResponseJSON = await response.json();
      if (internalResponseJSON.success) {
        roles.push(...internalResponseJSON.data);
        return (
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

                  {roles.map((role) => (
                    <SelectItem key={role.id} value={String(role.id)}>
                      {role.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        );
      }
    }
  } catch (e) {
    console.error(e);
  }
  return null;
};
