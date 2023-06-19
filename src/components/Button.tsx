import { cn } from "../utils"

// 1. Define Props
type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
// Copy the ButtonProps type by hovering a html button element

// 2. Write Component
export function Button({ children, className, ...props }: ButtonProps) {
  // Spread the captured props onto the button
  return (
    <button
      className={cn("bg-slate-800 text-white rounded-md px-4 py-2", className)}
      {...props}
    >
      {children}
    </button>
  )
}
