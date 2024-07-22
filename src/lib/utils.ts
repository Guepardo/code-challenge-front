import { AxiosError } from "axios";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
}

export function extractMessageFromErrorResponse(error: AxiosError) {
  const data = error.response?.data;

  if (Array.isArray(data)) {
    return data.join(". ") || "Internal Server Error";
  }

  return "Internal Server Error";
}
