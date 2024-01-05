"use client";

import { FC } from "react";
import { Button } from "../button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton: FC<BackButtonProps> = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant={"link"} className="font-normal text-normal w-full" size={'sm'} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
