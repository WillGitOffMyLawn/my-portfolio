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
          "bg-gradient-to-r from-purple-600 to-violet-500 text-white shadow-md hover:shadow-lg hover:translate-y-[-2px] hover:from-purple-500 hover:to-violet-400 active:translate-y-[1px]",
        destructive:
          "bg-gradient-to-r from-red-600 to-rose-500 text-white shadow-md hover:shadow-lg hover:translate-y-[-2px] hover:from-red-500 hover:to-rose-400 active:translate-y-[1px]",
        outline:
          "border-2 border-input bg-background/80 backdrop-blur-sm shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-violet-400 hover:shadow-md",
        secondary:
          "bg-gradient-to-r from-zinc-700 to-zinc-800 text-white shadow-sm hover:shadow-md hover:translate-y-[-1px] hover:from-zinc-600 hover:to-zinc-700 active:translate-y-[1px]",
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
