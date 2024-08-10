"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { UploadIconSVG } from "./icons/upload";
export const FileUploadForm = ({
  action,
}: {
  action: string | ((formData: FormData) => void) | undefined;
}) => {
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
          <UploadIconSVG />
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
};
