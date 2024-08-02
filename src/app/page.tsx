"use server";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { PasswordInput } from "./components/password-input";
import { login } from "@/actions/login";
import { LoginFormWrapperClient } from "./components/form";

export default async function RootPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="flex justify-between w-full p-4">
        <div className="text-2xl font-bold">MY.GOV.GE</div>
        <div className="flex items-center space-x-4">
          <Select>
            <SelectTrigger aria-label="Language">
              <SelectValue placeholder="ქართული" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ge">ქართული</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
          <Link href="#" className="text-gray-700 text-sm" prefetch={false}>
            დახმარება
          </Link>
        </div>
      </header>
      <h1 className="font-medium pb-6">ავტორიზაცია</h1>
      <Card className="w-full max-w-md">
        <LoginFormWrapperClient>
          <CardHeader className="text-center">
            <div className="flex justify-center">
              <div className="bg-[#F5F8FF] p-3 rounded-[10px]">
                <User color="#1F5EDD" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col text-center gap-2">
              <p className="text-sm font-medium">სახელი და პაროლი</p>
              <p className="text-sm text-muted-foreground">
                ავტორიზაციისთვის გთხოვთ გაიაროთ იდენტიფიკაცია MY.GOV.GE-ის
                ანგარიშით
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">მომხმარებელი</Label>
              <Input id="email" placeholder="ელ.ფოსტა ან მობილური" />
            </div>
            <PasswordInput />
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-500 text-white" type="submit">
              შესვლა
            </Button>
          </CardFooter>
        </LoginFormWrapperClient>
      </Card>
    </div>
  );
}
