"use server";

import { searchBookmarks } from "@/actions/bookmarks/search";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";

export const FilterBookmarks = async () => {
  return (
    <Card className="w-full max-w-xs h-fit">
      <form action={searchBookmarks} className="w-full">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-700">
            ძებნა
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <TooltipProvider>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-black">
                სახლემწოდება
              </Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  placeholder="ჩანაწერი სახელი"
                  className="pr-10"
                />
                <Tooltip>
                  <TooltipTrigger>
                    <CircleHelp className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="!absolute -right-20 top-0">
                    <p>ჩაწერეთ ჩანაწერის სახელი</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="namecode"
                className="text-sm font-medium text-black"
              >
                NAMECODE
              </Label>
              <div className="relative">
                <Input
                  id="namecode"
                  name="namecode"
                  placeholder="ჩანაწერი სახელი"
                  className="pr-10"
                />
                <Tooltip>
                  <TooltipTrigger>
                    <CircleHelp className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent className="!absolute -right-20 top-0">
                    <p>ჩაწერეთ ჩანაწერის კოდი</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </TooltipProvider>
          <div className="space-y-2">
            <Label
              htmlFor="birthdate"
              className="text-sm font-medium text-black"
            >
              დაბადების თარიღი
            </Label>
            <Select>
              <SelectTrigger id="birthdate" aria-label="Birthdate">
                <SelectValue placeholder="აირჩიეთ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="ghost" className="font-bold" type="reset">
            გასუფთავება
          </Button>
          <Button variant="secondary" type="submit">
            ძებნა
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
