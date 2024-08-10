"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function UploadFilePage() {
  const [file, setFile] = useState<File | null>(null);
  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };
  const handleFileSelect = (event: any) => {
    setFile(event.target.files[0]);
  };
  const handleRemove = () => {
    setFile(null);
  };
  const searchParams = useSearchParams();
  const source = searchParams.get("source") ?? "/dashboard/bookmarks";
  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white">
      <div className="flex p-3 bg-[#F5F8FF] rounded-xl">
        <div className="h-6 w-6 flex items-center justify-center">
          <UploadIcon />
        </div>
      </div>
      <h2 className="text-xl font-bold">ატვირთვა</h2>
      <div
        className="flex flex-col items-center justify-center w-full max-w-lg p-6 border-2 border-dashed border-gray-300 rounded-lg"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {file ? (
          <div className="w-full flex items-center justify-between p-2 bg-gray-100 rounded-lg">
            <Badge variant="secondary">JPEG</Badge>
            <span className="flex-1 ml-2">{file.name}</span>
            <button onClick={handleRemove} className="text-red-500">
              <X className="w-4 h-4" />
              <span className="sr-only">remove</span>
            </button>
          </div>
        ) : (
          <>
            <label
              htmlFor="file-input"
              className="cursor-pointer text-blue-600"
            >
              დააჭირეთ ატვირთვას
              <input
                id="file-input"
                type="file"
                className="sr-only"
                onChange={handleFileSelect}
              />
            </label>
            ან ჩააგდეთ
            <p className="text-gray-500">
              ფაილის დასაშვები ფორმატი: JPEG, JPG, PNG
            </p>
          </>
        )}
      </div>
      <div className="flex justify-between w-full max-w-lg">
        <Link className="w-1/2" href={source}>
          <Button variant="secondary" className="w-1/2">
            გაუქმება
          </Button>
        </Link>
        <Button className="w-1/2 ml-2" type="submit">
          შენახვა
        </Button>
      </div>
    </div>
  );
}

function UploadIcon() {
  return (
    <svg
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.85 6.04C19.17 2.59 16.14 0 12.5 0C9.61 0 7.1 1.64 5.85 4.04C2.84 4.36 0.5 6.91 0.5 10C0.5 13.31 3.19 16 6.5 16H19.5C22.26 16 24.5 13.76 24.5 11C24.5 8.36 22.45 6.22 19.85 6.04ZM14.5 9V13H10.5V9H7.5L12.15 4.35C12.35 4.15 12.66 4.15 12.86 4.35L17.5 9H14.5Z"
        fill="#2970FF"
      />
    </svg>
  );
}
