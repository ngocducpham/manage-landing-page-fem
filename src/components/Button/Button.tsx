import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { buttonVariants } from ".";

interface Props
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

function Button({ variant, className, noShadow, small, ...props }: Props) {
    return <button className={cn(buttonVariants({ variant, noShadow, small, className }))} {...props} />;
}

export default Button;
