import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-['Nexa_Bold'] text-[1rem]",
  {
    variants: {
      variant: {
        default:
          "bg-[rgba(20,20,20,0.6)] backdrop-blur-[12px] text-white border border-[rgba(255,255,255,0.15)] shadow-md hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:border-[rgba(124,58,237,0.4)] hover:translate-y-[-2px] active:translate-y-[1px]",
        destructive:
          "bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-md hover:shadow-lg hover:translate-y-[-2px] hover:from-red-500 hover:to-rose-400 active:translate-y-[1px]",
        outline:
          "border border-[rgba(255,255,255,0.15)] bg-[rgba(20,20,20,0.4)] backdrop-blur-[12px] text-white shadow-sm hover:border-[rgba(124,58,237,0.4)] hover:shadow-[0_0_15px_rgba(124,58,237,0.2)] hover:translate-y-[-1px]",
        secondary:
          "bg-[rgba(30,30,30,0.5)] backdrop-blur-[8px] text-white border border-[rgba(255,255,255,0.1)] shadow-sm hover:shadow-md hover:translate-y-[-1px] hover:border-[rgba(16,185,129,0.3)] active:translate-y-[1px]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-md px-7 has-[>svg]:px-5 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  style = {},
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  
  // Add inline style with !important to override any other styles
  const buttonStyle = { 
    ...style, 
    fontSize: '1rem !important'
  };
  
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={buttonStyle}
      {...props}
    />
  )
}

export { Button, buttonVariants }
