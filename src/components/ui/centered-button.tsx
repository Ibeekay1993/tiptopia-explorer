
import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CenteredButtonProps extends ButtonProps {
  children: React.ReactNode;
  containerClassName?: string;
}

export function CenteredButton({ 
  children, 
  containerClassName, 
  className,
  ...props 
}: CenteredButtonProps) {
  return (
    <div className={cn("flex justify-center w-full", containerClassName)}>
      <Button
        className={cn("text-center", className)}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}
