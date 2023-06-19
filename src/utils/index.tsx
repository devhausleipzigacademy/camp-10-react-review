import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function getRandomElementFromArray<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

const element = getRandomElementFromArray(["a", "b", "c"])
const elementTwo = getRandomElementFromArray([1, 2, 3])
const elementThree = getRandomElementFromArray([1, 2, 3, "a", "b", "c"])
