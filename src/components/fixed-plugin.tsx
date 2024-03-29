"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://www.linkedin.com/in/hasan-udin-076080262/" target="_blank">
      <Button placeholder="Isi disini"
        color="white"
        size="sm"
        className="!fixed bottom-4 z-50 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Material Tailwind"
          src="https://www.material-tailwind.com/favicon.png"
        />{" "}
        Hasan LinkedIn
      </Button>
    </a>
  );
}
