"use client";

import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "lucide-react";

interface DownloadCvModalProps {
  className?: string;
  size?: "default" | "sm" | "lg" | "xs";
  variant?: "default" | "outline" | "secondary" | "ghost";
}

export function DownloadCvModal({
  className,
  size = "sm",
  variant = "default",
}: DownloadCvModalProps) {
  return (
    <Button
      type="button"
      size={size}
      variant={variant}
      asChild
      className={cn(
        "rounded-lg cursor-pointer font-medium gap-1.5 shadow-sm active:scale-[0.98] transition-transform",
        className,
      )}
    >
      <a href={DATA.cvurl} target="_blank" rel="noopener noreferrer">
        <span>Download CV</span>
        <DownloadIcon className="size-3.5" />
      </a>
    </Button>
  );
}
