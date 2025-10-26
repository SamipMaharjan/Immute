"use client";

import Image from "next/image";
import error from "/public/errors/500.webp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Custom500() {
  const router = useRouter();

  return (
    <div className="h-screen w-full text-black bg-white flex flex-col items-center justify-start gap-8 pt-20">
      <Image src={error} alt="404" width={500} height={500} />
      <div className="flex flex-col gap-2 items-center">
        <span className="text-lg font-normal">
          Something went wrong on the server.
        </span>
      </div>
      <div className="flex gap-4">
        <Button
          className="border rounded-xl text-md border-black min-w-32 bg-transparent text-black hover:bg-black hover:text-white"
          type="button"
          onClick={() => router.back()}
        >
          Go back
        </Button>
        <Button
          className="bg-black hover:bg-[#000000dd] rounded-xl text-md min-w-32 text-white"
          type="button"
          onClick={() => router.refresh()}
        >
          Reload
        </Button>
      </div>
    </div>
  );
}
