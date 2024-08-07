"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function BookmarkArchiveDate({
  id,
  name,
  placeholder,
  required,
}: {
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  const [date, setDate] = useState("");
  const handleDateChange = (event: any) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, "");
    let formattedDate = "";
    if (inputValue.length > 0) {
      formattedDate += inputValue.slice(0, 2) + "/";
      if (inputValue.length > 2) {
        formattedDate += inputValue.slice(2, 4) + "/";
        if (inputValue.length > 4) {
          formattedDate += inputValue.slice(4, 8);
        }
      }
    }
    setDate(formattedDate);
  };
  const isValidDate = () => {
    if (date.length === 10) {
      const [day, month, year] = date.split("/");
      const parsedDay = parseInt(day, 10);
      const parsedMonth = parseInt(month, 10);
      const parsedYear = parseInt(year, 10);
      if (
        parsedDay >= 1 &&
        parsedDay <= 31 &&
        parsedMonth >= 1 &&
        parsedMonth <= 12 &&
        parsedYear >= 1900 &&
        parsedYear <= 2100
      ) {
        return true;
      }
    }
    return false;
  };
  return (
    <Input
      type="text"
      value={date}
      onChange={handleDateChange}
      placeholder={placeholder}
      className={`${
        !isValidDate() && date.length === 10 ? "border-red-500" : ""
      }`}
      name={name}
      id={id}
      required={required}
    />
  );
}
