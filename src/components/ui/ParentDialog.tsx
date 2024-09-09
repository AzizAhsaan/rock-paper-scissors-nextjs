import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

type Props = PropsWithChildren<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  DialogTriggerComponent?: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}>;
const ParentDialog = ({
  isOpen,
  setIsOpen,
  title,
  description,
  DialogTriggerComponent,
  className,
  children,
}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{DialogTriggerComponent}</DialogTrigger>
      <DialogContent
        className={cn(
          `sm:max-w-[400px] bg-white border border-gray-600 outline-none`,
          className
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-[#3c3e59] text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
export default ParentDialog;
