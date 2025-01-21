"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SimulationForm } from "@/components/simulation-form";

interface SimulationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SimulationDialog({
  open,
  onOpenChange,
}: SimulationDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1A524F]">
            Simule Seu Consórcio
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <SimulationForm 
          // onSuccess={() => onOpenChange(false)}
           />
        </div>
      </DialogContent>
    </Dialog>
  );
}
