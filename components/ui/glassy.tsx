import * as React from "react"
import { sunflower } from "../../app/fonts";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority"

const glassyVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "text-3xl",
                lg: "text-6xl"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
)

export interface GlassyProps
extends React.HTMLAttributes<HTMLDivElement>,
VariantProps<typeof glassyVariants> {}


function Glassy({ className, variant, ...props}: GlassyProps) {
    return (
        <div className={cn("flex flex-row", sunflower.className, glassyVariants({ variant }), className)} {...props}>
            glassy<div className="text-glassy font-bold">PDM</div>
        </div>
    )
}

export { Glassy, glassyVariants }