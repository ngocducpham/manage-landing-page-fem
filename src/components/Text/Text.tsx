import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { textVariants } from ".";

interface Props
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof textVariants> {}

export function Text({ variant, size, link, className, ...props }: Props) {
    return (
        <div
            {...props}
            className={cn(textVariants({ variant, size, link, className }))}
        />
    );
}
