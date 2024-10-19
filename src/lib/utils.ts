import { training_status } from "@/modelDataset";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + "...";
  }
}

export function getTrainingDetails(status: string) {
  if (!status) return;
  const statusData = training_status?.find((item) => item?.value === status);
  return statusData;
}
